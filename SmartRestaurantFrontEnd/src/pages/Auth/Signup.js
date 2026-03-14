import React from 'react'
import SignupForm from '../../components/SignupForm/SignupForm';
import './styleauth.css'

const Signup = () => {
  return (
    <div className='container form-style'>
        <h2 className='pb-4 pt-4'>Signup Form</h2>
        <SignupForm />
    </div> 
  )
}

export default Signup