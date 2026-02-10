import type { FC } from "react";
import { LeagueSelector } from "../../features/league/LeagueSelector";
import { Typography, Stack } from "@mui/material";
import { Scoreboard } from "../../features/scoreboeard/components/ScoreboardList";

const DashboardPage: FC = () => {
  return (
    <Stack direction={"column"} gap="20px" p={3}>
      <Typography variant="h4">Scoreboard</Typography>
      <LeagueSelector />
      <Scoreboard />
    </Stack>
  );
};

export default DashboardPage;
