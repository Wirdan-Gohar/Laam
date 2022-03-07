//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import fea from "../../styles/features.module.css";

const Features = () => {
  const [box, setBox] = useState([
    {
      id: 1,
      text: "ABBB",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Baroque_40_fe6130e5-8385-494f-92c1-3c3d8a18ba72_200x.jpg?v=1646473322",
    },
    {
      id: 2,
      text: "Sohail",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Baroque_40_fe6130e5-8385-494f-92c1-3c3d8a18ba72_200x.jpg?v=1646473322",
    },
    {
      id: 3,
      text: "Areebb",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Baroque_40_fe6130e5-8385-494f-92c1-3c3d8a18ba72_200x.jpg?v=1646473322",
    },
    {
      id: 4,
      text: "WirdanB",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Baroque_40_fe6130e5-8385-494f-92c1-3c3d8a18ba72_200x.jpg?v=1646473322",
    },
    {
      id: 5,
      text: "WirdanB",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Baroque_40_fe6130e5-8385-494f-92c1-3c3d8a18ba72_200x.jpg?v=1646473322",
    },
    {
      id: 6,
      text: "WirdanB",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Baroque_40_fe6130e5-8385-494f-92c1-3c3d8a18ba72_200x.jpg?v=1646473322",
    },
    {
      id: 7,
      text: "WirdanB",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Baroque_40_fe6130e5-8385-494f-92c1-3c3d8a18ba72_200x.jpg?v=1646473322",
    },
    {
      id: 8,
      text: "WirdanB",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Baroque_40_fe6130e5-8385-494f-92c1-3c3d8a18ba72_200x.jpg?v=1646473322",
    },
    {
      id: 9,
      text: "WirdanB",
      img: "//cdn.shopify.com/s/files/1/2337/7003/files/Baroque_40_fe6130e5-8385-494f-92c1-3c3d8a18ba72_200x.jpg?v=1646473322",
    },
  ]);
  const borderstyle = {
    borderTop: "20px solid #F7F7F7",
  };

  return (
    <>
      <div className={fea.outline}>
        <div className={fea.borderstyle}>
          <h2 className={fea.spacing}>Features Brands</h2>
          <div className={fea.alignment}>
            {box.map((it) => (
              <img src={it.img} className={fea.imgSize} />
            ))}
          </div>
        </div>
      </div>
      <div className={fea.outline}>
          <div  className={fea.borderstyle}>
          <img src='//cdn.shopify.com/s/files/1/2337/7003/files/Faster-_-Better-Desktop-Local_1500x.jpg?v=1646410350'
            />
          </div>
      </div>

    </>
  );
};
export default Features;
