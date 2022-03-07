//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import fea from "../../styles/features.module.css";

const Shop_By_Price = () => {
  const [box, setBox] = useState([
    {
      id: 1,
      text: "ABBB",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Footwear_29.jpg?v=1646405401",
    },
    {
      id: 2,
      text: "Sohail",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Footwear_29.jpg?v=1646405401",
    },
    {
      id: 3,
      text: "Areebb",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Footwear_29.jpg?v=1646405401",
    },
    {
      id: 4,
      text: "WirdanB",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Footwear_29.jpg?v=1646405401",
    },
  
  
   
  ]);
  const borderstyle = {
    borderTop: "20px solid #F7F7F7",
  };

  return (
    <>
      <div className={fea.outline}>
        <div className={fea.borderstyle}>
          <h2 className={fea.spacing}>Shop By Price</h2>
          <div className={fea.alignment}>
            {box.map((it) => (
              <img src={it.img} className={fea.shopPrice}/>
            ))}
          </div>
        </div>
      </div>
     

    </>
  );
};
export default Shop_By_Price;
