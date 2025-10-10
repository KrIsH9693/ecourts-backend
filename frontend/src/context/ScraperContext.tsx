import { createContext, useState, type ReactNode } from "react";
import type { MetaData, CaseResult } from "../api/types";

interface ScraperContextType {
  meta?: MetaData;
  caseResult?: CaseResult;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  setMeta: (meta: MetaData) => void;
  setCaseResult: (result: CaseResult) => void;
}

export const ScraperContext = createContext<ScraperContextType | null>(null);

export const ScraperProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [meta, setMeta] = useState<MetaData>();
  const [caseResult, setCaseResult] = useState<CaseResult>();

  return (
    <ScraperContext.Provider value={{ currentStep, setCurrentStep, meta, setMeta, caseResult, setCaseResult }}>
      {children}
    </ScraperContext.Provider>
  );
};
