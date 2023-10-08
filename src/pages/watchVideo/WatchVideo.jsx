import React, { useEffect } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDescreption from '../../components/videoDecreption/VideoDescreption'
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchPlayVideo } from '../../features/singleVideoFetch/PlayVideoSlice';
import { useLoaderData } from 'react-router-dom';
import { fetchRelatedVideo } from '../../features/ReltedVideos/relatedVideoApi';

const WatchVideo = () => {

    const dispatch = useDispatch()
    const videoID = useLoaderData()
    
    const {video} = useSelector((state)=> state.PlayVideo )
    const {Tagvideo} = useSelector((state) => state.RelatedVideo)
    console.log(Tagvideo)
    const {id, tags, link} = video
    

    useEffect(()=>{
        dispatch(fetchPlayVideo(videoID))
    }, [dispatch, videoID])
    
    useEffect(()=>{
        dispatch(fetchRelatedVideo({tags, id}))
    },[dispatch, tags, id])

    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        {/* <!-- video player --> */}
                        <VideoPlayer video={link}/>

                        {/* <!-- video description --> */}
                        <VideoDescreption video={video}/>
                    </div>

                    {/* <!-- related videos --> */}
                    <div
                        className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
                    >
                        {/* <!-- single related video --> */}

                    {
                        Tagvideo.map(VIDEO => (
                            <RelatedVideos key={video.id} videos={VIDEO}/>
                        ))
                    }
                           
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WatchVideo;