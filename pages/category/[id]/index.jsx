import styled from "styled-components";
//import Announcement from "../../../components/Announcement";
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/footer/Footer";
import { useEffect, useState } from 'react';
import {
    HomeOutlined
  } from "@material-ui/icons";
//import axios from "axios";
import ProductItem from "../../../components/ProductItem";

import { useRouter } from 'next/router'

const Category = () => {
    const router = useRouter();
    const { id } = router.query;
    const [items, setItems] = useState([])
    const [pro, setPro] = useState([
        {
            id:1,
            img:'//cdn.shopify.com/s/files/1/2337/7003/products/2_ae09fef5-fd82-4c9b-aa0f-12383c54d218_300x.jpg?v=1646656226',
            name:'ABA',
            price:4000
        },
        {
            id:2,
            name:'ABA',
            img:'//cdn.shopify.com/s/files/1/2337/7003/products/2_ae09fef5-fd82-4c9b-aa0f-12383c54d218_300x.jpg?v=1646656226',
            price:6000
        },
        {
            id:3,
            name:'ABA',
            img:'//cdn.shopify.com/s/files/1/2337/7003/products/2_ae09fef5-fd82-4c9b-aa0f-12383c54d218_300x.jpg?v=1646656226',
            price:7000
        },
        {
            id:4,
            name:'ABA',
            img:'//cdn.shopify.com/s/files/1/2337/7003/products/2_ae09fef5-fd82-4c9b-aa0f-12383c54d218_300x.jpg?v=1646656226',
            price:4000
        },
        {
            id:5,
            name:'ABA',
            img:'//cdn.shopify.com/s/files/1/2337/7003/products/2_ae09fef5-fd82-4c9b-aa0f-12383c54d218_300x.jpg?v=1646656226',
            price:9000
        },
        {
            id:6,
            name:'ABA',
            img:'//cdn.shopify.com/s/files/1/2337/7003/products/2_ae09fef5-fd82-4c9b-aa0f-12383c54d218_300x.jpg?v=1646656226',
            price:7000
        },
        {
            id:8,
            name:'ABA',
            img:'//cdn.shopify.com/s/files/1/2337/7003/products/2_ae09fef5-fd82-4c9b-aa0f-12383c54d218_300x.jpg?v=1646656226',
            price:3000
        },
        {
            id:9,
            name:'ABA',
            img:'//cdn.shopify.com/s/files/1/2337/7003/products/2_ae09fef5-fd82-4c9b-aa0f-12383c54d218_300x.jpg?v=1646656226',
            price:4000
        },
        {
            id:10,
            name:'ABA',
            img:'//cdn.shopify.com/s/files/1/2337/7003/products/2_ae09fef5-fd82-4c9b-aa0f-12383c54d218_300x.jpg?v=1646656226',
            price:9000
        }
    ])
    const [cat, setCategory] = useState({
        id:null,
        name:'',
        parent:'',
        status:0
    })
    useEffect(() => {
        
     
           
    }, [])

    const handleSelectChange=(e)=>{     
        
      
        
    }
    function Sort(slist,value)
    {
      
    }



{/* {items.length==0? <div style={{marginLeft:'auto',marginRight:'auto',marginTop:'200px',fontSize:'22px'}}>
                Sorry! ..Stock is Empty of this Category</div>:
                <> */}

       {/* {
                 spro.map((item) => (
                    <ProductItem item={item} key={item.id} />

                ))} */}          

    return (
        
        <Container>
           
            <Navbar />
{/* 
            <Title>Home</Title> */}
            
            <FilterContainer>
            
            <FilterHome>
                <FilterHomeText>
                    <HomeOutlined/>
                    </FilterHomeText>
                    <FilterHomeText>
                        {">"} Unstiched {">"} Lawn
                    </FilterHomeText>
            </FilterHome>
                {/* <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select onChange={handleSelectChange}>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option value="white">White</Option>
                        <Option value="black">Black</Option>
                        <Option value="red">Red</Option>
                        <Option value="blue">Blue</Option>
                        <Option value="yellow">Yellow</Option>
                        <Option value="green">Green</Option>
                    </Select>
                    <Select onChange={handleSelectChange}>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>xs</Option>
                        <Option>small</Option>
                        <Option>medium</Option>
                        <Option>large</Option>
                        <Option>xl</Option>
                    </Select>
                </Filter>*/}
                
                    <SortText></SortText>
                        <Select>
                        <Option selected>Best Selling</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
               
               

            </FilterContainer>

            <GridArea>
            <LeftBar>
            <Filter>  
            <FilterTitle>FILTER PRODUCTS:</FilterTitle>
            </Filter> 
            <FilterTitle>Price</FilterTitle> 
            <Filter>
              <FilterText>
                  <input type='radio' id='price'/><label for="price">2000-3000</label></FilterText>  
            </Filter>
            <FilterTitle>Delivery</FilterTitle> 
            <Filter>
              <FilterText> <input  type='radio' id='w1'/>
              <label for="w1">1-2 Weeks </label>
              </FilterText>  
              <FilterText>
                  <input type='radio' id='w2'/><label for="w2"> 2-4 Weeks</label>
                  </FilterText>  
            </Filter>
             
            <FilterTitle>Category</FilterTitle> 
            <Filter>
              <FilterText>
                  <input type='radio' id='price'/><label for="price">Unstiched</label></FilterText>  
            </Filter>

            </LeftBar>   
            <Productshow>
              {pro.map(it=>(
                 <ProductItem item={it}/>
              ))

              }         
       
            </Productshow>


            </GridArea>
            

           
        </Container>
       
    );
};

export default Category;






const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const FilterContainer = styled.div`
margin-top:80px;
  display: flex;
  justify-content: space-between;
`;
const GridArea = styled.div`
  display: flex;
  flex-direction:row;
  height:200px;
  
  justify-content: space-between;
`;

const Filter = styled.div`
  //margin: 20px;
  display:flex;
  flex-direction:column;
  
  //height:40px;
  background-color:white;
`;
const FilterHome = styled.div`
  //margin: 20px;
  display:flex;
  flex-direction:row;
  margin-left:30px
  //height:40px;
  
`;
const LeftBar = styled.div`
  margin-left:30px;
  margin-top:40px;
  background-color:whitesmoke;
  width:600px;
  height:500px;
  border-style:groove;
`;

const FilterText = styled.span`
  font-size: 14px;
  padding:20px;
  margin-top: 10px;
  margin-left:20px
`;
const FilterHomeText = styled.span`
  font-size: 14px;
  padding:6px;
  /* padding:20px;
  margin-top: 10px;
  margin-left:20px */
`;
const SortText = styled.span`
  font-size: 14px;
  
  
`;
const FilterTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  padding:20px;
  margin: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
    padding: 20px;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-between;
`;