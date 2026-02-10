import type {
  AthleteStats,
  BoxscorePlayer,
} from "../features/scoreboeard/types";
import { Box, Typography } from "@mui/material";

function GameDetailsTable({ players }: { players: BoxscorePlayer }) {
  const starters = players.statistics[0].athletes.filter((p) => p.starter);
  const bench = players.statistics[0].athletes.filter((p) => !p.starter);

  const renderTable = (
    players: AthleteStats[],
    labels: string[],
    title: string,
  ) => (
    <Box p={2} sx={{ background: "#1f252a" }}>
      <Typography variant="h5" mb={1}>
        {title}
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ minWidth: 200, borderRight: "1px solid #444" }}>
          <Box
            sx={{ fontWeight: "bold", borderBottom: "1px solid #444", py: 0.5 }}
          >
            PLAYER
          </Box>
          {players.map((p) => (
            <Box key={p.athlete.id} sx={{ py: 0.5 }}>
              {p.athlete.displayName} #{p.athlete.jersey}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            overflowX: "auto",
            flex: 1,
          }}
        >
          <Box sx={{ display: "flex", borderBottom: "1px solid #444" }}>
            {labels.map((label: string) => (
              <Box
                key={label}
                sx={{
                  minWidth: 50,
                  textAlign: "center",
                  fontWeight: "bold",
                  py: 0.5,
                }}
              >
                {label}
              </Box>
            ))}
          </Box>

          {players.map((p) => (
            <Box
              key={p.athlete.id}
              sx={{ display: "flex", borderBottom: "1px solid #222" }}
            >
              {p.stats.map((stat: string, idx: number) => (
                <Box
                  key={idx}
                  sx={{ minWidth: 50, textAlign: "center", py: 0.5 }}
                >
                  {stat}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
  return (
    <Box>
      {renderTable(starters, players.statistics[0].labels, "Starters")}
      {bench.length > 0 &&
        renderTable(bench, players.statistics[0].labels, "Bench")}
    </Box>
  );
}

export default GameDetailsTable;
