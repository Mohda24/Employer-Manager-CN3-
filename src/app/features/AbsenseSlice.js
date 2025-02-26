import { createSlice } from "@reduxjs/toolkit";
import absences from "../../data/absense/absence";
import {getFromLocalStorage,setFromLocaleStorege} from "../../helper/HandleLocalStorage"

// function for get Employers
const getEmployers=(absences,selectedDate)=>{
    const employers=absences.filter((absence)=>absence.date===selectedDate);
    console.log("mohda",employers);
    
    return employers.length>0 ? employers[0]?.employers : [];
};
// function get current date
const currentDate=new Date().toISOString().split('T')[0];

const AbsenseSlice = createSlice({
    name:"absence",
    initialState:{
        absences:getFromLocalStorage("absences")||absences,
        filteredAbsences:{
            date:currentDate,
            employers:getEmployers(absences,currentDate)
        },
        selectedDate:new Date().toISOString().split('T')[0],
        modifyAbsense:null,
        Historique:getFromLocalStorage("Historique")||[]
    } ,
    reducers:{
        addAbsence:(state,action)=>{
            state.absences.push(action.payload)
            setFromLocaleStorege("absences",state.absences)
        },
        removeAbsence:(state,action)=>{
            const absenceClone=state.absences.filter((absence)=>absence.date!==action.payload)
            setFromLocaleStorege("absences",absenceClone)
            return absenceClone
        },
        filterAbsence:(state,action)=>{
            state.selectedDate=action.payload
            state.filteredAbsences={
                date:action.payload,
                employers:getEmployers(state.absences,action.payload)
            }
        },
        modifyAbsense:(state,action)=>{
            const absense=state.absences.filter((absense)=>absense.id===action.payload);
            state.modifyAbsense=absense
        },
        setHistorique:(state,action)=>{
            state.Historique.push(action.payload)
            setFromLocaleStorege("Historique",state.Historique)
        }
    }
});
export default AbsenseSlice.reducer;
export const {addAbsence,removeAbsence,filterAbsence,setHistorique}=AbsenseSlice.actions