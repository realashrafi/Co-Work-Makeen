import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const GetURl = 'https://www.cowork.v1r.ir/api/v1/user/me';
const initialState = {
    me: [],
    status: 'idle',
    error: null
}
export const getMe = createAsyncThunk('me/getMe',
    async () => {
        try {
            const res = await axios.get(GetURl, {
                headers: {
                    Authorization: `Bearer ${'token'}`,
                    Accept: 'application/json',
                }
            })
            return [...res.data]
        } catch (err: any) {
            err.message
        }
    })
const meSlice = createSlice({
    name: 'me',
    initialState,
    reducers: {}
})