
import React, {useState} from 'react';

// import { ReactComponent as img } from './image-product-1.jpg';
import img from '../image-product-1.jpg';
import img1 from '../images/image-product-1-thumbnail.jpg';
import img2 from '../images/image-product-2-thumbnail.jpg';
import img3 from '../images/image-product-3-thumbnail.jpg';
import img4 from '../images/image-product-4-thumbnail.jpg';
import minus from '../images/icon-minus.svg';
import add from '../images/icon-plus.svg'


function MainComponent(){

  const [input, setCounter] = useState(0)
  
  const increment =() =>{
    setCounter((prev) => prev + 1) 
  }

  const decrement =() =>{
    setCounter((prev) => prev - 1)
  }
    return(
        <div className="nav">
           <div className="image-side">
            <img src={img} alt="mine" className="img-main" />
               <div className="sub-img">
                 <img src={img1} alt="mine" className="img-sub" />
                 <img src={img2} alt="mine" className="img-sub" />
                 <img src={img3} alt="mine" className="img-sub" />
                 <img src={img4} alt="mine" className="img-sub" />
               </div>
           </div>
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
             <button onClick={decrement}><img src={minus} alt="minus" /></button>
              <p>{input}</p>
             <button onClick={increment}><img src={add} alt="add" /></button>
             
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