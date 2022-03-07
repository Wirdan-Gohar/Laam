//import  { useEffect, useState } from 'react'
//import { useSelector } from 'react-redux';

import { Search, ShoppingCartOutlined ,LocalShippingOutlined} from '@material-ui/icons';

import { Avatar, Badge } from '@material-ui/core';
import router, { useRouter } from 'next/router'
import Link from 'next/link'
import  nav from '../styles/navbar.module.css'
//import jwt_decode from "jwt-decode";




const Navbar = () => {
    //const { cartItems } = useSelector(state => state.cart);


    // const [loggedIn, setloggedIn] = useState('');
    // const [user, setUser] = useState({
    //     first_name:''
    // });

    const removeToken = () => {
    //    console.log('hry')
    //    localStorage.removeItem('token')
    //     router.push('/home')
    }
    // useEffect(() => {
    //     if(localStorage.getItem('token'))
    //     {
    //     setloggedIn(localStorage.getItem('token'))
    //    var decoded = jwt_decode(localStorage.getItem('token'));
    //    setUser(decoded.result)
    //     }
    //     else{
    //         setloggedIn('')
    //     }
    // },[])
    return (
        <div className={nav.Container}>
            <div className={nav.Wrapper}>
            
                <div className={nav.Left}>
                <hr/>
                    <div className={nav.MeniItems}><div className={nav.StyledLink} href="/">
                        <p className={nav.Logo}>Pernia.</p>
                       
                    </div> 
                    </div>

                    {/* <div className={nav.SearchContainer}>
                        <input type='text' placeholder="Search Product" />
                        <div className={nav.Search} style={{ color: "gray", fontSize: 18 }} />
                    </div> */}
                </div>


                {/* <div className={nav.Center}>
                    <div className={nav.MeniItems}><div className={nav.StyledLink}
                     href="/" style={{ textDecoration: 'none'}}><p style={{color:'white',fontSize:'18px'}}>Home</p>
                     </div> </div>
                    <div className={nav.MeniItems}><div className={nav.StyledLink} href="/Products" style={{ textDecoration: 'none'}}><p style={{color:'white',fontSize:'18px'}}>Products</p></div></div>
                    <div className={nav.MeniItems}><div className={nav.StyledLink} href="/blog" style={{ textDecoration: 'none' }}><p style={{color:'white',fontSize:'18px'}}>Blog</p></div></div>
                    <div className={nav.MeniItems}><div className={nav.StyledLink} href="/about" style={{ textDecoration: 'none' }}><p style={{color:'white',fontSize:'18px'}}>About</p></div></div>
                    <div className={nav.MeniItems}><div className={nav.StyledLink} href="/contact-us" style={{ textDecoration: 'none' }}><p style={{color:'white',fontSize:'18px'}}>Contact Us</p></div></div>
                </div> */}


                <div className={nav.Right}>
                {/* alt={user.first_name} */}
                    {/* {loggedIn? */}
                      
                    < div className={nav.Link} href="/cart">
                        <div className={nav.StyledLink}>
                     <div className={nav.icons}>
                        <div className={nav.SearchContainer}>
                        <input type='text' placeholder="Search Product" />
                        <div className={nav.Search} style={{ color: "gray", fontSize: 18 }} />
                        </div>
                        <LocalShippingOutlined  color="action" style={{cursor:'pointer',color:'black',fontSize:'38px',marginRight:'20px'}}/>
                        <Badge  color="primary" >
                        <ShoppingCartOutlined color="action" style={{cursor:'pointer',color:'black',fontSize:'38px',marginRight:'20px'}} />
                         </Badge>
                            </div>
                            {/* {cartItems.length > -1 &&
                                <>
                                    <Badge badgeContent={cartItems.length} color="primary" >
                                        <ShoppingCartOutlined color="action" style={{cursor:'pointer',color:'white'}} />
                                    </Badge>
                                </>
                            } */}

                        </div>
                        </div>


                             <div className={nav.NavbarDropdown} >
                                 <div className={nav.MeniItems}><Avatar alt={'A'} src="/static/images/avatar/1.jpg" />
                                 </div>
                            <div className={nav.NavbarDropdownContent} className="my__unique__button__class-asdf123">
                                {/* <div className={nav.Link} href='userProfile/profile' >
                                     <div className={nav.MeniItems}>Account</div></div> */}
                                     <br />
                                {/* <div className={nav.MeniItems} onClick={removeToken}>LogOut</div><br /> */}
                            </div>
                        </div>
                       
                        <>
                        {/* <div className={nav.MeniItems}> <div className={nav.StyledLink} href="/account/register"> Register </div></div>
                        <div className={nav.MeniItems}> <div className={nav.StyledLink} href="/account/login"> Login </div></div> */}
                        </>
{/* } */}

                  


                </div>
                
            </div>
            <hr/>
          <div className={nav.Wrapper}>
        
           <ui className={nav.ui}>
               <li>SALE</li>
               <li>NEWIN</li>
               <li>READY TO SHIP</li>
               <li>UNSTITCHED</li>
               <li>BRANDS</li>
               <li>PRET</li>
               <li>LUXURY PRET</li>
               <li>WEDDINGS</li>
               <li>KIDS WEAR</li>
               <li>MEN</li>
               <li>ACCESSORIES</li>
               

           </ui>

          
          </div>
          <hr/>

        </div>

    )
}


