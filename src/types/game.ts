export interface ScoringCriterion {
  id: string;
  name: string;
  description: string;
}

export interface GamePhase {
  id: string;
  number: number;
  title: string;
  description: string;
  criteria: ScoringCriterion[];
}

export interface RuleSection {
  id: string;
  title: string;
  content: string;
  items?: string[];
}

export interface PlayStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface NavLink {
  to: string;
  label: string;
}
