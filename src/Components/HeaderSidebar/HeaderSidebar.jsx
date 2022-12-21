import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './headerSidebar.scss'
import { MdArrowRight } from "react-icons/md"
function HeaderSidebar( props ) {
    const {navMenuItem, open, close} = props
 
    return (
        <>
            <div className={open ? "active__sidebar__navbar sidebar":"sidebar"}>
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
            <div  className={open ?" overlay": "activeOverlay"} onClick={close}></div>
        </>

    )
}

export default HeaderSidebar