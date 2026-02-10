import { useQuery } from "@tanstack/react-query";
import {
  fetchScoreboard,
  fetchGameSummary,
  fetchTeams,
} from "../api/espnClient";
import type { League } from "../features/league/constants";

type UseTeamsOptions = {
  teamId?: string;
};

// Scoreboard
export const useScoreboard = (league: League) => {
  return useQuery({
    queryKey: ["scoreboard", league],
    queryFn: () => fetchScoreboard(league),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

// Game summary
export const useGameSummary = (league: League, gameId: string) => {
  return useQuery({
    queryKey: ["gameSummary", league, gameId],
    queryFn: () => fetchGameSummary(league, gameId),
    enabled: !!gameId,
  });
};

// Teams
export const useTeams = (league: League, options?: UseTeamsOptions) => {
  return useQuery({
    queryKey: ["teams", league.code, options?.teamId],
    queryFn: () => fetchTeams(league, options),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
