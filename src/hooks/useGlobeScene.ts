'use client';

import { useEffect, MutableRefObject } from 'react';
import * as THREE from 'three';
import { earthTextureUrl, globeGreetings } from '../data/globe-data';

export const useGlobeScene = (containerRef: MutableRefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        if (!containerRef.current) return;

        // --- Three.js Setup ---
        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // --- Lighting ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0x4a90e2, 0.3, 100);
        pointLight.position.set(-10, 0, 10);
        scene.add(pointLight);

        // --- Textures ---
        const textureLoader = new THREE.TextureLoader();

        const createCloudTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 4096;
            canvas.height = 2048;
            const ctx = canvas.getContext('2d');
            if (!ctx) return new THREE.CanvasTexture(canvas);

            ctx.fillStyle = 'rgba(0, 0, 0, 0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < 2000; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 60 + 30;
                const opacity = Math.random() * 0.4 + 0.2;

                const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.5})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            }

            return new THREE.CanvasTexture(canvas);
        };

        const earthTexture = textureLoader.load(earthTextureUrl);
        const cloudTexture = createCloudTexture();

        // --- Earth Globe ---
        const geometry = new THREE.SphereGeometry(12, 140, 140);
        const material = new THREE.MeshPhongMaterial({
            map: earthTexture,
            specular: new THREE.Color(0x333333),
            shininess: 5,
            emissive: new THREE.Color(0x000000),
            emissiveIntensity: 0.1
        });

        const globe = new THREE.Mesh(geometry, material);
        globe.rotation.y = -Math.PI / 2;
        globe.position.y = -12;
        scene.add(globe);

        // --- Atmosphere ---
        const atmosphereGeometry = new THREE.SphereGeometry(12.3, 64, 64);
        const atmosphereMaterial = new THREE.ShaderMaterial({
            vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
          gl_FragColor = vec4(0.4, 0.7, 1.0, 1.0) * intensity;
        }
      `,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            transparent: true
        });
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        atmosphere.position.y = -12;
        scene.add(atmosphere);

        // --- Clouds ---
        const cloudGeometry = new THREE.SphereGeometry(12.1, 128, 128);
        const cloudMaterial = new THREE.MeshPhongMaterial({
            map: cloudTexture,
            transparent: true,
            opacity: 0.5,
            depthWrite: false
        });
        const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
        clouds.position.y = -12;
        scene.add(clouds);

        // --- Stars ---
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 5000;
        const starsPositions = new Float32Array(starsCount * 3);

        for (let i = 0; i < starsCount * 3; i += 3) {
            const radius = 50 + Math.random() * 50;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            starsPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
            starsPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
            starsPositions[i + 2] = radius * Math.cos(phi);
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
        const starsMaterial = new THREE.PointsMaterial({
            size: 0.1,
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        });

        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // --- Star Hover Effect (Raycaster) ---
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        raycaster.params.Points.threshold = 2.0;

        const createGlowTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const ctx = canvas.getContext('2d');
            if (!ctx) return new THREE.CanvasTexture(canvas);

            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(16, 16, 8, 0, Math.PI * 2);
            ctx.fill();

            return new THREE.CanvasTexture(canvas);
        };

        const hoverTexture = createGlowTexture();
        const glowSprites: THREE.Sprite[] = [];
        const maxGlows = 30;

        for (let i = 0; i < maxGlows; i++) {
            const material = new THREE.SpriteMaterial({
                map: hoverTexture,
                color: 0xffffff,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });
            const sprite = new THREE.Sprite(material);
            sprite.scale.set(0.5, 0.5, 1);
            sprite.visible = false;
            sprite.userData = {
                phase: Math.random() * Math.PI * 2,
                baseScale: 0.5
            };
            scene.add(sprite);
            glowSprites.push(sprite);
        }

        // --- Floating Text ---
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const floatingTexts: any[] = [];

        const createTextSprite = (text: string) => {
            const fontface = "Arial";
            const fontsize = 40;
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (!context) return new THREE.Sprite();

            context.font = "Bold " + fontsize + "px " + fontface;
            const metrics = context.measureText(text);
            const textWidth = metrics.width;

            canvas.width = textWidth + 20;
            canvas.height = fontsize + 20;

            context.font = "Bold " + fontsize + "px " + fontface;
            context.fillStyle = "rgba(255, 255, 255, 1.0)";
            context.textAlign = "center";
            context.textBaseline = "middle";

            context.shadowColor = "rgba(0, 0, 0, 0.8)";
            context.shadowBlur = 6;
            context.shadowOffsetX = 2;
            context.shadowOffsetY = 2;

            context.fillText(text, canvas.width / 2, canvas.height / 2);

            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0 });
            const sprite = new THREE.Sprite(spriteMaterial);

            const scaleFactor = 0.02;
            sprite.scale.set(canvas.width * scaleFactor, canvas.height * scaleFactor, 1);
            return sprite;
        };

        const spawnFloatingText = () => {
            if (floatingTexts.length > 15) return;

            const text = globeGreetings[Math.floor(Math.random() * globeGreetings.length)];
            const sprite = createTextSprite(text);

            const phi_rnd = Math.acos(2 * Math.random() - 1);
            const theta_rnd = 2 * Math.PI * Math.random();

            const radius = 12;

            sprite.position.x = radius * Math.sin(phi_rnd) * Math.cos(theta_rnd);
            sprite.position.y = radius * Math.sin(phi_rnd) * Math.sin(theta_rnd) - 12;
            sprite.position.z = radius * Math.cos(phi_rnd);

            const direction = new THREE.Vector3().subVectors(sprite.position, new THREE.Vector3(0, -12, 0)).normalize();

            sprite.userData = {
                velocity: direction.multiplyScalar(0.05),
                life: 0,
                maxLife: 200 + Math.random() * 100
            };

            scene.add(sprite);
            floatingTexts.push(sprite);
        };

        // --- Camera Position ---
        camera.position.set(0, 0, 20);
        camera.lookAt(0, -6, 0);

        // --- Event Listeners ---
        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('mousemove', onMouseMove, false);
        window.addEventListener('resize', onResize);

        // --- Animation Loop ---
        let frameCount = 0;
        let animationId: number;

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            globe.rotation.y += 0.0006;
            clouds.rotation.y += 0.0012;
            atmosphere.rotation.y += 0.0005;
            stars.rotation.y += 0.0001;

            frameCount++;
            if (frameCount % 60 === 0) {
                spawnFloatingText();
            }

            // Star Hover
            raycaster.setFromCamera(mouse, camera);
            const intersections = raycaster.intersectObject(stars);

            glowSprites.forEach(sprite => sprite.visible = false);

            if (intersections.length > 0) {
                const centerPoint = intersections[0].point;
                const starsPosAttr = stars.geometry.attributes.position;
                const positions = starsPosAttr.array;
                let visibleCount = 0;

                for (let i = 0; i < positions.length && visibleCount < maxGlows; i += 3) {
                    const x = positions[i];
                    const y = positions[i + 1];
                    const z = positions[i + 2];

                    const dx = x - centerPoint.x;
                    const dy = y - centerPoint.y;
                    const dz = z - centerPoint.z;
                    const distSq = dx * dx + dy * dy + dz * dz;

                    if (distSq < 49) {
                        const sprite = glowSprites[visibleCount];
                        sprite.position.set(x, y, z);
                        sprite.visible = true;
                        visibleCount++;
                    }
                }
            }

            const time = Date.now() * 0.003;
            glowSprites.forEach(sprite => {
                if (sprite.visible) {
                    sprite.material.opacity = 0.4 + Math.sin(time + sprite.userData.phase) * 0.4;
                    const s = sprite.userData.baseScale + Math.sin(time * 1.5 + sprite.userData.phase) * 0.1;
                    sprite.scale.set(s, s, 1);
                }
            });

            for (let i = floatingTexts.length - 1; i >= 0; i--) {
                const sprite = floatingTexts[i];
                sprite.position.add(sprite.userData.velocity);
                sprite.userData.life++;

                const lifeRatio = sprite.userData.life / sprite.userData.maxLife;
                if (lifeRatio < 0.2) {
                    sprite.material.opacity = lifeRatio * 5;
                } else if (lifeRatio > 0.8) {
                    sprite.material.opacity = (1 - lifeRatio) * 5;
                } else {
                    sprite.material.opacity = 1;
                }

                if (sprite.userData.life >= sprite.userData.maxLife) {
                    scene.remove(sprite);
                    floatingTexts.splice(i, 1);
                }
            }

            renderer.render(scene, camera);
        };

        animate();

        // --- Cleanup ---
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(animationId);
            renderer.dispose();
            if (container) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            atmosphereGeometry.dispose();
            atmosphereMaterial.dispose();
            cloudGeometry.dispose();
            cloudMaterial.dispose();
            starsGeometry.dispose();
            starsMaterial.dispose();
        };
    }, [containerRef]);
};
