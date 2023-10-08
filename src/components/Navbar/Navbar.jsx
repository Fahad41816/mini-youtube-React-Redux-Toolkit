import React from 'react';
import { useDispatch } from 'react-redux';
import { action } from '../../features/selectTag/filterSlice';
import { Link, useMatch, useNavigate } from 'react-router-dom';
 

const Navbar = () => {
    const dispatch = useDispatch()


    const match = useMatch('/')
    const navigate = useNavigate()
    console.log(match)

    const searchTag = (event) => {

        event.preventDefault()
        const search = event.target.search.value
        dispatch(action.searched(search))

        if(!match){
            navigate('/')
        }

    }

    return (
        <nav className="bg-slate-100 shadow-md">
        <div
            className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
        >
            <Link href="/">
                <img
                    className="h-10"
                    src='/logo512.png'
                    alt="Redux Toolkit"
                />
                
            </Link>
            <div
                className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
            >
                {/* <!-- search --> */}
                <form onSubmit={searchTag}>
                    <input
                        className="outline-none border-none mr-2"
                        type="search"
                        name="search"
                        placeholder="Search"
                    />
                </form>
                <img
                    className="inline h-4 cursor-pointer"
                    src="/search.svg"
                    alt="Search"
                />
            </div>
        </div>
    </nav>
    );
};

export default Navbar;