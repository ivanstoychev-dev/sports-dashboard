import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useTeams } from "../../hooks/useESPN";
import LoadingState from "../../shared/components/LoadingState";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { LeagueSelector } from "../../features/league/LeagueSelector";
import { ButtonLink } from "../../shared/styles/ButtonLink";
import { useState } from "react";
import TeamDetailsDrawer from "../../features/teams/components/TeamDetailsDrawer";
import type { Teams } from "../../features/teams/types";
import ErrorState from "../../shared/components/ErrorState";
import EmptyState from "../../shared/components/EmptyState";

export const TeamsPage = () => {
  const selectedLeague = useSelector(
    (state: RootState) => state.league.selected,
  );
  const { data, isLoading, isError } = useTeams(selectedLeague);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState("");

  const handleShowTeamInfo = (teamId: string) => {
    setSelectedTeamId(teamId);
    setOpenDrawer(true);
  };

  if (isLoading) return <LoadingState loadingMessage="Loading Teams..." />;

  if (isError)
    return <ErrorState message="Error occurred while loading teams" />;

  if (!data?.sports[0]?.leagues[0]?.teams)
    return <EmptyState message={`No teams available`} />;

  const teams: Teams[] = data?.sports[0]?.leagues[0]?.teams;

  return (
    <Stack direction={"column"} gap="20px" p={3}>
      <LeagueSelector />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 2,
        }}
      >
        {teams?.map((t) => (
          <Box
            key={t.team.id}
            sx={{
              p: 2,
              borderRadius: 2,
              background: "#111",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Avatar
              src={t.team.logos?.[0]?.href}
              sx={{ width: 64, height: 64 }}
            />
            <Typography mb={1}>{t.team.displayName}</Typography>
            <ButtonLink
              sx={{ mt: "auto" }}
              onClick={() => handleShowTeamInfo(t.team.id)}
            >
              Team Info
            </ButtonLink>
          </Box>
        ))}
      </Box>
      <TeamDetailsDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        teamId={selectedTeamId}
      />
    </Stack>
  );
};
