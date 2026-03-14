import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const LoginForm = ({ HandleLoginSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const HandleSubmit = async (event) => {
        event.preventDefault();

        if(!email || !password){
            alert("Please fill all the required")
        }
        else {
            try {
                HandleLoginSubmit(email, password)
            } catch (error) {
                alert(`Sign up failed: ${error.message}`);
            }
        }
    };

    return (
        <form>
            <div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email:</label>
                    <input type="email" className="form-control" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Password:</label>
                    <input type="password" className="form-control" id="password" value={password} title="Make sure your password contains one number, one uppercase letter, one lowercase letter and be at least of 8 characters"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-dark' onClick={HandleSubmit}>Sign in</button>
                <hr className='mb-3 mt-3' />
                <p>Click on Sign up if you are not registered with us</p>
                <NavLink className=" btn btn-secondary w-4" to="/signup">
                    Sign up
                </NavLink>
            </div>
        </form>
    )
}

export default LoginForm