export default Navbar




// const Container = styled.div`
// background-color:#333333;
//                 height: 80px;
//                 ${mobile({ height: "50px" })}

//                 `;

// const Wrapper = styled.div`
//                 padding: 10px 20px;
//                 display: flex;
//                 justify-content: space-between;
//                 align-items: center;
//                 ${mobile({ padding: "10px 0px" })}

//                 `;

// const Left = styled.div`
//                 flex: 1;
//                 display: flex;
//                 align-items : center;
//                 padding-right: 100px;

//                 `;
// const Logo = styled.div`
// color:white;
//                 font-weight: bold;
//                 font-size: xx-large;
//                 ${mobile({ fontSize: "20px" })}

//                 `;

// const SearchContainer = styled.div`
//                 border: 0.5px solid lightgray;

//                 display: flex;
//                 align-items: center;
//                 margin-left: 15px;
//                 `;

// const Input = styled.input`
//                 border: none;
//                 ${mobile({ width: "50px" })}

//                 `;



// const Center = styled.div`
//                 flex: 1;
//                 text-align: center;
//                 display: flex;
//                 align-items : center;
                
//                 justify-content: space-between;
//                 `;

// const Right = styled.div`
//                 flex: 1;
//                 display: flex;
//                 align-items : center;
//                 justify-content: flex-end;

//                 `;


// const MeniItems = styled.div`
// transition: all .5s ease;
//    color: #000000;
//    text-align: center;
//    cursor:pointer;
//    line-height: 1;
//    font-size: 14px;
//    background-color : transparent;
//    padding-left:10px;
//    padding-right:10px;
//    padding-top:5px;
//    padding-bottom:5px;
//    outline: none;
//    border-radius: 50px;
   
//    &:hover {
//    color: #ffffff;
//    background-color: #c9c9c9;
  
  
// }
//                 `;


// const StyledLink = styled(Link)`

// text-decoration: none;
//                 color: white !important;
              
//                 `;




// const NavbarDropdown = styled.div`
//                 position: relative;
//                 /* display: inline-block; */
//                 &:hover .my__unique__button__class-asdf123 {
//                     display: block;
//   }
//                 `;
// const NavbarDropdownContent = styled.div`
// margin-top: 0px;
//                 display: none;
//                 position: absolute;
//                 background-color: #f3f3f3;
//                 min-width: 100px;
//                 box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
                
//                 z-index: 1;
//                 `;

