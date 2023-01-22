import website_icon from './image/website_icon.png'
import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { auth } from "./firebase"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
	const navigate = useNavigate()

    const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    }

	const navigateToSignIn = () => {
		navigate("/SignIn")
	}

	// 03185045271

  return (
    <React.Fragment>
           <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={website_icon} alt="IMG"/>
				</div>

				<form onSubmit={signUp} class="login100-form validate-form">

  

					<span class="login100-form-title">
						Sign Up
					</span>
                    
                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input onChange={(e) => setName(e.target.value)} value={name} class="input100" type="text" name="name" placeholder="Name"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} class="input100" type="text" name="phone" placeholder="Phone number"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input onChange={(e) => setEmail(e.target.value)} value={email} class="input100" type="text" name="email" placeholder="Email"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input onChange={(e) => setPassword(e.target.value)} value={password} class="input100" type="password" name="pass" placeholder="Password"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>

					<div class="container-login100-form-btn">
						<button type="submit" class="login100-form-btn">
							SIGN UP
						</button>
					</div>

					<div class="container-login100-form-btn">
						<button onClick={navigateToSignIn} class="login100-form-btn">
							GO BACk
						</button>
					</div>

					{/* <div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div class="text-center p-t-136">
						<a class="txt2" href="#">
							Create your Account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div> */}

				</form>
			</div>
		</div>
	</div>
        </React.Fragment>
  )
}

export default SignUp
