import React from "react";

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (

	<Box>
	<Container>
		<Row>
		<Column style={{marginTop:'20px', marginLeft:'20px'}}>
			{/* <Heading>About Us</Heading> */}
			<FooterLink href="#">Become a Partner</FooterLink>
			<FooterLink href="#">Editorial Blog</FooterLink>
			<FooterLink href="#">Pernia Rewards</FooterLink>
			<FooterLink href="#">Pernia Disclaimers</FooterLink>
		</Column>
		<Column>
			<Heading>Help center</Heading>
			<FooterLink href="#">Track your Order</FooterLink>
			<FooterLink href="#">Shipping and Delivery</FooterLink>
			<FooterLink href="#">Cancellations</FooterLink>
			<FooterLink href="#">FAQs</FooterLink>
			<FooterLink href="#">Returns</FooterLink>
			<FooterLink href="#">Refund Policy</FooterLink>
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
			<FooterLink href="#">Sell at Pernia</FooterLink>
			<FooterLink href="#">Connect with us</FooterLink>
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
