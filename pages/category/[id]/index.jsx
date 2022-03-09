import styled from "styled-components";
//import Announcement from "../../../components/Announcement";
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/footer/Footer";
import { useEffect, useState } from 'react';
//import axios from "axios";
//import ProductItem from "../../../components/ProductItem";

import { useRouter } from 'next/router'

const Category = () => {
    const router = useRouter();
    const { id } = router.query;
    const [items, setItems] = useState([])
    const [spro, setSizeProduct] = useState([])
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

            <Title>Home</Title>
            
            <FilterContainer>
            
            
                <Filter>
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
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
               

            </FilterContainer>
            <Productshow>
                
       
            </Productshow>

            <Footer />
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
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;