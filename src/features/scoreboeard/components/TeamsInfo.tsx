import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import type { Competitor } from "../types";

function TeamsInfo({ competitors }: { competitors: Competitor[] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "4fr repeat(4, 1fr) 1fr",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography variant="caption" sx={{ fontWeight: 600, fontSize: "20px" }}>
        FINAL
      </Typography>
      {[1, 2, 3, 4].map((q) => (
        <Typography key={q} textAlign="center">
          {q}
        </Typography>
      ))}
      <Typography
        variant="caption"
        sx={{ fontWeight: 600, fontSize: "20px", textAlign: "center" }}
      >
        T
      </Typography>
      {competitors.map((competitor) => (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <ListItemAvatar>
              <Avatar src={competitor.team.logo} />
            </ListItemAvatar>
            <ListItemText
              primary={competitor.team.displayName}
              secondary={
                <Stack direction="row" spacing={0.5} alignItems="center">
                  {competitor.records.map((record) => (
                    <span key={record.summary}>{record.summary}</span>
                  ))}
                  <Typography sx={{ textTransform: "capitalize" }}>
                    {competitor.homeAway}
                  </Typography>
                </Stack>
              }
            />
          </Box>
          {competitor.linescores.map((score) => (
            <Typography textAlign="center">{score.value}</Typography>
          ))}
          <Typography fontWeight={700} fontSize={24}>
            {competitor.score}
          </Typography>
        </>
      ))}
    </Box>
  );
}

export default TeamsInfo;
