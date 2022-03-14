import { Add, PanToolSharp, Remove } from "@material-ui/icons";
import styled from "styled-components";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer/Footer";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import axios from "axios";
//import { addProduct } from '../../../components/redux/action';
import { useRouter } from "next/router";
import React, { memo } from "react";
import { sliderItems } from "../../../data";
//import { useLocation } from "react-router";
// import { publicRequest } from "../requestMethods";
//import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
//import { Carousel } from 'react-responsive-carousel';
import router from "next/router";
//import {toast} from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//toast.configure()
import ImageMagnifier from "./ImageMagnifier";
//import Rating from '@material-ui/lab/Rating';
import Typography from "@material-ui/core/Typography";
//import Box from '@material-ui/core/Box';
import css from '../index.module.css'
const Product = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const [review, setReview] = useState(0);
  const [votes, setVotes] = useState(0);
  const [modal, setModal] = React.useState(false);
  const [togglediv, settoggle] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [slideIndex, setSlideIndex] = useState(0);
  const [path, setPath] = useState([
    "https://cdn.shopify.com/s/files/1/2337/7003/products/16_0e6df57b-33fd-4c82-9f77-7caf40d1bdc9_700x.jpg?v=1631001480",
    "https://cdn.shopify.com/s/files/1/2337/7003/products/16_0e6df57b-33fd-4c82-9f77-7caf40d1bdc9_700x.jpg?v=1631001480",
  ]);
  const [carddiv, setCardDiv] = useState(false);
  const handleClick = (direction) => {
    console.log("hello");
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : path.length);
    } else {
      setSlideIndex(slideIndex < path.length ? slideIndex + 1 : 0);
    }
  };

  const RadioInput = ({ label, value, checked, setter, name }) => {
    const handelChange = (name) => (e) => {};
    //     let list = [...state]

    //     console.log("valueeee", e.target.value);
    //     // console.log('before list', list)

    //     for (var i = 0; i < state.length; i++) {

    //       if (name === (state[i].name)) {

    //         setter(e.target.value)
    //         state[i].value = e.target.value
    //         console.log("listttt", state)
    //         // setstate(list)
    //       }

    //     }

    //     setstate(state)
    //     console.log('RESultttttttt', state)
    //     state.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
    //     var str = ''
    //     state.map(item => {
    //       str = str + item.value + ' '
    //     })
    //     var str_join = str.split(" ").join("_")
    //     var string = str_join.slice(0, -1);
    //     string = string.toLowerCase()
    //     setstrr(string)

    //     console.log(string)

    //     item.combinations.map((v) => {
    //       if (string === (v.product_variant_name)) {

    //         setcomb(v.regular_price)
    //         setCardDiv(true)
    //         setstrr(state)
    //         setvariant_name(v.product_variant_name)
    //         setvid(v.id)
    //       }
    //       // if(comb!='')

    //       // else
    //       // setCardDiv(false)

    //     })
    //     // console.log("price", comb)
    //   }

    return (
      <label>
        <input
          type="radio"
          checked={checked == value}
          value={value}
          onChange={handelChange(name)}
        />
        <span>{label}</span>
      </label>
    );
  };

  //   const [state, setstate] = useState([{
  //     id: null,
  //     name: '',
  //     value: ''
  //   }]);

  //const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decCount = () => {
    setCount(count - 1);
  };

  const [thrddiv, setThrdDiv] = useState(false);
  const [color, setColor] = React.useState();
  const [mat, setMaterial] = React.useState();
  const [size, setSize] = React.useState();

  //   const [item, setItem] = useState({
  //     name: '',
  //     supplier_id: null,
  //     category_id: null,
  //     variants: [],
  //     combinations: [],
  //     images: []
  //   });
  const [item, setItem] = useState({
    id: 1,
    name: "ABC",
    img: "https://cdn.shopify.com/s/files/1/2337/7003/products/16_0e6df57b-33fd-4c82-9f77-7caf40d1bdc9_700x.jpg?v=1631001480",
  });
  const router = useRouter();
  const { id } = router.query;

  // const handleCount = () => {
  //   if (count === 1) {
  //     setCount(count);
  //   } else {
  //     let x = count;
  //     x = x - 1;
  //     setCount(x);
  //   }
  // };
  
  const [comb, setcomb] = useState("");
  const [vid, setvid] = useState();
  const [strr, setstrr] = useState("");
  const [variant_name, setvariant_name] = useState("");
  const [radio, setRadiobtn] = useState({
    selected: "",
    name: "",
  });
  const [radio2, setRadio2btn] = useState({
    selected: "",
    name: "",
  });
  const [radio3, setRadio3btn] = useState({
    selected: "",
    name: "",
  });

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Boxx>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
          </Arrow>
          <ImgWrapper slideIndex={slideIndex}>
            {path.map((pa, i) => (
              <Slide bg={item.id} key={i}>
                <ImgContainer>
                  <ImageMagnifier img={pa} />
                </ImgContainer>
              </Slide>
            ))}
          </ImgWrapper>
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
          </Arrow>
        </Boxx>

        <InfoContainer>
          <Title>
            HEM | PARIZAAD - LUXURY PRET - HEM - LOTUS OUTFIT - ICE BLUE
          </Title>
          <Desc>
            {/* <div style={{ display: "flex", flexDirection: "row" }}>
              <p>Brand :</p>
              <p style={{ color: "skyblue" }}>HEM</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p>Collection :</p>
              <p style={{ color: "skyblue" }}>HEM</p>
            </div> */}
            <p>Brand : Zara Shahjahan</p>
            <p>Collection : Coco By Zara Shahjahan | Spring Summer Lawn'22</p>
            
            
          </Desc>

          
          <AddContainer>
            <AmountContainer>
              {/* onClick={() => handleCount(setCount(count - 1))} */}
              <p style={{ fontWeight: "600",fontSize:'20px',marginLeft:'20px' }}>PKR. 20,000</p>
              <span><button className={css.minus_btn} onClick={decCount}>-</button></span>
              <span><p className={css.counter}>{count}</p></span>
              <span><button className={css.add_btn} onClick={incrementCount}>+</button></span>
              
              
              {/* <AmountBtn>
                {" "}
                <Remove />
              </AmountBtn>
              <Amount>
                {55}
              </Amount>
              <AmountBtn>
                {" "}
                <Add />
              </AmountBtn> */}
            </AmountContainer>
            {carddiv && (
              <Button onClick={() => addToCart()}>ADD TO CART</Button>
            )}
          </AddContainer>
          <Desc>
            <p style={{fontSize:'16px',fontStyle:'italic' }}>Estimated shipping date: <b>Mar 27, 2022</b> <br /><br />
              Note:Delivery will vary as per customer location.</p>
          </Desc>
        </InfoContainer>
        {/* {localStorage.getItem('token') &&
          <>
          {ratingValue==0?
          <Box component="fieldset" mb={3} borderColor="transparent" 
          style={{borderColor:'transparent',marginTop:'100px',marginLeft:'100px'}}>
        <Typography component="legend" >
           <Rate>Rate Product</Rate> 
        </Typography>
        <Rating
       // style={{marginLeft:'20px'}}
          name="Rating Label"
          value={ratingValue}
          onChange={(event, newValue) => {
            handleRating(newValue);
          }}
        />
      </Box>:
      <div style={{borderColor:'transparent',marginTop:'100px',marginLeft:'100px'}}> 
      <Rate>Thanks for Rating Us.</Rate>
      <Rating
      value={ratingValue}
        />
      </div>}
      </>
}
        </InfoContainer>
        {localStorage.getItem('token') &&
        <Review >
        <h4>Customer Reviews</h4>
        <Rating
          value={review}  
        />
       <h5 style={{marginTop:'-1px'}}>{review} out of 5  <label>({votes} votes)</label></h5>
       
      </Review>
}*/}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const Review = styled.div`
  margin-top: 450px;
`;
const Rate = styled.div`
  font-weight: 600;
  font-size: 22px;
  font-family: Times New Roman;
`;

