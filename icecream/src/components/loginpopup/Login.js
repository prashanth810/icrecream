import React, { useContext, useState } from 'react'
import './Login.css'
import axios from 'axios';
import { Foodcontext } from '../context/Foodcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCab, faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = ({ setLogin }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [currentstate, setCurentstate] = useState("Login");

    const { url, setToken } = useContext(Foodcontext);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((data) => ({ ...data, [name]: value }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        let newUrl = url;
        if (currentstate === "Login") {
            newUrl += "/api/user/login";
        }
        else {
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            if (currentstate === "Login") {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user name", response.data.data.name);
                setLogin(false);
            }
            else {
                alert("Register Success 😊😊 , PLease login.");
                setCurentstate("Login");
            }
        }
        else {
            alert(response.data.message);
        }
    }

    return (
        <div className='login-popup'>
            <form className='login-popup-container' onSubmit={handleLogin}>
                <div className='login-popup-title'>
                    <h2 className='text-xl font-semibold'> {currentstate} </h2>
                    <button onClick={() => setLogin(false)}> x </button>
                </div>
                <div className='login-popup-inputs'>

                    {currentstate === "Login" ?
                        <></>
                        :
                        <>
                            <input type='text' name='name' value={data.name} onChange={handlechange} placeholder='name...' />
                        </>
                    }

                    <input type='email' name='email' value={data.email} onChange={handlechange} placeholder='email...' />

                    <input type={showPassword ? "text" : "password"} name='password' value={data.password} onChange={handlechange} placeholder='password..' />

                    <div className='flex gap-x-2 cursor-pointer '>
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={() => setShowPassword((prev) => !prev)} className='mt-1 w-[20px]' />
                        <p> Show Password </p>
                    </div>

                    <div className='login-popup-condition'>
                        <input type='checkbox' required className='checkbox' />
                        <p> By continute to Login !!</p>
                    </div>

                    <button type='submit' > {currentstate === "Sign Up" ? "Createa new account" : "Login"} </button>

                    {currentstate === "Login" ?
                        <p> Create a new accout ? <span onClick={() => setCurentstate("Sign Up")}> click here </span> </p>
                        :
                        <p> Already have an account ? <span onClick={() => setCurentstate("Login")}> Login here </span></p>
                    }
                </div>
            </form>
        </div>
    )
}

export default Login
