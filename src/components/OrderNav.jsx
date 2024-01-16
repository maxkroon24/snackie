import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { IconContext } from "react-icons";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BiArrowBack} from 'react-icons/bi'
import {ImCross} from 'react-icons/im'

function OrderNav({adress, alldata}) {
    const navigate = useNavigate()
    const [openCart, setOpenCart] = useState(false)

    function goBackHome(e) {
        e.preventDefault()
        navigate(-1)
    }
    function openCartFunction(e) {
        if(openCart) {
            setOpenCart(false)
        }
        else {
            setOpenCart(true)
        }    
    }
  return (
    <>
    <div className="order-nav-wrapper">
        <div className="go-back-button-wrapper">
          <IconContext.Provider value={{ className: "go-back-nav-button", size: 35 }}>
             <BiArrowBack onClick={(e) => goBackHome(e)}/>
            </IconContext.Provider>
        </div>
        <div className="titles-delivery-wrapper">
            <h1 className="order-adress-title">{alldata.plaats}, {adress}</h1>
            </div>
            <div className="place-order-wrapper">
            <IconContext.Provider value={{ className: "order-nav-buttons" }}>
                <>
                <AiOutlineShoppingCart onClick={e => openCartFunction(e)}/>
                </>
            </IconContext.Provider>
             </div>
        </div>
        {openCart ? 
        <div className="order-nav-cart-wrapper">
            <IconContext.Provider value={{ className: "remove-cart-nav-button", size: 25 }}>
                <>
                <ImCross onClick={e => openCartFunction(e)}/>
                </>
            </IconContext.Provider>
        </div>
    : ''}
    </>
    )
}

export default OrderNav