const FilterContainer = styled.div`
  max-width: 40%;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  max-width: 50%;
  min-width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FilterSize = styled.span`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;

const FilterSizeOpt = styled.span`
  padding-left: 20px;
`;
const Container = styled.div`
  background-color: whitesmoke;
`;

const Wrapper = styled.div`
  padding: 50px;
  margin-left: 150px;
  margin-right: 150px;
  display: flex;
`;
const Boxx = styled.div`
  padding-top: -200px;
  width: 500px;
  height: 100vh;
  display: flex;
  position: relative;
  margin-top: 100px;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 500px;
  margin-top: -60px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -500}px);
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 500px;

  object-fit: fill;
`;

const InfoContainer = styled.div`
  margin-left: 30px;
  width: 600px;
  margin-top: 100px;
  background-color: white;
`;

const Title = styled.h1`
  font-weight: 700;
  width: 430px;
  padding-left: 20px;
  font-size: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  padding-left: 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const AmountBtn = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: pointer;
`;
const Slide = styled.div`
  width: 500px;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Button = styled.button`
  cursor: pointer;
  /* 
  
 
  background-color: white;
  cursor: pointer;
 
  &:hover{
      background-color: #ffcdcd;
  } */
  transition: all 0.5s ease;
  color: #000000;
  border: 1px solid teal;
  text-align: center;
  background-color: transparent;
  padding: 15px;
  outline: none;
  font-weight: bold;
  border-radius: 1px;
  &:hover {
    color: #ffffff;
    background-color: teal;
    border: 1px solid teal;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #b6b6b6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

{
  /* 
            {item.variants.map((v) => (
              <Filter>
                <FilterTitle >{v.name.charAt(0).toUpperCase() + v.name.slice(1)}:</FilterTitle>
                <FilterSize onChange={handelChange(v.name)}>
                  <FilterSizeOption value='' selected disabled>Select Values</FilterSizeOption>
                  {v.values.map((opt) => (

                    <FilterSizeOption value={opt}>{opt}</FilterSizeOption>

                  ))}

                </FilterSize><br />
              </Filter>
            ))} */
}
