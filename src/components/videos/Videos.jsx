import React from 'react';
import Video from './video';
import { useSelector } from 'react-redux';


const Videos = () => {

    const {video} = useSelector((state) =>  state.videos)
    const {Alltags} = useSelector((state) =>  state.Filter)

    return (
         
        <section className="pt-12">
            <div
                className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
            >
                {/* <!-- single video --> */}
                {
                    video.map( data => (
                        <Video key={video.id} videoData={data}/>
                    ))
                }

                {/* <!-- error section */}
                {/* <div className="col-span-12">some error happened</div> --> */}
            </div>
        </section>
    
    );
};

export default Videos;