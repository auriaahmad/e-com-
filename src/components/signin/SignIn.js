import "./SignIn.css";
import googleIcone from "./assets/google.svg"
import { useState } from "react";
import { Link } from "react-router-dom";
function SignIn() {
    const [formData, setFormData] = useState({
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
        console.log('Form data submitted:', formData);
        // You can send the form data to your server or perform other actions here.
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
                    <div className="form_heading_signin">Sign In your account</div>
                    {/* <div className="trial">Let’s get started with your 30 days free trial</div> */}
                    <form onSubmit={handleSubmit}>
                        {/* <div className="name_input">
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
                        </div> */}


                        <div className="email_input_signin">
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
                        <div className="password_input_signin">
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

                        <button id="signin_btn" type="submit">Sign In</button>

                    </form>

                    <button id="signIn_with_google" type="submit">
                        <img id="google_icon" src={googleIcone} alt="google.svg" />
                        Sign In with Google
                    </button>
                    <span>
                        <div className="dont_have_acc">
                            Don't have an account?
                            <Link to="/signup" className="anchor_signUp">
                                Sign Up
                            </Link>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SignIn;