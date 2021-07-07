import { createSlice } from "@reduxjs/toolkit";

interface CatFromAPI {
    id:string,
    url:string,
    width:number,
    height:number
}

interface InitialState{
    cat: CatFromAPI[],
    loading:string
}
const initState:InitialState={
    cat: [],
    loading:""
}

const catSlice = createSlice({
    name:"cat",
    initialState:initState,
    reducers:{
        SET_CAT:(state,action)=>{  
            state.cat.push(action.payload)
        },
        SET_LOADING:(state)=>{
                    state.loading="Loading..."
        },
        SET_LOADED:(state)=>{
            state.loading=""
        },
        SUBSCRIBE_CAT:()=>{}
    }
})

export const {SET_CAT,SET_LOADED,SET_LOADING,SUBSCRIBE_CAT} = catSlice.actions

export default catSlice.reducer