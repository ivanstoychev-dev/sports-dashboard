import type { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLeague } from "./leagueSlice";
import type { League } from "./leagueSlice";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";
import type { AppDispatch, RootState } from "../../store/store";

const LEAGUES: League[] = [
  { name: "NBA", sport: "basketball", code: "nba" },
  { name: "NFL", sport: "football", code: "nfl" },
];

export const LeagueSelector: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedLeague = useSelector(
    (state: RootState) => state.league.selected,
  );

  const handleChange = (event: SelectChangeEvent<string>) => {
    const league = LEAGUES.find((l) => l.code === event.target.value);
    if (league) dispatch(setLeague(league));
  };

  return (
    <FormControl variant="outlined" sx={{ minWidth: 120, maxWidth: 300 }}>
      <InputLabel id="league-label">League</InputLabel>
      <Select
        labelId="league-label"
        value={selectedLeague.code}
        onChange={handleChange}
        label="League"
      >
        {LEAGUES.map((league) => (
          <MenuItem key={league.code} value={league.code}>
            {league.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
