import React from 'react'
import './cartSidebar.scss'
import { GrClose } from 'react-icons/gr'
function CartSidebar(props) {
    const {open, close} = props
    return (
        <>
            <div className={open ?"cart__sidebar active__sidebar__cart": "cart__sidebar"}>
                <div className="content__cart">
                    <div className="content__all__cart">
                        <div className="head">
                            <h2>Your Cart</h2>
                            <button onClick={close} >
                                <GrClose className='icon close__btn__icon' />
                            </button>
                        </div>
                        <div className="product__list">
                            <p>No products in the cart</p>
                        </div>
                    </div>
                </div>
            </div>
            <div  className={open ?" overlay__cart": "activeOverlayCart"} onClick={close}></div>
        </>
    )
}

export default CartSidebar