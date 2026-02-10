export type SportsEvent = {
  id: string;
  competitions: Competition[];
};

export type Competition = {
  competitors: Competitor[];
  venue: {
    fullName: string;
    address: {
      city: string;
      state: string;
    };
  };
};

export type Competitor = {
  team: Team;
  records: Record[];
  homeAway: string;
  linescores: LineScore[];
  score: string;
  leaders: Leaders[];
};

type Record = {
  summary: string;
  homeAway: string;
};

export type Team = {
  logo: string;
  displayName: string;
  shortDisplayName: string;
  records: Record[];
};

type LineScore = {
  value: string;
};

type Leaders = {
  leaders: [
    {
      athlete: {
        shortName: string;
        headshot: string;
      };
    },
  ];
};

export type Boxscore = {
  teams: BoxscoreTeam[];
  players: BoxscorePlayer[];
};

export type BoxscoreTeam = {
  team: TeamInfo;
  statistics: TeamStat[];
  displayOrder: number;
  homeAway: "home" | "away";
};

export type TeamInfo = {
  id: string;
  uid: string;
  slug: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  color: string;
  alternateColor: string;
  logo: string;
};

export type TeamStat = {
  name: string;
  displayValue: string;
  label: string;
  abbreviation?: string;
};

export type BoxscorePlayer = {
  team: TeamInfo;
  statistics: PlayerStatistics[];
};

export type PlayerStatistics = {
  labels: string[];
  keys: string[];
  descriptions: string[];
  athletes: AthleteStats[];
};

export type AthleteStats = {
  athlete: Athlete;
  starter: boolean;
  didNotPlay: boolean;
  reason?: string;
  ejected: boolean;
  stats: string[];
};

export type Athlete = {
  id: string;
  uid: string;
  guid: string;
  displayName: string;
  shortName: string;
  links: AthleteLink[];
  headshot?: {
    href: string;
    alt?: string;
  };
  jersey: string;
  position: {
    name: string;
    displayName: string;
    abbreviation: string;
  };
};

export type AthleteLink = {
  rel: string[];
  href: string;
  text: string;
};

export type TeamStatPlayer = {
  id: string;
  uid: string;
  displayName: string;
  shortName: string;
  jersey: string;
  position: {
    name: string;
    displayName: string;
    abbreviation: string;
  };
  headshot?: {
    href: string;
    alt?: string;
  };
  starter: boolean;
  didNotPlay: boolean;
  reason?: string;
  ejected: boolean;
  labels: string[];
  stats: string[];
};
