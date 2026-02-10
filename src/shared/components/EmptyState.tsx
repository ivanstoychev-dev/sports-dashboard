import { Box, Typography } from "@mui/material";

function EmptyState({ message }: { message: string }) {
  return (
    <Box textAlign="center" mt={4}>
      <Typography>{message}</Typography>
    </Box>
  );
}

export default EmptyState;
