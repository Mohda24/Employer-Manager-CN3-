import { createSlice } from "@reduxjs/toolkit";
import positions from "../../data/positions/positions";

const PositionsSlice = createSlice({
    name: "positions",
    initialState: positions,
});
export default PositionsSlice.reducer;