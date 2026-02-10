import type { League } from "../features/league/leagueSlice";

const BASE_URL = "https://site.api.espn.com/apis/site/v2/sports/";

export const fetchScoreboard = async (league: {
  sport: string;
  code: string;
}) => {
  const url = `${BASE_URL}/${league.sport}/${league.code}/scoreboard?dates=20260205`;

  const res = await fetch(url);
  if (!res.ok) {
    console.error("Failed to fetch scoreboard:", res.status, res.statusText);
    throw new Error("Failed to fetch scoreboard via CORS proxy");
  }

  return res.json();
};

export const fetchGameSummary = async (
  league: {
    sport: string;
    code: string;
  },
  gameId: string,
) => {
  const res = await fetch(
    `${BASE_URL}/${league.sport}/${league.code}/summary?event=${gameId}`,
  );
  if (!res.ok) throw new Error("Failed to fetch game summary");
  return res.json();
};

export const fetchTeams = async (
  league: League,
  options?: { teamId?: string },
) => {
  let url = `${BASE_URL}/${league.sport}/${league.code}/teams`;

  if (options?.teamId) {
    url += `/${options.teamId}`;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch teams");

  return res.json();
};
