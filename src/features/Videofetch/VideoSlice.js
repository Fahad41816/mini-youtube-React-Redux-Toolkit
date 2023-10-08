import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import getVideo from "./getVideo";

// initialState state 
const initialState = {
    video:[],
    isError:false,
    Error: "",
    isLoading:false
}

// create thunk 
export const fetchVideo = createAsyncThunk("fetch/videos", async({Alltags, search})=>{

    const videos = await getVideo(Alltags, search);    
    return videos

})


// video Reducer 
const videoReducer = createSlice({
    name:"videos",
    initialState,
    extraReducers: (builder) =>{
            builder
                .addCase(fetchVideo.pending, (state)=>{

                    state.isLoading = true,
                    state.Error = "",
                    state.video = [],
                    state.isError = false

                })
                .addCase(fetchVideo.fulfilled, (state, action)=>{

                    state.isLoading = false,
                    state.Error = "",
                    state.video = action.payload,
                    state.isError = false

                })
                .addCase(fetchVideo.rejected, (state, action)=>{

                    state.isLoading = false,
                    state.Error = action.error.message,
                    state.video = [],
                    state.isError = true

                });
    }
})


export default videoReducer.reducer;