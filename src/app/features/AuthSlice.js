import { createSlice } from "@reduxjs/toolkit";
import users from "../../data/users/users";
import { setFromLocaleStorege,getFromLocalStorage } from "../../helper/HandleLocalStorage";

const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        user:getFromLocalStorage("user")||null,
        isAuth:getFromLocalStorage("user")?true:false,
        loading:false,
        error:false,
    },
    reducers:{
        login:(state,action)=>{
            state.loading=true;
            const {email,password}=action.payload;
            const user=users.find(user=>user.email===email&&user.password===password);
            if(user){
                
                state.user=user;
                state.isAuth=true;
                setFromLocaleStorege("user",user)
                state.loading=false;
            }
            else{
                state.error=true;
                state.loading=false;
            }
        },
        logout:(state)=>{
            state.user=null;
            state.isAuth=false;
            setFromLocaleStorege("user","")
        },
    }
});
export default AuthSlice.reducer;
export const {login,logout}=AuthSlice.actions;
