import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name:"page",
    initialState:{
        page: "CreateProject",
    },
    reducers:{
        setPage:(state,action)=>{
            state.page = action.payload;
        }
    }

})

export const {setPage} = pageSlice.actions
export default pageSlice.reducer