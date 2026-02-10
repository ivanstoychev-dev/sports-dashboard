import { useState, type FC } from "react";
import { useSelector } from "react-redux";
import { Stack, useMediaQuery } from "@mui/material";
import { useScoreboard } from "../../../../hooks/useESPN";
import GameDetailsModal from "../../../../components/GameDetailsModal";
import LoadingState from "../../../../shared/components/LoadingState";
import type { RootState } from "../../../../store/store";
import ErrorState from "../../../../shared/components/ErrorState";
import EmptyState from "../../../../shared/components/EmptyState";
import { theme } from "../../../../styles/theme";
import ScoreBoardListMobile from "./ScoreBoardListMobile";
import ScoreBoardListDesktop from "./ScoreBoardListDesktop";

export const Scoreboard: FC = () => {
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const selectedLeague = useSelector(
    (state: RootState) => state.league.selected,
  );
  const { data, isLoading, isError } = useScoreboard(selectedLeague);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isLoading) return <LoadingState loadingMessage="Loading scoreboard..." />;

  if (isError)
    return <ErrorState message="Error occurred while loading games" />;

  if (!data?.events?.length)
    return (
      <EmptyState
        message={`No games available for ${selectedLeague.name} today`}
      />
    );

  const handleShowGameDetails = (gameId: string) => {
    setModalOpen(true);
    setSelectedGameId(gameId);
  };

  return (
    <Stack alignItems={"center"}>
      {isMobile ? (
        <ScoreBoardListMobile
          events={data.events}
          onShowGameDetails={handleShowGameDetails}
        />
      ) : (
        <ScoreBoardListDesktop
          events={data.events}
          onShowGameDetails={handleShowGameDetails}
        />
      )}
      {selectedGameId && selectedLeague && (
        <GameDetailsModal
          league={selectedLeague}
          gameId={selectedGameId}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </Stack>
  );
};
