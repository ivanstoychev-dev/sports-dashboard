import { Avatar, Modal, Stack, Typography } from "@mui/material";
import { useGameSummary } from "../hooks/useESPN";
import LoadingState from "../shared/components/LoadingState";
import type { BoxscorePlayer } from "../features/scoreboeard/types";
import type { League } from "../features/league/leagueSlice";
import GameDetailsTable from "./GameDetailsTable";

export default function GameDetailsModal({
  gameId,
  open,
  onClose,
  league,
}: {
  gameId: string;
  open: boolean;
  onClose: () => void;
  league: League;
}) {
  const { data, isLoading } = useGameSummary(league, gameId);

  if (isLoading) return <LoadingState />;

  return (
    <Modal open={open} onClose={onClose}>
      <Stack
        sx={{
          bgcolor: "#0d1015",
          color: "#fff",
          p: 3,
          width: "95%",
          maxWidth: 1000,
          maxHeight: "90vh",
          mx: "auto",
          mt: "5vh",
          borderRadius: 2,
          overflowY: "auto",
          gap: 4,
        }}
      >
        {data.boxscore.players.map((pl: BoxscorePlayer) => (
          <Stack gap={2}>
            <Stack alignItems={"center"}>
              <Avatar sx={{ width: 64, height: 64 }} src={pl.team.logo} />
              <Typography fontSize={"30px"}>{pl.team.displayName}</Typography>
            </Stack>

            <GameDetailsTable players={pl} />
          </Stack>
        ))}
      </Stack>
    </Modal>
  );
}
