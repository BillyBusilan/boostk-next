import React from "react";
import { MessageSquareText, Users, TrendingUp } from "lucide-react";
import { GrowthStep } from "../types/steps";

export const growthSteps: GrowthStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Chat & Configure",
    description: "Tell us your story. Our AI analyzes inputs to structure campaign parameters, identifying opportunities.",
    icon: <MessageSquareText className="w-6 h-6 text-blue-500" />,
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Match Team",
    description: "Meet your dedicated growth squad. Experts assigned based on your industry vertical ensure the right mix.",
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Execute Growth",
    description: "Watch it happen. Real-time dashboards light up as leads flow. We iterate weekly, compounding growth.",
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
  },
];
