import React from 'react'

const Carts = (props) => {
  let a = props.x
  console.log(a)
  // const []

  const handle=(obj,i)=>{
    console.log(obj)
    console.log(i)
    let udatedobj = {
      ...obj,quantity:obj.quantity+1,
      price:obj.price + (obj.price/obj.quantity)
    }
    let UpdATE = [...props.x]
    UpdATE[i]=udatedobj
    props.setcart(UpdATE)
  }
  return (
    <div>
    <div class="cartPage">
          <table class="table text-center align-middle">
            <thead>
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Product</th>
                <th scope="col">Title</th>
                <th scope="col">Quanity</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody >
            {a.map((ele,index)=>{
              return <tr>
                <th scope="row">{index+1}</th>
                <td><img src={ele.thumbnail} style={{height:"300px",width:"300px"}}/></td>
                <td>{ele.title}</td>
                <td><button className='btn btn-success' onClick={()=>handle(ele,index)}>+</button>{ele.quantity}<button className='btn btn-success'>-</button> </td> 
                <td>{ele.price}</td>
                <td><button className='btn btn-success'>Delete</button></td>

              </tr>
            })}
            
             
            </tbody>
          </table>

      </div>

    </div>
  )
}

export default Carts
