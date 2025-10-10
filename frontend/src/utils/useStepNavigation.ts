import { useContext } from "react";
import { ScraperContext } from "../context/ScraperContext";

export const useStepNavigation = () => {
  const ctx = useContext(ScraperContext);
  if (!ctx) throw new Error("useStepNavigation must be used inside ScraperProvider");

  const next = () => ctx.setCurrentStep(ctx.currentStep + 1);
  const prev = () => ctx.setCurrentStep(ctx.currentStep - 1);

  return { ...ctx, next, prev };
};
