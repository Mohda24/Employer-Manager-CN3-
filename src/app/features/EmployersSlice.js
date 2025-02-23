import { createSlice } from "@reduxjs/toolkit";
import employers from "../../data/employers/employers";
import { getFromLocalStorage,setFromLocaleStorege } from "../../helper/HandleLocalStorage";

const EmployersSlice = createSlice({
    name: "employers",
    initialState:getFromLocalStorage("employers")||employers,
    reducers: {
        addEmployer: (state, action) => {
            state.push(action.payload);
            setFromLocaleStorege("employers",state);
        },
        removeEmployer: (state, action) => {
            const id = action.payload;
            const stateCopy = state.filter((employer) => employer.id !== id);
            setFromLocaleStorege("employers",stateCopy);
            return stateCopy;
        },
    },
});
export const { addEmployer, removeEmployer } = EmployersSlice.actions;
export default EmployersSlice.reducer;