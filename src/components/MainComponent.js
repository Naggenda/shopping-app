
import React, {useState} from 'react';
import minus from '../images/icon-minus.svg';
import add from '../images/icon-plus.svg';
import Imagerender from '../components/Imagerender';


function MainComponent(){

  const [input, setCounter] = useState(0)
  
  const increment =() =>{
    setCounter((prev) => prev + 1) 
  }

  const decrement =() =>{
    setCounter((prev) => prev - 1)
  }
    return(
        <div className="main-content">
           <Imagerender />
           <div className="description">
              <small>Sneaker Company</small>
              <h2>Fall Limited Edition Sneakers</h2>
              
        
        <p>
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="display">
           <h4>$125.00</h4>
           <small>50%</small>
        </div>
        <br />
        <span><small>$250.00</small></span>
        
        <br />
        <div className="div-btn">
        
          <div className="btn-add">
             <button onClick={decrement} className="btn-click"><img src={minus} alt="minus" /></button>
              <p>{input}</p>
             <button onClick={increment} className="btn-click"><img src={add} alt="add" /></button>
             
          </div>

          <div className="btn-rgt">            
            <button type="submit" value="Add to cart" className="cart-btn">Add to cart</button>
          </div>
      </div>
    </div>
  </div>

    )
}

export default MainComponent;