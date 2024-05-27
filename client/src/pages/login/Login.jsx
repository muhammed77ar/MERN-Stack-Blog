import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { StyleLogin } from "./StyledLogin";
import { useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/loginSlice";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [errors, setError] = useState("")
    const navigate = useNavigate()

    const handelSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            email : emailRef.current.value,
            password : passwordRef.current.value,
        }
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post("http://localhost:4000/login", payload, {
                Headers : {
                    "Content-Type": "application/json"
                }
            })
            if (response && response.data && response.status === 200) {
                localStorage.setItem("ACCESS_TOKEN", "main")
                // localStorage.setItem("USER", JSON.stringify(response.data))
                // dispatch(login(response.data))

                console.log(response)
                navigate("/auth/home")
                
            } 
            
        } catch (error) {
            if (error.response && error.response.data && error.response.status === 400) {
                setError(error.response.data);
            } else {
                console.error("Network error:", error);
            }
        }

    }

    console.log(errors)

    return (
        <>
            <Navbar />
            <StyleLogin>
                <div className="container">
                    <div className="left">
                    </div>
                    <div className="right">
                        <form action="" onSubmit={handelSubmit}>
                            <div className="title"> 
                            <h2>Login</h2>
                            <span>Welcome back login to your account</span>
                            </div>
                            {errors && <span style={{backgroundColor:"red", color:"white", padding:"10px", borderRadius:"10px", width:"79%", marginBottom:"20px"}}>{errors}</span>}
                                <label htmlFor="">Email</label>
                                <input type="text" name="email" ref={emailRef} id="email" />
                                <label htmlFor="">Password</label>
                                <input type="password" name="password" ref={passwordRef} id="password" />
                            <button type="submit">Submit</button>
                            <span>Don't have an account? <Link to={"/signup"}>Sign up</Link></span>
                        </form>
                    </div>
                </div>
            </StyleLogin>
        </>
    )
}
