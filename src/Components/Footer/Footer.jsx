import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Img/bike-logo-retina_500x.webp'
import './footer.scss'

const Footer = () => {
  return (
    <footer id="footer">
      <Container maxWidth="lg">
        <div className="footer__up">
          <Grid container   >

            <Grid alignItems={"center"} container sm={12} md={12} lg={12} >
              <Grid className='box' item sm={12} md={12} lg={4}>
                <Link to="/"><img src={Logo} alt="logo" /></Link>
              </Grid>
              <Grid className='box'  sm={12} md={12} lg={4}>
                <div className="icons" >

                  <i class="ri-facebook-fill"></i>
                  <i class="ri-twitter-fill"></i>
                  <i class="ri-google-fill"></i>
                  <i class="ri-pinterest-fill"></i>
                  <i class="ri-instagram-line"></i>
                </div>
              </Grid>
              <Grid className='box' sm={12} md={12} lg={4}>
                <div className="subscribe__content">
                  <h1>Newsletter</h1>
                  <input type="text" className='subscribe__input'  placeholder='Your email address'/>
                  <div className="input__btn">
                    <input type="submit" value="Subscribe" className='subscribe__btn' />
                  </div>
                </div>
              </Grid>

            </Grid>
            <Grid sm={12} md={4} lg={4} >

              <h1>Lorem</h1>

            </Grid>
            <Grid sm={12} md={4} lg={4} >
              <h1>Lorem</h1>


            </Grid>
            <Grid sm={12} md={4} lg={4} >
              <h1>Lorem</h1>


            </Grid>

          </Grid>
        </div>
      </Container>
    </footer>
  )
}

export default Footer