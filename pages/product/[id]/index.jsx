import { Add, PanToolSharp, Remove } from "@material-ui/icons";
import styled from "styled-components";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer/Footer";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useEffect, useState, } from "react";
//import { useParams } from "react-router-dom";
import axios from "axios"
//import { addProduct } from '../../../components/redux/action';
import { useRouter } from 'next/router'
import React, { memo } from 'react';
import { sliderItems } from "../../../data";
//import { useLocation } from "react-router";
// import { publicRequest } from "../requestMethods";
//import { useDispatch, useSelector } from 'react-redux';
import {  Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
//import { Carousel } from 'react-responsive-carousel';
import router from 'next/router';
//import {toast} from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//toast.configure()
import ImageMagnifier from "./ImageMagnifier";
//import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
  

  
 



const Product = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const [review, setReview] = useState(0);
  const [votes, setVotes] = useState(0);
  const [modal, setModal] = React.useState(false);
  const [togglediv, settoggle] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [slideIndex, setSlideIndex] = useState(0);
  const [path,setPath]=useState(['https://cdn.shopify.com/s/files/1/2337/7003/products/16_0e6df57b-33fd-4c82-9f77-7caf40d1bdc9_700x.jpg?v=1631001480',
'https://cdn.shopify.com/s/files/1/2337/7003/products/16_0e6df57b-33fd-4c82-9f77-7caf40d1bdc9_700x.jpg?v=1631001480'])
  const [carddiv,setCardDiv]=useState(false)
  const handleClick = (direction) => {
    console.log('hello')
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : path.length);
    } else {
      setSlideIndex(slideIndex < path.length ? slideIndex + 1 : 0);
    }
  };
  
  const RadioInput = ({label, value, checked, setter,name}) => {

   
  const handelChange = (name) => (e) => {
  }
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
        <input type="radio" checked={checked == value} value={value}
               onChange={handelChange(name) } />
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
  const [count, setCount] = useState(1);
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
  const [item,setItem]=useState({
      id:1,
      name:'ABC',
      img:'https://cdn.shopify.com/s/files/1/2337/7003/products/16_0e6df57b-33fd-4c82-9f77-7caf40d1bdc9_700x.jpg?v=1631001480'
  })
  const router = useRouter();
  const { id } = router.query;

  const handleCount = () => {
    if (count === 1) { setCount(count) }
    else {
      let x = count;
      x = x - 1
      setCount(x)
    }
  }
//   const addToCart = () => {
    
//     dispatch(addProduct(
//       {
//         id:   id,
//         name: item.name,
//         desc: item.product_description,
//         price: comb,
//         count: count,
//         variant: strr,
//         variant_name: variant_name,
//         image:path[0]

//       }
//     ))
//     // settoggle(true)
//     toast(`${item.name} Added Successfully`)
//     //router.push('/cart')
//   }


  // const [variants, setVariants] = useState('');
  // const handleVariant = child => {
  //   setVariants(child)
  //   console.log("variantssss", variants)
  //   item.combinations.map((v) => {
  //     if (variants === (v.product_variant_name)) {
  //       setcomb(v.regular_price)
  //     }
  //   })
  //}
  const [comb, setcomb] = useState('');
  const [vid, setvid] = useState();
  const [strr, setstrr] = useState('');
  const [variant_name, setvariant_name] = useState('');
  const [radio, setRadiobtn] = useState({
    selected: '',
    name:''
  });
  const [radio2, setRadio2btn] = useState({
    selected: '',
    name:''
  });
  const [radio3, setRadio3btn] = useState({
    selected: '',
    name:''
  });





//   useEffect(() => {
    
//     if (!id) {
//       return;
//     }
//     const fetchSomethingById = () => {
//       axios.get(`http://95.111.240.143:8080/ecom-api/products/${id}`)
//         .then(response => {
          
//           setItem(response.data.data)
//           setcomb(response.data.data.price)
//           console.log("in useeffec",response.data.data)
//           let img=[]    
//             setItem(response.data.data);
//             response.data.data.images.map(item=>{
              
//               //p=p.substring(p.length-2)
//               let x='http://95.111.240.143/ecom-api/'+item
              
//               img.push(x)
              
            
//              })

             
          
          
//           setPath(img)
//           var list = []
          
//           if(response.data.data.variants.length==0)
//           {
            
//           setThrdDiv(false)
//           setCardDiv(true)
//           setcomb(response.data.data.price)
//           }
//           else{
            
//           setThrdDiv(true)
//           for (var i = 0; i < response.data.data.variants.length; i++) {

//             list.push(
//               {
//                 id: response.data.data.variants[i].id,
//                 name: response.data.data.variants[i].name,
//                 value: ''
//               }
//             )
            

//           }
//         }
//           setstate(list)
         
//         }).catch(err=>console.log(err))
     
//     axios.get(`http://95.111.240.143:8080/ecom-api/rating/onlyproduct/${id}`)
//     .then(res=>{
//       let data=[0,0,0,0,0]
//       console.log('rttdd',res.data.data)
//       let total_votes=0
//       if(res.data.data.length!=0)
//       {
//       for(let i=1;i<data.length+1;i++)
//       {
//         res.data.data.map(it=>{
          
//           if(i==it.rating_id)
//           {
//             total_votes= total_votes + it.total_count
//             console.log('i',i)
//           data[i-1]=it.total_count
//           }
//         })
//       }
//      let rt=0.0;
//      rt=(1*data[0])+(2*data[1])+(3*data[2])+(4*data[3])+(5*data[4])
//      rt=rt/5
//      setReview(rt)
//      setVotes(total_votes)
//      console.log('rt',rt)

//     }
//     else{
//       setReview(0)
//     }

//     }).catch(err=>console.log(err))

//     }
//     fetchSomethingById()
//   }, [id]);

//   const ChkCount = () => {
//      if(count===15)
//      setCount(count)
//      else
//      setCount(count=>count+1)
//   }
//   const handleRating = (value) => {
//     setRatingValue(value)
//     console.log('iddd',id)
//     let str= value.toString()+'.' +id.toString();
    
//     let st=parseFloat(str)
//     console.log('str',str)
//     axios.get(`http://95.111.240.143:8080/ecom-api/rating/product/${st}`)
//     .then(res=>{
//       console.log('rating',res.data.success)
//       if(res.data.data.length!=0)
//       {
//         let count=res.data.data[0].total_count+1;
//         axios.put(`http://95.111.240.143:8080/ecom-api/rating/${res.data.data[0].id}`,{total_count:count,rating_id:value,product_id:id},
//         {headers: { 'content-type': 'application/json' }}
//         ).then(response=>{
//          console.log('response',response.data.message)
//         }).catch(error=>console.log(error))
//       }
//       else{
        
//         axios.post(`http://95.111.240.143:8080/ecom-api/rating`,{rating_id:value,product_id:id,total_count:1},
//         {headers: { 'content-type': 'application/json' }}
//         ).then(response=>{
//          console.log('response',response.data)
//         }).catch(error=>console.log(error))
//       }
//     }).catch(err=>console.log(err))
//  }

  


  return (

    <Container>
    

     <Navbar />
      
      <Wrapper>
     
        <Boxx>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
        </Arrow>
       <ImgWrapper slideIndex={slideIndex}>
      {path.map((pa,i) => (
          <Slide bg={item.id} key={i} >
            <ImgContainer>
            <ImageMagnifier  img={pa}/> 
            
            </ImgContainer>
          </Slide>
      ))
     }
 </ImgWrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
      </Boxx>

        <InfoContainer>
          <Title>HEM | PARIZAAD - LUXURY PRET - HEM - LOTUS OUTFIT - ICE BLUE</Title>
          <Desc>
           <div style={{display:'flex',flexDirection:'row'}}>
           <p>Brand :</p>
               <p style={{color:'skyblue'}}>HEM</p>
           </div>
           <div style={{display:'flex',flexDirection:'row'}}>
           <p>Collection :</p>
           <p style={{color:'skyblue'}}>HEM</p>
           </div>
          </Desc>
         <PriceContainer>
             g
         </PriceContainer>

         
          {/* {comb ? <Price>$ {comb*count}</Price> : <>
            <Price>$ <p style={{ color: 'red', fontSize: '14px' }}>Please select variants for Price</p></Price>

          </>} 


          <Filter >

            {thrddiv &&
            item.variants.map((v,len) => (


              <FilterSize >
                <label style={{ fontWeight: 'bold' }}  >{v.name.charAt(0).toUpperCase() + v.name.slice(1)}: </label>

                {len===0?
                v.values.map((opt, key) =>  (
                  <div>
        
                  <RadioInput label={opt} value={opt} checked={color} setter={setColor}  name={v.name}/>
                  
                </div>
                
                  )):''
                }
                {len===1?
                v.values.map((opt, key) =>  (
                  <div>
                      
                      <RadioInput label={opt} value={opt} checked={mat} setter={setMaterial} name={v.name}/>
                      
                    </div>
                   
                 
                  )):''
                }
                {len===2?
                v.values.map((opt, key) =>  (
                  <div>
                   
                  
                 
                  <RadioInput label={opt} value={opt} checked={size} setter={setSize} name={v.name} />
                  
                </div>
                 
                  )):''
                }
             
               
                
                 
                <br />

              </FilterSize>

            ))} 

            
          </Filter> */}

          <AddContainer>
            <AmountContainer>
            {/* onClick={() => handleCount(setCount(count - 1))} */}
              <AmountBtn> <Remove  /></AmountBtn>
              <Amount>
                  {55}
                {/* {count} */}
              </Amount>
              {/* onClick={}() => ChkCount() */}
              <AmountBtn> <Add  /></AmountBtn>
            </AmountContainer>
            {carddiv &&
            <Button
              onClick={() => addToCart()}
            >ADD TO CART</Button>
}
{/* {togglediv &&
<ModalCnfrm/>
} */}
          </AddContainer>
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
 


      </Wrapper >
      <Footer/>
    </Container >
  );
};

