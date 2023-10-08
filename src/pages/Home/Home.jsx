import React, { useEffect } from 'react';
import Videos  from '../../components/videos/Videos'
import Tag from '../../components/tag/Tags'
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideo } from '../../features/Videofetch/VideoSlice';
 

const Home = () => {

    const dispatch = useDispatch()

    const {Alltags, search} = useSelector((state)=> state.Filter)
 

    useEffect(() => {
        dispatch(fetchVideo({Alltags, search}))          
    }, [dispatch, Alltags,search]);
    
    return (
        <div>            
            <Tag/>
            <Videos/>
        </div>
    );
};

export default Home;