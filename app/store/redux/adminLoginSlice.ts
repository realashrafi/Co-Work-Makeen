import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://www.cowork.v1r.ir/api/v1/auth/admin/login'
export const adminLogin: any = createAsyncThunk('type/loginAdmin',
    async (initialData) => {
        try {
            const response = await axios.post(URL, initialData);
            return response.data
        } catch (err) {
            console.log(err)
        }
    })
 const adminReducer = createSlice({
    name: 'adminLogin',
    initialState: {
        status: 'idle',
        error:null,
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(adminLogin.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(adminLogin.rejected,(state, action)=>{
                state.status='failed';
                state.error=action.error.message
            })
    }
})

export const responseData= (state: { data: any; })=>state.data
export default adminReducer.reducer

