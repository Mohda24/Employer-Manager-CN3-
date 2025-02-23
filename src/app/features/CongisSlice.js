import { createSlice } from "@reduxjs/toolkit";
import Congis from "../../data/congis/congis";
import { getFromLocalStorage, setFromLocaleStorege } from "../../helper/HandleLocalStorage"

const CongisSlice = createSlice({
    name: "congis",
    initialState: getFromLocalStorage("congis") || Congis,
    reducers: {
        addCongis: (state, action) => {
            state.push(action.payload)
            setFromLocaleStorege("congis", state)
        },
        removeCongis: (state, action) => {

            const cloneState = state.filter((congis) => congis.date !== action.payload)
            setFromLocaleStorege("congis", cloneState)
            return cloneState
        }
    }
});
export default CongisSlice.reducer;