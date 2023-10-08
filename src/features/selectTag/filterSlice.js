import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Alltags:[],
    search:""
}

// const select tag slice 
const filterSlice = createSlice({
    name:"tagSellect",
    initialState,
    reducers:{
        selectedTag: (state, action)=>{
            state.Alltags.push(action.payload)
        },
        tagRemove: (state, action) => {
           const indexToRemove =  state.Alltags.indexOf(action.payload);

           if(indexToRemove !== -1){
                state.Alltags.splice(indexToRemove, 1)
           }
        },
        searched: (state, action) => {
            state.search = action.payload
        }
    }
})

export default filterSlice.reducer;
export const action =  filterSlice.actions;

 
 