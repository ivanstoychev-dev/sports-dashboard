import { Button, styled } from "@mui/material";

export const ButtonLink = styled(Button)`
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  padding: 10px 22px;
  font-weight: 600;
  border-radius: 6px;
  text-transform: none;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);

  &:hover {
    background: linear-gradient(135deg, #2575fc 0%, #6a11cb 100%);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  }

  &:active {
    transform: scale(0.97);
  }
`;
