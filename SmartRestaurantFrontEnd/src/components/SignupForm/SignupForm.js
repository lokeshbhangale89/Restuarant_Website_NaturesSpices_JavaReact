import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignupForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        // console.log(username)
        event.preventDefault();
        let mailformat = /^\S+@\S+\.\S+$/;
        let passwordformat = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*?]).{8,16}$/;

        if (!name || !email || !password) {
            alert("Please fill all the required fields");
        }
        
        else if(!mailformat.test(email)){
            alert("Invalid Email Id")
        }
        // let passwordformat = /^(?=.*[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

        else if(!passwordformat.test(password)){
            alert(`Your Password Must be 
            
            at least 8 characters
            at least 1 numeric character
            at least 1 lowercase letter
            at least 1 uppercase letter
            at least 1 special character`)
        }
        
        else {
            try {
                await axios.post('http://localhost:4000/user/auth/register', { name, email, password });
                alert('Sign up successful');
                navigate('/login')
            } catch (error) {
                alert(`Sign up failed: ${error.message}`);
            }
        }
    };

    return (
        <form >
            <div >
                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>Name:</label>
                    <input type="text" className="form-control" id="username" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email:</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Password:</label>
                    <input type="password" className="form-control" id="password" value={password} title="Make sure your password contains one number, one uppercase letter, one lowercase letter and be at least of 8 characters"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-dark' onClick={handleSubmit}>Sign Up</button>
                <hr className='mb-3 mt-3' />
                <p>Click on signin if you are registered with us</p>
                <NavLink className=" btn btn-secondary w-4" exact='true' to="/login">
                    Sign In
                </NavLink>
            </div>
        </form>
    )
}

export default SignupForm;