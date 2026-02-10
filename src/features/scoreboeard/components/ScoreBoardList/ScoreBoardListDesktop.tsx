import { Box, Typography } from "@mui/material";
import type { SportsEvent } from "../../types";
import TeamsInfo from "../TeamsInfo";
import TopPerformers from "../TopPerformers";
import { ButtonLink } from "../../../../shared/styles/ButtonLink";

function ScoreBoardListDesktop({
  events,
  onShowGameDetails,
}: {
  events: SportsEvent[];
  onShowGameDetails: (id: string) => void;
}) {
  return (
    <Box
      sx={{
        background: "#2d2d2d",
        paddingX: "25px",
        borderRadius: "10px",
      }}
    >
      {events.map((event) =>
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
                <ButtonLink onClick={() => onShowGameDetails(event.id)}>
                  Game Details
                </ButtonLink>
              </Box>
            </Box>
          </Box>
        )),
      )}
    </Box>
  );
}

export default ScoreBoardListDesktop;
