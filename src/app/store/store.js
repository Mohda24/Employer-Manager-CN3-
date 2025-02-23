import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/AuthSlice";
import EmployersSlice from "../features/EmployersSlice";
import PositionsSlice from "../features/PositionsSlice";
import AbsenseSlice from "../features/AbsenseSlice";
import CongiseSlice from "../features/CongisSlice";

const store=configureStore({
    reducer:{
        auth:AuthSlice,
        employers:EmployersSlice,
        positions:PositionsSlice,
        absences:AbsenseSlice,
        congis:CongiseSlice
    },
});
export default store;