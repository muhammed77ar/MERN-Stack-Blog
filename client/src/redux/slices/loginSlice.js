import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../InitialState";


export const loginSlice = createSlice({
  name:'login',
  initialState:InitialState,
  reducers:{
    login:(state,{payload})=>{
    return {...state,authenticated:{accessToken:true,user:payload}}
    },
    logout:(state)=>{
      localStorage.removeItem('ACCESS_TOKEN');
      localStorage.removeItem('USER');
    return {...state,authenticated:{accessToken:false,user:{}}}
    },
  }
})
export const {login,logout} = loginSlice.actions;
export const loginSeletore = (({login}) => login.authenticated);
export default loginSlice.reducer;