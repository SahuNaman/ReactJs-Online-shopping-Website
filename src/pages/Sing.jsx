import React from 'react'
import { useLocation } from 'react-router-dom'

const Sing = (props) => {
  const handlecarts= (ele)=>{
    console.log(ele)
    props. getCartItem(ele)
  }
  let location =useLocation()
  console.log(location)
  return (
    // <div className='card d-flex justify-content-center align-items-center bg-info' style={{width:"300px"}}>
    //  <img src={location.state.images} width={"200px"}  height={"200px"}/>
    //  <p>Brand : {location.state.brand}</p>
    //  <p>Category : {location.state.category}</p>
      <div className='row'>
        <div className='col-md-6 d-flex align-items-center justify-content-center '>
         <img src={location.state.images} width={"300px"}  height={"300px"}/>
        </div>
        <div className='col-md-6   d-flex align-items-center flex-column'>
          <h3>Title : {location.state.title}</h3>
          <h4>Brand : {location.state.brand}</h4>
          <h4>Category : {location.state.category}</h4>
          <p>Price :{location.state.price}</p>
          <p>Rating :{location.state.rating} </p>
          <p>Stock :{location.state.stock} </p>
          <h6>Warranty : {location.state.warrantyInformation}</h6>
          <p>{location.state.description}</p>
          <button className=' btn btn-danger' onClick={()=>handlecarts(location.state)}>Add to Cart</button>
        </div>
      </div>
    // </div>
  )
}

export default Sing
