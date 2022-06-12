import React, {useState} from 'react';
import product1 from '../image-product-1.jpg';
import product2 from '../images/image-product-2.jpg';
import product3 from '../images/image-product-3.jpg';
import product4 from '../images/image-product-4.jpg';
import '../index.css';


import img1 from '../images/image-product-1-thumbnail.jpg';
import img2 from '../images/image-product-2-thumbnail.jpg';
import img3 from '../images/image-product-3-thumbnail.jpg';
import img4 from '../images/image-product-4-thumbnail.jpg';


const Imagerender = () => {
  const [imageClicked, setImageClicked] = useState({
    first: false,
    second: false,
    third: false,
    ground: true
  });
  const onClickHandler = (order) => {
    const resetImages = {
      first: false,
      second: false,
      third: false,
      ground: false
    }
    setImageClicked({
      ...resetImages,
      [order]: true
    });
  };
  return (
    <div className="image-side">
      
      <div className="image">
        {imageClicked.ground && <img src={product1} alt="ground" className="img-main" />}
        {imageClicked.first && <img src={product2} alt="first" className="img-main" />}
        {imageClicked.second && <img src={product3} alt="second" className="img-main" />}
        {imageClicked.third && <img src={product4} alt="second" className="img-main" />}
      </div>

      <div className="Ccontainer sub-img">
        <img src={img1} alt="sub-img" onClick={() => onClickHandler("ground")} className="ground img-sub" />
          
        <img src={img2} alt="sub-img" onClick={() => onClickHandler("first")} className="ground img-sub" />
          
        <img src={img3} alt="sub-img" onClick={() => onClickHandler("second")} className="ground img-sub" />
          
        <img src={img4} alt="fourth" onClick={() => onClickHandler("third")} className="ground img-sub" />
          
      </div>
    </div>
  );
};

export default Imagerender;
