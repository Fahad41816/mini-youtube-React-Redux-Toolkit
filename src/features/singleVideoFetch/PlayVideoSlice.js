import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import getPlayVideo from "./getPlayVideo";

// initialState state 
const initialState = {
    video:{},
    isError:false,
    Error: "",
    isLoading:false
}

// create thunk 
export const fetchPlayVideo = createAsyncThunk("fetch/PlayVideos", async(id)=>{

    const videos = await getPlayVideo(id);    
    return videos

})


// video Reducer 
const PlayVideoReducer = createSlice({
    name:"PlayVideo",
    initialState,
    extraReducers: (builder) =>{
            builder
                .addCase(fetchPlayVideo.pending, (state)=>{

                    state.isLoading = true,
                    state.Error = "",
                    state.video = {},
                    state.isError = false

                })
                .addCase(fetchPlayVideo.fulfilled, (state, action)=>{

                    state.isLoading = false,
                    state.Error = "",
                    state.video = action.payload,
                    state.isError = false

                })
                .addCase(fetchPlayVideo.rejected, (state, action)=>{

                    state.isLoading = false,
                    state.Error = action.error.message,
                    state.video = {},
                    state.isError = true

                });
    }
})


export default PlayVideoReducer.reducer;