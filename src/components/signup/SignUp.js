import "./SignUp.css";
import googleIcone from "./assets/google.svg"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form data submitted:', formData);
        axios
            .post('http://localhost:5000/api/signup', formData)
            .then((response) => {
                alert(response.data.message)                
            })
            .catch((error) => {
                console.error(error);
                alert(error)                
            });
    };
    return (
        <div className="canvas">
            <div className="left">
                <div className="content_left">
                    <div className="companyLogo">abc.com</div>
                    <div className="snippet">abc.com is the best place to find remote talent. We’ve been super impress by the quality of applicants.   </div>
                    <div className="name">Madhushan sasanka</div>
                    <div className="position">
                        CEO, abc.com
                    </div>
                </div>
            </div>


            <div className="right">
                <div className="content_right">
                    <div className="form_heading">Create an account</div>
                    <div className="trial">Let’s get started with your 30 days free trial</div>
                    <form onSubmit={handleSubmit}>
                        <div className="name_input">
                            <label htmlFor="name">Name</label>
                            <input placeholder="Enter Your Name"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <hr />
                        </div>


                        <div className="email_input">
                            <label htmlFor="email">Email</label>
                            <input
                                placeholder="abc@example.com"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <hr />
                        </div>
                        <div className="password_input">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <hr />
                        </div>

                        <button id="create_account_btn" type="submit">Create Account</button>

                    </form>

                    <button id="signup_with_google" type="submit">
                        <img id="google_icon" src={googleIcone} alt="google.svg" />
                        Sign up with Google
                    </button>

                    <div className="already_account">
                        Already have an account?
                        <Link to="/signin" className="anchor_signIn">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;