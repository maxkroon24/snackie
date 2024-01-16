import React, {useState, useEffect} from 'react'
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import OrderNav from '../components/OrderNav'
import { IconContext } from "react-icons";
import {AiOutlineSearch} from 'react-icons/ai'
import axios from 'axios';

function Order() {
    const location = useLocation()
    const { adress, alldata } = location.state
    const [orderItems, setOrderItems] = useState([])
    const [searchItems, setSearchItems] = useState('')
    const [uniqueOrderItems, setUniqueOrderItems] = useState()
    const [openFilters, setOpenFilters] = useState(false)
    function truncate(str, length) {
      if (str.length > length) {
        return str.slice(0, length) + '...';
      } else return str;
    }

    async function getOrderItems(orderTheme, e) {
        e.preventDefault()
        setSearchItems('')
        setOrderItems([])
        setUniqueOrderItems()
        fetch(`https://api.spoonacular.com/food/products/search?query=${orderTheme}&number=50&&addProductInformation=True&apiKey=e98f890180974f4cbc90995badeb3eff`)
        .then(response => response.json())
        .then((data) => {
          for (let index = 0; index < data.products.length; index++) {
            const orderItem = data.products[index];
            setOrderItems(prevItems => [...prevItems, orderItem])     
          } 
          setUniqueOrderItems(orderItems.filter((value, index, self) =>
            index === self.findIndex((t) => (
              t.place === value.place && t.title === value.title
            ))
          ))
        })
        
    }
    console.log(orderItems)
    console.log(searchItems)
  return (
    <>
    <OrderNav adress={adress} alldata={alldata}/>
    <div className="nav-snack-buttons-wrapper">
        <button className="chocolate-btn" onClick={e => getOrderItems('Chocolate', e)}>Chocolate</button>
        <button className="candy-btn" onClick={e => getOrderItems('Candy', e)}>Candy</button>
        <button className="cake-btn" onClick={e => getOrderItems('Cake', e)}>Cake</button>
        <button className="cookies-btn" onClick={e => getOrderItems('Cookies', e)}>Cookies</button>
        <button className="chips-btn" onClick={e => getOrderItems('Chips', e)}>Chips</button>
    </div>
    <div className="filters-btn-wrapper">
     <p className="filters-btn" onClick={e => setOpenFilters(prevState => !prevState)}>Filters:</p>
     <input type="search" name="" id="" placeholder='Search' className='input-search-order-items' onChange={e => setSearchItems(e.target.value)} value={searchItems}/>
     <IconContext.Provider value={{ className: "search-btn-order-items", size: 24 }}>
            <div className="wrapper-search-btn" onClick={e => getOrderItems(searchItems, e)}><AiOutlineSearch/></div>
        </IconContext.Provider>
    </div>
    <div className="order-items-screen-wrapper">
      <div className={openFilters ? 'filters-order-items-wrapper open' : 'filters-order-items-wrapper'}>

      </div>
    <div className="order-items-wrapper">
        {orderItems ? orderItems.map((item) => {
            return (
              <div className="order-item" key={item.id} id={item.id}>
                <p className="order-item-title">{item.title.length > 20 ? truncate(item.title, 20) : item.title}</p>
                </div>
            )
        }) : ''}
    </div>
    </div>
    </>
  )
}

export default Order