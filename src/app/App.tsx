import { Routes, Route, Navigate } from "react-router-dom";
import { AppProviders } from "./providers";
import { TeamsPage } from "../pages/teams/TeamsPage";
import ScoreBoardPage from "../pages/scoreboard/Scoreboard";

export const App = () => {
  return (
    <AppProviders>
      <Routes>
        <Route index element={<Navigate to="/scoreboard" />} />
        <Route path="/scoreboard" element={<ScoreBoardPage />} />
        <Route path="/teams" element={<TeamsPage />} />
      </Routes>
    </AppProviders>
  );
};
