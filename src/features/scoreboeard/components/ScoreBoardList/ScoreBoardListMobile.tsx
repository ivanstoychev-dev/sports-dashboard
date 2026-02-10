import { Avatar, Box, Stack, Typography } from "@mui/material";
import type { SportsEvent } from "../../types";
import { ButtonLink } from "../../../../shared/styles/ButtonLink";

function ScoreBoardListMobile({
  events,
  onShowGameDetails,
}: {
  events: SportsEvent[];
  onShowGameDetails: (id: string) => void;
}) {
  return (
    <>
      <Box
        sx={{
          background: "#2d2d2d",
          paddingX: "15px",
          borderRadius: "10px",
        }}
      >
        {events.map((event: SportsEvent) =>
          event.competitions.map((competition) => (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: 4,
                py: 2,
                borderBottom: "1px solid #545454",
                alignItems: "center",
              }}
            >
              <Stack>
                {competition.competitors.map((competitor) => (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={competitor.team.logo}
                      />

                      <Typography>
                        {competitor.team.shortDisplayName}
                      </Typography>

                      <Typography
                        sx={{ ml: "auto" }}
                        fontWeight={700}
                        fontSize={20}
                      >
                        {competitor.score}
                      </Typography>
                    </Box>
                  </>
                ))}
              </Stack>

              <Box>
                <ButtonLink
                  sx={{
                    fontSize: "12px",
                    textWrap: "nowrap",
                    width: "100px",
                  }}
                  onClick={() => onShowGameDetails(event.id)}
                >
                  Game Details
                </ButtonLink>
              </Box>
            </Box>
          )),
        )}
      </Box>
    </>
  );
}

export default ScoreBoardListMobile;
