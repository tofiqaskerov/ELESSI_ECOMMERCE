import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './common_detail_section.scss'
function CommonDetailSection({prop}) {
  return (
    <div className='common__section'>
        <Container maxWidth="xxl">
           <div className="all d-flex">
                <div className="breadcrumb d-flex">
                    <Link to="">Home /</Link>
                    <Link to="">Bike /</Link>
                    <Link to="">Mukluk Carbon </Link>
                </div>
                <div className="back__next__icon"></div>
            </div> 
        </Container>
    </div>
  )
}

export default CommonDetailSection