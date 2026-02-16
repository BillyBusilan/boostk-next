import { ReactNode } from "react";

export interface GrowthStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: ReactNode;
}
