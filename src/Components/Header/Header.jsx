import { Box, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import Logo from '../../Assets/Img/bike-logo-retina_500x.webp'
import { CiSearch, CiHeart, CiUser } from 'react-icons/ci'
import { SlBasket } from 'react-icons/sl'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
function Header() {
    const navbar = [
        {

            catItem: "Demo",
            path: "/",
            badge: null
        },
        {
            catItem: "Shop",
            path: "/",
            badge: "Sale!"

        },
        {
            catItem: "Blog",
            path: "/",
        },
        {
            catItem: "Pages",
            path: "/",
            badge: "Sale!"

        },
    ]
    return (
        <header id='header'>

            {/* Upper - header */}
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
            {/* main - header */}
            <div className="main__header">
                <Container maxWidth="xxl" className='container' >
                    <Stack direction={{ sm: "row" }} alignItems="center" justifyContent="space-between" >
                        <div className="burger__icon__side">
                            <Stack direction={"row"} spacing={1}>
                                <div className="burger__icon">
                                    <i class="ri-menu-2-line"></i>
                                </div>
                                <div className="search__icon">
                                    <CiSearch />
                                </div>
                            </Stack>

                        </div>
                        <div className="logo__side">
                            <Link to="/"><img src={Logo} alt="Logo_Image" /></Link>
                        </div>
                        <div className="navbar">
                            <ul className='main__ul'>
                                <Stack direction={"row"} spacing={4}>
                                    {
                                        navbar && navbar.map((item, index) => (
                                            <li className="main__li" key={index}>
                                                <Link to={item.path}>
                                                    {item.catItem}
                                                    <MdKeyboardArrowDown className='downArrow__icon' />
                                                    {item.badge != null && (
                                                        <div className={`badge__shop`}>
                                                            {item.badge}
                                                        </div>
                                                    )}
                                                </Link>
                                                {item.catItem === navbar[0].catItem && (
                                                    <div className="big__menu__home">
                                                        <Stack direction={"row"}>
                                                            <Grid className='all' style={{ lineHeight: "normal" }} container justifyContent={"space-between"} >

                                                                <Grid xs={4} >
                                                                    <div className="cart__item">
                                                                        <ul className="child__ul">
                                                                            <li className="child__li"><h3>Homepages</h3></li>
                                                                            <li className="child__li"><Link to="/"><span>Home1</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Home2</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Home3</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Home4</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Home5</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Home6</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Home7</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Home8</span></Link></li>
                                                                        </ul>
                                                                    </div>
                                                                </Grid>
                                                                <Grid xs={4}>
                                                                    <div className="cart__item">
                                                                        <ul className="child__ul">
                                                                            <li className="child__li"><h3>Niche Layouts</h3></li>
                                                                            <li className="child__li">
                                                                                <Link to="/">
                                                                                    <span>T-Shirt
                                                                                        <span className="new">
                                                                                            <span className="txt__new">
                                                                                                new
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className="child__li">
                                                                                <Link to="/">
                                                                                    <span>Cosmetic
                                                                                        <span className="new">
                                                                                            <span className="txt__new">
                                                                                                new
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className="child__li">
                                                                                <Link to="/">
                                                                                    <span>Jewelry
                                                                                        <span className="new">
                                                                                            <span className="txt__new">
                                                                                                new
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className="child__li">
                                                                                <Link to="/">
                                                                                    <span>Furniture
                                                                                        <span className="new">
                                                                                            <span className="txt__new">
                                                                                                new
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className="child__li">
                                                                                <Link to="/">
                                                                                    <span>Organic
                                                                                        <span className="new">
                                                                                            <span className="txt__new">
                                                                                                new
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className="child__li"><Link to="/"><span>Electronics</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Baby</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Bike</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Bag</span></Link></li>
                                                                        </ul>
                                                                    </div>

                                                                </Grid>
                                                                <Grid xs={4}>
                                                                    <div className="cart__item">
                                                                        <ul className="child__ul">
                                                                            <li className="child__li"><h3>Niche Layouts</h3></li>
                                                                            <li className="child__li"><Link to="/"><span>Home Boxed</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Home FullWidth</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Home Wide 1600px</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>RTL ready</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>Catalog Mode</span></Link></li>
                                                                            <li className="child__li"><Link to="/"><span>GDPR Cookie</span></Link></li>

                                                                        </ul>
                                                                    </div>

                                                                </Grid>
                                                            </Grid>
                                                        </Stack>
                                                    </div>
                                                )}
                                                {item.catItem === navbar[1].catItem && (
                                                    <div className="big__menu__shop">
                                                        <Container maxWidth="lg" >
                                                            <Grid  container >
                                                                <Grid  className='left__side' xs={9} container >
                                                                    <Grid xs={12} container>
                                                                        <Grid xs={3}>
                                                                            <div className="cart__item">
                                                                                <ul className="child__ul">
                                                                                    <li className="child__li"><h3>Shop Styles</h3></li>
                                                                                    <li className="child__li"><Link to="/"><span>Grid Layout</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Masonry</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Right Sidebar</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Left Sidebar</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Listing Collection</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Infine Scrolling </span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Load more button </span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Filters area</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Header Transparent</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>RTL shop page</span></Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid xs={3}>
                                                                            <div className="cart__item">
                                                                                <ul className="child__ul">
                                                                                    <li className="child__li"><h3>Product Page Styles</h3></li>
                                                                                    <li className="child__li"><Link to="/"><span> Product Detail Layout 1</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Product Detail Layout 2</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Product Detail Layout 3</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Product thumb at bottom</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Product thumb on right</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Lookbook Desciption</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Gallery Descriptions </span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Product Videos</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Product Countdown</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Tabs Full Width</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Tabs Accardions Full Width</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Sticky Description</span></Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid xs={3}>
                                                                            <div className="cart__item">
                                                                                <ul className="child__ul">
                                                                                    <li className="child__li"><h3>Product Page Styles</h3></li>
                                                                                    <li className="child__li"><Link to="/"><span>Product Detail Layout 1</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Product Detail Layout 2</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Product Detail Layout 3</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Product thumb at bottom</span></Link></li>
                                                                                    <li className="child__li">
                                                                                        <Link to="/">
                                                                                            <span>
                                                                                                Download
                                                                                                <span className="new">
                                                                                                    <span className="txt__new">
                                                                                                        new
                                                                                                    </span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="child__li"><Link to="/"><span>Lookbook Desciption</span></Link></li>
                                                                                    <li className="child__li">
                                                                                        <Link to="/">
                                                                                            <span>
                                                                                                Product--Pre-orders
                                                                                                <span className="hot">
                                                                                                    <span className="txt__hot">
                                                                                                        hot
                                                                                                    </span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="child__li"><Link to="/"><span>Product Videos</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Product Countdown</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Tabs Full Width</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Tabs Accardions Full Width</span></Link></li>
                                                                                    <li className="child__li">
                                                                                        <Link to="/">
                                                                                            <span>
                                                                                                Sticky Description
                                                                                                <span className="hot">
                                                                                                    <span className="txt__hot">
                                                                                                        hot
                                                                                                    </span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="child__li">
                                                                                        <Link to="/">
                                                                                            <span>
                                                                                                Sticky Description
                                                                                                <span className="hot">
                                                                                                    <span className="txt__hot">
                                                                                                        hot
                                                                                                    </span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="child__li"><Link to="/"><span>Sticky Description</span></Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </Grid>
                                                                        <Grid xs={3}>
                                                                            <div className="cart__item">
                                                                                <ul className="child__ul">
                                                                                    <li className="child__li"><h3>Product Features</h3></li>
                                                                                    <li className="child__li"><Link to="/"><span>Swatch with circle</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Swatch with circle radio</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Swatch with circle radio 2</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Swatch with circle radio 3</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Swatch with circle radio 4</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Swatch with rectangle</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Swatch with rectangle 2</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Swatch with simple</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Swatch with simple 2</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>With Images Swatch</span></Link></li>
                                                                                    <li className="child__li"><Link to="/"><span>Sticky Add to cart</span></Link></li>
                                                                                    <li className="child__li">
                                                                                        <Link to="/">
                                                                                            <span>
                                                                                                Sticky Description

                                                                                            </span>
                                                                                        </Link>
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid xs={12} container>
                                                                        <Grid xs={3}>Hi</Grid>
                                                                        <Grid xs={3}>Hi</Grid>
                                                                        <Grid xs={3}>Hi</Grid>
                                                                    </Grid>
                                                                </Grid>
                                                                <Grid spacing={2} className="right__side" xs={3}>
                                                                    <Swiper
                                                                        spaceBetween={50}
                                                                        slidesPerView={3}
                                                                        onSlideChange={() => console.log('slide change')}
                                                                        onSwiper={(swiper) => console.log(swiper)}
                                                                    >
                                                                        <SwiperSlide style={{border:"1px solid red"}}>
                                                                          
                                                                                <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/products/Sample_Product_Image8-21_360x.jpg?v=1597635513" alt="" />

                                                                         

                                                                        </SwiperSlide>

                                                                        ...
                                                                    </Swiper>
                                                                </Grid>

                                                            </Grid>



                                                        </Container>
                                                    </div>
                                                )}
                                            </li>
                                        ))
                                    }
                                    <li className="main__li">
                                        <Link to="/">
                                            Buy Theme!
                                            <div className={`badge__buyTheme`}>
                                                Sale!
                                            </div>

                                        </Link>
                                    </li>
                                </Stack>

                            </ul>
                        </div>
                        <div className="cart__side">
                            <ul className='items'>
                                <Stack direction="row" >
                                    <li className='item'><CiSearch className='search__icon icon' /></li>
                                    <li className='item'><CiUser className='user__icon icon' /></li>
                                    <li className='item'><CiHeart className='favourite__icon icon' />
                                        <span className='badge'>0</span>
                                    </li>
                                    <li className='item'><SlBasket className='checkout__icon icon' />
                                        <span className='badge'>0</span>

                                    </li>
                                </Stack>

                            </ul>
                        </div>
                    </Stack>


                </Container>
            </div>
        </header>
    )
}

export default Header