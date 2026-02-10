import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface League {
  name: string;
  sport: string;
  code: string;
}

interface LeagueState {
  selected: League;
}

const initialState: LeagueState = {
  selected: { name: "NBA", sport: "basketball", code: "nba" },
};

const leagueSlice = createSlice({
  name: "league",
  initialState,
  reducers: {
    setLeague: (state, action: PayloadAction<League>) => {
      state.selected = action.payload;
    },
  },
});

export const { setLeague } = leagueSlice.actions;
export default leagueSlice.reducer;
