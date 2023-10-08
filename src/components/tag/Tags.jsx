import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../features/tags/fetchTagSlice';
import { action } from '../../features/selectTag/filterSlice';
import Tag from './Tag';

const Tags = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchTags())
    },[dispatch])

    const {tags} = useSelector(state => state.tags)
  



    return (        
        <section>
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >
              {
                    tags.map(tag =>(
                        <Tag key={tag.key} title={tag.title}/>
                    ))
              }

              
                {/* <!-- selected --> */}
                {/* <div
                    className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
                >
                    redux
                </div> */}
            </div>
        </section>
       
    );
};

export default Tags;