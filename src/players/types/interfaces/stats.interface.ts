export interface IStats {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  teamName: string;
  savesTier1?: number;
  savesTier2?: number;
  subs?: number;
  motms?: number;
  points?: number;
  redCards?: number;
  concedes?: number;
  assists?: number;
  shotsTier1?: number;
  shotsTier2?: number;
  starts?: number;
  goals?: number;
  tacklesTier1?: number;
  tacklesTier2?: number;
  ownGoals?: number;
  cleansheets?: number;
  penSaves?: number;
  penMisses?: number;
  passesTier1?: number;
  passesTier2?: number;
  yellowCards?: number;
}
