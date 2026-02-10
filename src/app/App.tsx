import { Routes, Route, Navigate } from "react-router-dom";
import { AppProviders } from "./providers";
import { TeamsPage } from "../pages/teams/TeamsPage";
import { Scoreboard } from "../features/scoreboeard/components/ScoreboardList";

export const App = () => {
  return (
    <AppProviders>
      <Routes>
        <Route index element={<Navigate to="/scoreboard" />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/teams" element={<TeamsPage />} />
      </Routes>
    </AppProviders>
  );
};
