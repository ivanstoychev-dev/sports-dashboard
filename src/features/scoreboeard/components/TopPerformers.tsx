import { Avatar, Box, Stack, Typography } from "@mui/material";
import type { Competitor } from "../types";

function TopPerformers({ competitors }: { competitors: Competitor[] }) {
  return (
    <Box
      gap="10px"
      pl={2}
      borderLeft="1px solid #545454"
      display={"flex"}
      flexDirection={"column"}
    >
      <Typography fontWeight={700}>TOP PERFORMERS</Typography>
      {competitors.map((competitor) => (
        <Stack direction={"row"} gap="10px">
          <Avatar
            sx={{ width: 50, height: 50, border: "1px solid green" }}
            src={competitor.leaders[0].leaders[0].athlete.headshot}
          />
          <Typography fontWeight={700}>
            {competitor.leaders[0].leaders[0].athlete.shortName}
          </Typography>
        </Stack>
      ))}
    </Box>
  );
}

export default TopPerformers;
