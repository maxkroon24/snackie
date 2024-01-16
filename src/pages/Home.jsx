import React, {useState} from 'react'
import Header from '../components/Header'
import { useNavigate, NavLink } from "react-router-dom";
import axios from 'axios';

function Home() {
  const [postal, setPostal] = useState('')
  const [housenumber, setHousenumber] = useState('')
  const [adress, setAdress] = useState('')
  const navigate = useNavigate(); 
  function getOrderAdress(e) {
    e.preventDefault()
    fetch('postalcodes_nl.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(allpostals) {
        const postalobj = allpostals.find(item => item.postcode.replace(/\s+/g, '') === postal)
        console.log(postalobj)
        setAdress(adress => postalobj.straatnaam + ' ' + housenumber)
        if(adress)
        navigate('/bestellen', {state: { adress: adress, alldata: postalobj } });
      })
        
  }
  return (
    <>
    <Header/>
    <div className="home-page-wrapper">
      <div className="text-home-wrapper">
        <div className="inner-text-home-wrapper">
        <h1 className="big-title-home">Welkom bij <p>Snackie</p></h1>
        <div className="call-to-action-wrapper-home">
          <div className="inputs-home-wrapper">
          <input id="postal" onChange={e => setPostal(e.target.value.toUpperCase())} placeholder='Postcode' name="postal" type="text" value={postal} maxLength="6"/>
          <input id="housenumber" onChange={e => setHousenumber(e.target.value.toUpperCase())} placeholder='Huisnummer' name="housenumber" type="text" pattern="\d*" value={housenumber} maxLength="4"/>
          </div>
          <button type="submit" onClick={e => getOrderAdress(e)}>Bestel nu</button>
          <p className="direct-link-to-order-home">Of bekijk het menu </p>
         </div>
       </div>
      </div>
       <div className="home-image-wrapper">
        <img src="/img/homepage.jpg" alt="image-home-page" />
        </div>
     </div>
    </>
  )
}

export default Home