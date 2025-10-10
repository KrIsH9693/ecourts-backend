export interface MetaData {
  states: string[];
  districts: string[];
  courts: string[];
}

export interface CaseResult {
  caseNumber: string;
  parties: string[];
  status: string;
  nextHearing: string;
}

export interface QueryLog {
  id: number;
  query: string;
  created_at: string;
}
