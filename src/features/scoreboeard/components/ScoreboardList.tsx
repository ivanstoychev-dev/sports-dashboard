import { useState, type FC } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { useScoreboard } from "../../../hooks/useESPN";
import GameDetailsModal from "../../../components/GameDetailsModal";
import LoadingState from "../../../shared/components/LoadingState";
import type { SportsEvent } from "../types";
import TeamsInfo from "./TeamsInfo";
import TopPerformers from "./TopPerformers";
import { ButtonLink } from "../../../shared/styles/ButtonLink";
import type { RootState } from "../../../store/store";
import ErrorState from "../../../shared/components/ErrorState";
import EmptyState from "../../../shared/components/EmptyState";

export const Scoreboard: FC = () => {
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const selectedLeague = useSelector(
    (state: RootState) => state.league.selected,
  );
  const { data, isLoading, isError } = useScoreboard(selectedLeague);

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
    <>
      <Box
        sx={{
          background: "#2d2d2d",
          paddingX: "25px",
          borderRadius: "10px",
        }}
      >
        {data.events.map((event: SportsEvent) =>
          event.competitions.map((competition) => (
            <Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  gap: 4,
                  py: 2,
                  borderBottom: "1px solid #545454",
                }}
              >
                <TeamsInfo competitors={competition.competitors} />
                <Box
                  sx={{
                    display: "flex",
                    borderLeft: "1px solid #545454",
                    gap: 1,
                    px: 2,
                    flexDirection: "column",
                  }}
                >
                  <Typography fontWeight={700}>
                    {competition.venue.fullName}
                  </Typography>
                  <Typography fontWeight={700}>
                    {competition.venue.address.city}{" "}
                    {competition.venue.address.state}
                  </Typography>
                </Box>
                <TopPerformers competitors={competition.competitors} />
                <Box>
                  <ButtonLink onClick={() => handleShowGameDetails(event.id)}>
                    Game Details
                  </ButtonLink>
                </Box>
              </Box>
            </Box>
          )),
        )}
      </Box>

      {selectedGameId && selectedLeague && (
        <GameDetailsModal
          league={selectedLeague}
          gameId={selectedGameId}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};
