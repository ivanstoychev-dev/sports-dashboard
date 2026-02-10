import { Box, CircularProgress, Typography } from "@mui/material";

function LoadingState({ loadingMessage }: { loadingMessage?: string }) {
  return (
    <Box textAlign="center" mt={4}>
      <CircularProgress />
      <Typography>{loadingMessage}</Typography>
    </Box>
  );
}

export default LoadingState;
