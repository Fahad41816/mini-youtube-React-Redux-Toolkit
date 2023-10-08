import { configureStore } from '@reduxjs/toolkit';
 
import videoReducer from './features/Videofetch/VideoSlice';
import PlayVideoReducer from './features/singleVideoFetch/PlayVideoSlice';
import TagReducer from './features/tags/fetchTagSlice'
import RelatedVideos from './features/ReltedVideos/relatedVideoApi';
import FilterReducer from './features/selectTag/filterSlice'


const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: TagReducer,
    PlayVideo : PlayVideoReducer,
    RelatedVideo: RelatedVideos,
    Filter: FilterReducer
  },
});


export default store;

