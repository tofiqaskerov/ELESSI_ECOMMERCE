import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './headerSidebar.scss'
import { MdArrowRight } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar } from '../../Redux/Slices/HeaderSlice'
function HeaderSidebar( {navMenuItem} ) {
    const header = useSelector(state => state.header)
    const dispatch  = useDispatch()
    const handleCloseSidebar = () => dispatch(closeSidebar())
    return (
        <>
            <div className={header.sidebarOpen ? "active__sidebar__navbar sidebar":"sidebar"}>
                <div className="content">
                    <div className="content__all">
                        <div className="tab">
                            <h3 className='active'>Menu</h3>
                            <h3>Categories</h3>
                        </div>
                        <div className="list__mobile">
                            <ul className='main__ul'>
                                {
                                    navMenuItem && navMenuItem.map((item, index) => (
                                        <li className='main__li' key={index}><Link>{item.catItem} </Link> <MdArrowRight className='icon right__arrow__icon' /> </li>
                                    ))
                                }
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div  className={header.sidebarOpen?" overlay": "activeOverlay"} onClick={handleCloseSidebar}></div>
        </>

    )
}

export default HeaderSidebar