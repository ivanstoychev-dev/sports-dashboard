import { Box, Drawer, Stack, Typography, Divider, Avatar } from "@mui/material";
import { useTeams } from "../../../hooks/useESPN";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import LoadingState from "../../../shared/components/LoadingState";
import type { Team } from "../types";

function TeamDetailsDrawer({
  open,
  onClose,
  teamId,
}: {
  open: boolean;
  onClose: () => void;
  teamId: string;
}) {
  const selectedLeague = useSelector(
    (state: RootState) => state.league.selected,
  );

  const { data, isLoading } = useTeams(selectedLeague, { teamId });

  const team: Team = data?.team;
  const records = team?.record?.items ?? [];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 380,
          bgcolor: "#0d1015",
          color: "#fff",
          p: 2,
        },
      }}
    >
      {isLoading ? (
        <LoadingState loadingMessage="Loading team data..." />
      ) : (
        <>
          <Stack direction={"row"} gap={1} mb={2}>
            <Avatar src={team?.logos[0].href} alt="team logo" />
            <Box>
              <Typography variant="h5" fontWeight={700}>
                {team?.displayName}
              </Typography>
              <Typography variant="body2" color="gray">
                {team?.standingSummary}
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ borderColor: "#222" }} />

          {/* Records */}
          <Stack gap={2} mt={2}>
            {records.map((record) => (
              <Box
                key={record.type}
                sx={{
                  p: 2,
                  bgcolor: "#12161d",
                  borderRadius: 2,
                  border: "1px solid #1f2933",
                }}
              >
                <Typography fontWeight={600} mb={1}>
                  {record.description}
                </Typography>

                <Stack gap={0.5}>
                  {record.stats.map((stat) => (
                    <Stack
                      key={stat.name}
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Typography variant="body2" color="gray">
                        {stat.name}
                      </Typography>
                      <Typography variant="body2" fontWeight={500}>
                        {stat.value.toFixed(2)}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </>
      )}
    </Drawer>
  );
}

export default TeamDetailsDrawer;
