import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
function Header() {
    return (
        <header id='header'>
            <div className="upper__header">
                <div className="overlay"></div>
                <Container className='container' maxWidth="xxl">
                    <div className="contact">
                        <ul className='main_ul' >
                            <li className='main_li'><Link to="/"><i class="ri-facebook-fill"></i></Link></li>
                            <li className='main_li'><Link to="/"><i class="ri-twitter-fill"></i></Link></li>
                            <li className='main_li'><Link to="/"><i class="ri-google-fill"></i></Link></li>
                            <li className='main_li'><Link to="/"><i class="ri-pinterest-fill"></i></Link></li>
                            <li className='main_li'><Link to="/"><i class="ri-instagram-line"></i></Link></li>
                            <li className='main_li'><Link to="/"><span>Call:  +01 23456789 </span></Link></li>
                        </ul>
                    </div>
                    <div className="content">
                        <span >USD <i class="ri-arrow-down-s-line"></i>
                            <ul className='select'>
                                <li className='li'>EUR</li>
                                <li className='active-cl li'>USD</li>
                                <li className='li'>GBP</li>
                            </ul>
                        </span>
                    </div>

                </Container>
            </div>
            <div className="main__header"></div>
        </header>
    )
}

export default Header