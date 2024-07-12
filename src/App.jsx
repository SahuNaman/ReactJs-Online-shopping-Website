
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navber from './pages/Navber';
import Home from './pages/Home';
import Carts from './pages/Carts';
import Single from './pages/Sing';
import Not from './pages/Not';
import { useState } from 'react';


function App() {
  const [x,setX]=useState([])
  console.log(x)
  let getCartItem = (ans)=>{
    console.log(ans)
    let existItems = x.find((ele)=>ele.id===ans.id)
    console.log(existItems)
    if(!existItems){
      setX([...x,ans])

    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navber/>
        <Routes>
          <Route path="/" element={<Home getCartItem={getCartItem}/>}/>
          <Route path="/cart" element={<Carts x={x} setcart={setX}/>}/>
          <Route path="/single" element={<Single getCartItem={getCartItem}/>}/>
          <Route path="/*" element={<Not/>}/>
          
          
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
