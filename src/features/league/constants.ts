export interface League {
  name: string;
  sport: string;
  code: string;
}

export const LEAGUES: League[] = [
  { name: "NBA", sport: "basketball", code: "nba" },
  { name: "NFL", sport: "football", code: "nfl" },
];
