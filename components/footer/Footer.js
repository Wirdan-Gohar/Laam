import React from "react";

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import Link from "next/link";
import styled from "styled-components";
const Footer = () => {
return (

	<Box>
	<Container>
		<Row>
		<Column style={{marginTop:'20px', marginLeft:'20px'}}>
			{/* <Heading>About Us</Heading> */}
			
			<FootLink ><Link href='/SellAt' as={`/SellAt`}>Become a Partner</Link></FootLink>
			<FootLink > <Link href='/Blog' as={`/Blog`}>Editorial Blog</Link></FootLink>
			<FootLink > <Link href='/Rewards' as={`/Rewards`}>Pernia Rewards</Link></FootLink>
			<FootLink > <Link href='/Rewards' as={`/Rewards`}>Pernia Disclaimers</Link></FootLink>
		</Column>
		<Column>
			<Heading>Help center</Heading>
			<FootLink ><Link href='/Track' as={`/Track`}>Track your Order</Link></FootLink>
			<FootLink ><Link href='/ShipAndDlv' as={`/ShipAndDlv`}>Shipping and Delivery</Link></FootLink>
			<FootLink ><Link href='/Cancellation' as={`/Cancellation`}>Cancellations</Link></FootLink>
			<FootLink >FAQs</FootLink>
			<FootLink><Link href='/Exchange' as={`/Exchange`}>Returns</Link></FootLink>
			<FootLink><Link href='/Refund' as={`/Refund`}>Refund Policy</Link></FootLink>
		</Column>
		<Column>
			{/* <Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink> */}

			<Heading>Contact Us</Heading>
			<FooterLink href="#">Whatsapp: +090078601</FooterLink>
			<FooterLink href="#">Email: customercare@pernia.pk</FooterLink>
			
			<Heading>Partner with Pernia</Heading>
			<FootLink ><Link href='/SellAt' as={`/SellAt`}>Sell at Pernia</Link></FootLink>
			<FootLink><Link href='/Connect_With_Us' as={`/Connect_With_Us`} >Connect with us</Link></FootLink>
		</Column>
		<Column>
			{/* <Heading>Social Media</Heading> */}
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<img src="./fb.svg" alt="" style={{ width: "30px",marginLeft:'20px' }} />
				<img src="./you.svg" alt="" style={{ width: "30px",marginLeft:'20px' }} />
				<img src="./insta.svg" alt="" style={{ width: "30px" ,marginLeft:'20px'}} />
				</span>
			</i>
			</FooterLink>
			
		</Column>
		</Row>
	</Container>
	
	<div style={{borderTop:'1px solid white',
				backgroundColor:'black',
				paddingBottom: "10px",
				marginBottom:'-18px',
				paddingTop: "10px"}}>
	<span style={{ color: "white",
				textAlign: "left",
				paddingBottom: "10px",
				marginLeft:'20px',
				paddingTop: "10px", }}>
		©️ 2022 Pernia Technologies. All Rights Reserved.
	</span>
	<span style={{ color: "white",
				float:'right',
				marginRight:'20px' }}>
		Term of Sale Terms | Conditions Privacy | Cookie Disclaimers

	</span>
	</div>
	</Box>
	
);
};
export default Footer;
const FootLink=styled.div`
 text-decoration:none;
 color:white;
`


