import website_icon from './image/website_icon.png'
import { signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { auth } from "./firebase"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
	const navigate = useNavigate()
    
    const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    	// Signed in 
    	const user = userCredential.user;
    	// ...
    }).catch((error) => {
    	const errorCode = error.code;
    	const errorMessage = error.message;
    });

    };

	const navigateToSignUp = () => {
		navigate("/SignUp")
	}

  return (
    <React.Fragment>
           <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={website_icon} alt="IMG"/>
				</div>

				<form onSubmit={signIn} class="login100-form validate-form">
					<span class="login100-form-title">
						Sign In
					</span>

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
							SIGN IN
						</button>
					</div>

					<div class="container-login100-form-btn">
						<button onClick={navigateToSignUp} class="login100-form-btn">
							SIGN UP
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
        </React.Fragment>
  )
}

export default SignIn
