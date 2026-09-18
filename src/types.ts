export interface NavSection {
  id: string;
  title: string;
  shortTitle: string;
  pointNumber?: number;
}

export interface TerrainStage {
  id: string;
  name: string;
  frictionCondition: string;
  supportAssessment: string;
  riskFactor: string;
  tacticalAction: string;
}

export interface DrillItem {
  id: string;
  category: string;
  title: string;
  objective: string;
  method: string[];
  keyObservation: string;
  commonMistake: string;
}
