import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
 
import getRelatedVideo from "./getRelatedVideo";

// initialState state 
const initialState = {
    Tagvideo:[],
    isError:false,
    Error: "",
    isLoading:false
}

// create thunk 
export const fetchRelatedVideo = createAsyncThunk("fetch/RelatedVideos", async({tags, id})=>{
   
    const videos = await getRelatedVideo(tags, id);    
    return videos

})


// video Reducer 
const RelatedVideoReducer = createSlice({
    name:"RelatedVideo",
    initialState,
    extraReducers: (builder) =>{
            builder
                .addCase(fetchRelatedVideo.pending, (state)=>{

                    state.isLoading = true,
                    state.Error = "",
                    state.Tagvideo = [],
                    state.isError = false

                })
                .addCase(fetchRelatedVideo.fulfilled, (state, action)=>{
                   
                    state.isLoading = false,
                    state.Error = "",
                    state.Tagvideo = action.payload,
                    state.isError = false

                })
                .addCase(fetchRelatedVideo.rejected, (state, action)=>{

                    state.isLoading = false,
                    state.Error = action.error.message,
                    state.Tagvideo = [],
                    state.isError = true

                });
    }
})


export default RelatedVideoReducer.reducer;