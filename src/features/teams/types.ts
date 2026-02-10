export type Teams = {
  team: Team;
};

export type Team = {
  id: string;
  record: TeamRecord;
  displayName: string;
  standingSummary: string;
  logos: {
    href: string;
  }[];
};

type TeamRecord = {
  items: {
    description: string;
    stats: TeamStats[];
    type: string;
  }[];
};

type TeamStats = {
  name: string;
  value: number;
};
