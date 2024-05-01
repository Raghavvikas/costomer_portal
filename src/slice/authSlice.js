import authService from "../services/auth.service"
import { setMessage } from "./message"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = localStorage.getItem("user")


const register = createAsyncThunk("users/register",

    async({username,password,role,availabilityStatus}, thunkAPI)=>{
        try{
            const response = await authService.register(username,password,role,availabilityStatus);
            thunkAPI.dispatch(setMessage(response?.data?.message))
            return response?.data || response.json();
        } catch(error){
            console.log(error?.response?.data)
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }

);


export const login = createAsyncThunk("LOGIN",
    async(loginData,thunkAPI)=>{
        try{
            const response = await authService.login({username:loginData.username,password:loginData.password});
            // thunkAPI.dispatch(setMessage(response?.data?.message))
            console.log(response?.data,"testttslice") ;
            return response?.data;
        } catch(error){
            console.log(error?.response?.data)
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
)


export const logout = createAsyncThunk("auth/logout",
async () => {
    await authService.logout();
})

const initialState = user ? {user,isAuthenticated : true} : 
{user:null,isAuthenticated:false};





const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        [register.fulfilled]: (state,action) =>{
            state.isAuthenticated=true;
        },
        [register.rejected]: (state,action) =>{
            state.isAuthenticated=false;
        },
        [login.fulfilled]:(state,action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        [login.rejected]:(state,action) => {
            state.user=null
            state.isAuthenticated=false;
        },
        [logout.fulfilled]:(state)=>{
            state.user =null;
            state.isAuthenticated = false;
        },
    },
});

const {reducer} = authSlice;
export default reducer;