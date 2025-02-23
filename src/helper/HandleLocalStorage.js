

const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const setFromLocaleStorege = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

// get the name of the Responsable
const getNameOfResponsable=(id,users)=>{
    const responsable=users.find(user=>user.id===id);
    return responsable?responsable.name:"";
}
// get the name of the employer
const getNameOfEmployer=(id,employers)=>{
    const employer=employers.find((employer)=>employer.id===id);
    return employer ?employer.name:""
}
// Check for Congie
const isInCongi=(id,selectedDate,congis)=>{
    const employerCongi=congis.find((congi)=>congi.employerId==id);
    // check if there congi
    if(!employerCongi)return false;
    const TimerOfSelectedDate=new Date(selectedDate).getTime();
    const TimerOfStartDate=new Date(selectedDate).getTime(employerCongi.startDate);
    const TimerOfEndedDate=new Date(selectedDate).getTime(employerCongi.endDate);

    return TimerOfSelectedDate>=TimerOfStartDate && TimerOfSelectedDate<=TimerOfEndedDate;
    
}
// check if is the responsable
const isResponsable=(id,user)=>{
    return id===user.id;
}

export { getFromLocalStorage, setFromLocaleStorege,getNameOfResponsable,getNameOfEmployer,isInCongi,isResponsable };