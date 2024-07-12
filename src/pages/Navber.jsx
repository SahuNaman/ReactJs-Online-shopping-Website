import React from 'react'
import './Navber.css'
import {Link} from 'react-router-dom'

const Navber = () => {
  return (
    <>
    <div className='bg-danger a'>
      <img src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" width={"200px"} height={"50px"}/>
      </div>

      <ul className='b'>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/cart">Carts</Link></li>
        <li><Link>Amazon miniTV</Link></li>
        <li><Link>Sell</Link></li>
        <li><Link>Amazon Pay</Link></li>
        <li><Link>Gift Cards</Link></li>
        <li><Link>Buy Again</Link></li>
      </ul>
    
    </>
  )
}

export default Navber
