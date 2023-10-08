import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"; 
import getTags from "./getTags";

// initialState state 
const initialState = {
    tags:[],
    isError:false,
    Error: "",
    isLoading:false
}

// create thunk 
export const fetchTags = createAsyncThunk("fetch/tags", async()=>{

    const tags = await getTags();    
    return tags

})


// video Reducer 
const tagReducer = createSlice({
    name:"tags",
    initialState,
    extraReducers: (builder) =>{
            builder
                .addCase(fetchTags.pending, (state)=>{

                    state.isLoading = true,
                    state.Error = "",
                    state.tags = [],
                    state.isError = false

                })
                .addCase(fetchTags.fulfilled, (state, action)=>{

                    state.isLoading = false,
                    state.Error = "",
                    state.tags = action.payload,
                    state.isError = false

                })
                .addCase(fetchTags.rejected, (state, action)=>{

                    state.isLoading = false,
                    state.Error = action.error.message,
                    state.tags = [],
                    state.isError = true

                });
    }
})


export default tagReducer.reducer;