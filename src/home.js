import React, { useState } from 'react'
import logo from './image/logo.png'
import cow from './image/cow.jpeg'
import user_icon from './image/user_icon.png'
import cow_vet from './image/cows_vet.jpeg'
import backgroundImage from './image/background_image.jpeg'
import { Button } from 'bootstrap'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from "./firebase"
import { useNavigate } from 'react-router-dom'
const Home = () => {

	const [buttonText, setButtonText] = useState("")
	const navigate = useNavigate()

	onAuthStateChanged(auth, (user) => {
		if (user) {
		  const uid = user.uid;
		  setButtonText("Sign out")
		} else {
		  setButtonText("Sign In")
		}
	  });

	const checkUser = () => {
		if (buttonText === "Sign out") {
			signOut(auth)
			navigate("/SignIn")
		} else {
			navigate("/SignIn")
		}
	}

  return (
    <React.Fragment>
	<header>
		<a href="#" class="logo">
			<img src={logo}/>
		</a>

		<ul class="navbar">
			<li><a href="#">Home</a></li>
			<li><a href="#">Pages</a></li>
			<li><a href="#">Shop</a></li>
			<li><a href="#">Portfolio</a></li>
			<li><a href="#">News</a></li>
			<li><a href="#">Contact</a></li>
		</ul>

		<div class="h-icons">
			<a href="#"><i class='bx bx-shopping-bag'></i></a>
			<a href="#"><i class='bx bx-phone' ></i></a>
			<a href="#"><i class='bx bx-heart' ></i></a>
			<div class="bx bx-menu" id="menu-icon"></div>
		</div>

		<button class="button accept-btn" onClick={checkUser}>
			{buttonText}
		</button>

	</header>

	<section class="home">
		<div class="home-text">
			<h1>Find your own <br/> Happiness</h1>
			<p>Buy your best vet and best cow of you choice on fiama.<br/>Trusted website all around the world.</p>
			<a href="#" class="btn">Meet Specialized vets</a>
		</div>
	</section>

	<section class="banner">
		<div class="banner-img">
			<img src={cow}/>
		</div>

		<div class="banner-img">
			<img src={cow}/>
		</div>

		<div class="banner-img">
			<img src={cow}/>
		</div>

		<div class="banner-img">
			<img src={cow}/>
		</div>

	</section>

	<section class="new product">
		<div class="center-text">
			<h2>new arrival items</h2>
		</div>

		<div class="new-content">
			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

		</div>
	</section>

	<section class="banner">
		<div class="banner-img">
			<img src={cow}/>
		</div>

		<div class="banner-img">
			<img src={cow}/>
		</div>

	</section>

	<section class="new product">
		<div class="center-text">
			<h2>top products</h2>
		</div>

		<div class="new-content">
			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow}/>
				<h4>Australian Cow</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

		</div>
	</section>

    <section class="new product">
		<div class="center-text">
			<h2>vets</h2>
		</div>

		<div class="new-content">
			<div class="row">
				<img src={cow_vet}/>
				<h4>Specialized Vet</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow_vet}/>
				<h4>Specialized Vet</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow_vet}/>
				<h4>Specialized Vet</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

			<div class="row">
				<img src={cow_vet}/>
				<h4>Specialized Vet</h4>
				<h5>$18.00</h5>
				<div class="top">
					<p>hot</p>
				</div>
				<div class="bbtn">
					<a href="#">Add to cart</a>
				</div>
			</div>

		</div>
	</section>

	<section class="contact">
		<div class="contact-box">
			<h4>MY ACCOUNT</h4>
			<li><a href="#">My account</a></li>
			<li><a href="#">Checkout</a></li>
			<li><a href="#">Contact Us</a></li>
			<li><a href="#">Shopping Cart</a></li>
			<li><a href="#">WishList</a></li>
		</div>

		<div class="contact-box">
			<h4>QUICK LINKS</h4>
			<li><a href="#">Store Location</a></li>
			<li><a href="#">Orders Tracking</a></li>
			<li><a href="#">Size Guide</a></li>
			<li><a href="#">My account</a></li>
			<li><a href="#">FAQs</a></li>
		</div>

		<div class="contact-box">
			<h4>INFORMATION</h4>
			<li><a href="#">Privacy Page</a></li>
			<li><a href="#">About us</a></li>
			<li><a href="#">Careers</a></li>
			<li><a href="#">Delivery Inforamtion</a></li>
			<li><a href="#">Term & Conditions</a></li>
		</div>

		<div class="contact-box">
			<h4>CUSTOMER SERVICE</h4>
			<li><a href="#">Shipping Policy</a></li>
			<li><a href="#">Help & Contact Us</a></li>
			<li><a href="#">Returns & Refunds</a></li>
			<li><a href="#">Online Stores</a></li>
			<li><a href="#">Terms and Conditions</a></li>
		</div>

		<div class="contact-box">
			<h4>fiama</h4>
			<h5>Connect with us</h5>
			<div class="social">
				<a href="#"><i class='bx bxl-facebook' ></i></a>
				<a href="#"><i class='bx bxl-instagram-alt' ></i></a>
				<a href="#"><i class='bx bxl-twitter' ></i></a>
			</div>
		</div>

	</section>

	<a href="#" class="scroll-top"><i class='bx bx-chevrons-up' ></i></a>

	<div class="end-text">
		<p>© late 2022 Tahmid Ahmed. All Rights Reserved.</p>
	</div>

    </React.Fragment>
  )
}

export default Home
