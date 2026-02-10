import { Box, Typography } from "@mui/material";

function ErrorState({ message }: { message: string }) {
  return (
    <Box textAlign="center" mt={4}>
      <Typography fontSize={20} color="red" fontWeight={600}>
        {message}
      </Typography>
    </Box>
  );
}

export default ErrorState;
