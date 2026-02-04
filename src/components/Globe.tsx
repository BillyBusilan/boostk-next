'use client';

import React, { useRef } from 'react';
import { useGlobeScene } from '@/hooks/useGlobeScene';

export default function Globe() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Use custom hook to handle Three.js logic
    useGlobeScene(containerRef);

    return (
        <div
            ref={containerRef}
            id="globe-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                background: '#000'
            }}
        />
    );
}
