import styled from 'styled-components';
import Sidebar from './Sidebar';
// import Footer from "../components/Footer";
import { useEffect, useState } from 'react';
import React, { memo } from 'react';
import jwt_decode from 'jwt-decode';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  DeleteOutline,
  Edit,
  EmailOutlined,
  Phone,
  LocationCity,
  SettingsInputSvideoRounded,
} from '@material-ui/icons';
import {
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCollapse,
} from 'reactstrap';
import Head from 'next/head';

import { List } from '@material-ui/core';
import Newsletter from '../../components/foot/Newsletter';
import Footer from '../../components/foot/Footer';
import Navbar2 from '../../components/Navbar';

const Order = () => {
  const [radio, setRadiobtn] = useState({
    selected: '',
  });
  const [user_id, setUserId] = useState(null);
  const [order, setOrder] = useState([
    {
      id: null,
    },
  ]);
  const [s_id, setSId] = useState(null);
  const [editshipdiv, setEditShipDiv] = useState(false);
  const data = [
    {
      id: 313,
    },
    {
      id: 314,
    },
    {
      id: 315,
    },
    {
      id: 316,
    },
    {
      id: 317,
    },
  ];

  useEffect(() => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    let mounted = true;
    var decoded = jwt_decode(localStorage.getItem('token'));
    console.log('decoded', decoded);
    setUserId(decoded.result.id);
    axios
      .get(
        `http://localhost:8080/ecom-api/orders/user/${decoded.result.id}`,
        config
      )
      .then(response => {
        console.log('orders', response.data.data);
        let list = [];
        response.data.data.map((ord, j) => {
          let date = '';
          const d = new Date(ord.date);
          let dd = d.toString();
          for (let i = 0; i < 15; i++) date = date + dd[i];
          ord.date = date;
          list.push(ord);
        });

        setOrder(list);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Navbar2 />
      <Container>
        <Sidebar />
        <Address>Orders</Address>
        {order.map(item => (
          <UserDiv key={item.id}>
            <ImgCon>
              <h3 style={{ marginTop: '-10px' }}>Order {item.id}</h3>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p
                  style={{
                    marginLeft: '80px',
                    backgroundColor: 'red',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                  }}
                ></p>
                <small
                  style={{
                    color: 'black',
                    marginLeft: '10px',
                    fontSize: '14px',
                    marginTop: '12px',
                  }}
                >
                  {' '}
                  Shipped {item.date}
                </small>
              </div>
              <ImageArea>
                <Image
                  src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAo
       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'
                />
              </ImageArea>
            </ImgCon>
            <Link href='/order/[id]' as={`/order/${item.id}`}>
              <P>VIEW ORDER ={'>'}</P>
            </Link>
          </UserDiv>
        ))}
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Order;

const Container = styled.div``;
const Details = styled.div``;
const Address = styled.div`
  margin-left: 600px;
  margin-top: 100px;
  font-size: 24px;
  font-weight: bold;
`;
const ImgCon = styled.div`
  /* margin-top: 30px;
  background-color: #f0f0f0ef;
  height: 46vh;
  position: fixed;
  width: 240px;
  border: 1px solid red; */
  display: flex;
  flex-direction: row;
  //align-content:space-between ;
  //margin: auto;
`;
const Image = styled.img`
  height: 80px;
  /* margin-top: -20px; */
  margin-left: 80px;
  margin-right: -20px;
  background-color: grey;
`;
const P = styled.p`
  color: green;
  margin-top: -30px;
  cursor: pointer;
  font-size: 14px;
`;
const ImageArea = styled.div`
  height: 85px;
  width: 150px;
  background-color: #f1ebebf6;
  margin-left: auto;
  margin-right: -10px;
  margin-top: -20px;
`;
const Input = styled.input`
  width: 160px;
  height: 20px;
  padding: 5px;
  text-align: center;
  border-style: 1px grey;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Form = styled.form`
  padding: 20px;
  /* display: flex;
  flex-wrap: wrap; */
  // background-color: red;
  /* flex-direction: column; */
  margin-top: -20px;
  margin-left: -20px;
  width: 150px;
  /* -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); */
  /* margin-left: 40px; */
`;

const UserDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-style: groove;
  border-width: 1px;
  border-color: gray;
  width: 600px;
  //height:6vh;
  //flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;

  margin-left: 600px;
`;
const ShippingData = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 150px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 40px;
`;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
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