export default Product;



const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const Review= styled.div`
      margin-top:450px;
      `;
      const Rate= styled.div`
      font-weight:600;
      font-size:22px;
      font-family:Times New Roman;
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
  justify-content: space-around

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
  background-color:whitesmoke;
  
`;

const Wrapper = styled.div`
  padding: 50px;
  margin-left:150px;
  margin-right:150px;
  display: flex;
`;
const Boxx =styled.div`
padding-top: -200px;
width: 500px;
  height: 100vh;
  display: flex;
  position: relative;
  margin-top:100px;
  overflow: hidden;
  `;

const ImgWrapper = styled.div`
height: 100%;
width: 500px;
margin-top:-60px;
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
  
  margin-left:30px;
  width:600px;
  margin-top:100px;
  background-color:white;
`;

const Title = styled.h1`
  font-weight: 700;
  width:430px;
  padding-left:20px;
  font-size:20px;
`;

const Desc = styled.p`

  margin: 20px 0px;
  padding-left:20px;
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
cursor:pointer;
  /* 
  
 
  background-color: white;
  cursor: pointer;
 
  &:hover{
      background-color: #ffcdcd;
  } */
  transition: all .5s ease;
color: #000000; 
border: 1px solid teal;
text-align: center;
background-color : transparent;
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

{/* 
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
            ))} */}