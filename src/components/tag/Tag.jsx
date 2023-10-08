import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../features/selectTag/filterSlice';

const Tag = ({title}) => {

    const dispatch = useDispatch()

    const {Alltags} = useSelector(state => state.Filter)
    
    const isSelected =  Alltags.includes(title) ? true : false
    
    const selectTag = () => {
        
      
        if(isSelected){
            dispatch(action.tagRemove(title))
        }else{
            dispatch(action.selectedTag(title))
        }

    }

        
    let Style = isSelected ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" :"bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer" 
    return (
        <div>
            <div  className={Style}  onClick={() => selectTag()} >
                {title}
            </div>
        </div>
    );
};

export default Tag;