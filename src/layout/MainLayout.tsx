import { useState } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonLink } from "../shared/styles/ButtonLink";
import { useLocation } from "react-router-dom";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname.startsWith("/teams")) return "Teams";
    if (location.pathname.startsWith("/scoreboard")) return "Scoreboard";
    return "Sports Dashboard";
  };

  return (
    <Box display="flex">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {getTitle()}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={"temporary"}
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: 240,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: 240,
            px: 2,
            pt: 3,
            boxSizing: "border-box",
            gap: "10px",
            background: "#0d1015",
          },
        }}
      >
        <ButtonLink href="/scoreboard">Scoreboard</ButtonLink>
        <ButtonLink href="/teams">Teams</ButtonLink>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: 8,
          transition: "margin 0.3s",
          p: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
