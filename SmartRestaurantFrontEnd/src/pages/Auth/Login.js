import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm';
import './styleauth.css'

const Login = ({HandleLoginSubmit}) => {
  return (
    <div className='container form-style'>
        <h2 className='pb-3 pt-4'>Login Form</h2>
        <LoginForm HandleLoginSubmit={HandleLoginSubmit}/>
    </div>
  )
}

export default Login