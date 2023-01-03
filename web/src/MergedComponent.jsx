import React from 'react'
import { NavLink, Outlet } from "react-router-dom";


const MergedComponent = () => {
    return (
        <>
            
            <NavLink to='/Books/1'>Child Book 1</NavLink><br />
            <NavLink to='/Books/2'>Child Book 2</NavLink><br />
            <NavLink to='/Books/new'>New Book</NavLink>
            <Outlet/>
        </>
    )
}

export default MergedComponent