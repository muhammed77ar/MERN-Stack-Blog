import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { StyleSignup } from "./StyledSignup";
import { useRef } from "react";
import axios from "axios"
import Swal from 'sweetalert2';

export default function Signup() {

    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            username : usernameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value,
            confirmPassword : confirmPasswordRef.current.value
        }
        try{
            const response = await axios.post(`${import.meta.env.VITE_AUTH_SERVICE}/register`, payload, {
                Headers : {
                    "Content-Type": "application/json"
                }
            })
            if (response.status === 201) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Signup successful! Redirecting to login...',
                    showConfirmButton: false,
                    timer: 2000, // 2 seconds
                    willClose: () => {
                        navigate('/login'); // Redirect to the login page
                    }
                });
            }else {
                console.error("Signup failed:", response.statusText);

            }
        }catch (error){
            if (error.response && error.response.data) {
                const errorData = error.response.data;
                if (errorData.error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Signup failed',
                        text: errorData.error,
                    });
                } else if (errorData.errors) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Signup failed',
                        html: `
                            <style>
                                .swal2-html-container ul {
                                    list-style-type: none;
                                    padding: 0;
                                    margin: 0;
                                    color: #f27474;
                                }
                                .swal2-html-container li {
                                    margin-bottom: 10px;
                                    padding: 5px 10px;
                                    border-radius: 5px;
                                    background: #fee2e2;
                                }
                            </style>
                            <ul>${errorData.errors.map(err => `<li>${err}</li>`).join('')}</ul>
                        `,
                    });
                }
            } else {
                console.error("Network error:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Network error',
                    text: 'Please try again later.',
                });
            }
        }
    }

    return (
        <>
            <Navbar />
            <StyleSignup>
                <div className="container">
                    <div className="left">
                    </div>
                    <div className="right">
                        <form action="" onSubmit={handelSubmit}>
                            <div className="title">
                            <h2>Sign Up</h2>
                            <span>Welcome, create a new account</span>
                            </div>
                           
                                <label htmlFor="">Username</label>
                                <input type="text" ref={usernameRef} name="username" id="username" />

                                <label htmlFor="">Email</label>
                                <input type="text" name="email" ref={emailRef} id="email" />
                        
                                <label htmlFor="">Password</label>
                                <input type="password" name="password" ref={passwordRef} id="password" />
                                <label htmlFor="">Confirm Password</label>
                                <input type="password" name="confirmPassword" ref={confirmPasswordRef} id="confirmPassword" />
                           
                            <button type="submit">Submit</button>
                            <span>Do you have an account? <Link to={"/login"}>Login</Link></span>
                        </form>
                    </div>
                </div>
            </StyleSignup>
        </>
    )
}
