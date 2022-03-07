import { Carousel } from "@trendyol-js/react-carousel";
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";

import Deals_ItemLeft from "./Deals_Item";
import Deals_ItemRight from "./Deals_ItemRight";
const Deals_Carosel = () => {
  const [box, setBox] = useState([
    {
      id: 1,
      text: "ABBB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Farah-Talib-Aziz_15_0573b847-6a8b-4116-9803-3e01484e1742_540x.jpg?v=1646392031",
    },
    {
      id: 2,
      text: "Sohail",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Farah-Talib-Aziz_15_0573b847-6a8b-4116-9803-3e01484e1742_540x.jpg?v=1646392031",
    },
    {
      id: 3,
      text: "Areebb",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Farah-Talib-Aziz_15_0573b847-6a8b-4116-9803-3e01484e1742_540x.jpg?v=1646392031",
    },
    {
      id: 4,
      text: "WirdanB",
      img: "https://cdn.shopify.com/s/files/1/2337/7003/files/Farah-Talib-Aziz_15_0573b847-6a8b-4116-9803-3e01484e1742_540x.jpg?v=1646392031",
    },
  ]);

  const borderstyle={
    borderTop:'20px solid #F7F7F7',
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          marginLeft: "-30px",
          marginRight: "-30px",
        }}
      >
        <div style={borderstyle}>
          <h2 style={{marginLeft:'30px',fontSize:'1.8em',letterSpacing:'.15em'}}>DEALS OF THE DAY</h2>

          <Carousel style={{ width: "360px!important" }} show={3.5} slide={1} swiping={true} leftArrow={<Deals_ItemLeft/>} rightArrow={<Deals_ItemRight/>}>
              {box.map((it) => (
                <img src={it.img} style={{ height: "450px" }} />
          
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default Deals_Carosel;