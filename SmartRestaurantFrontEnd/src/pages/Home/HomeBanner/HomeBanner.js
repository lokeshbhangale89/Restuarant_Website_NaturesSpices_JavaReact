import React from 'react'
import './Homebanner.css'

const HomeBanner = () => {
  return (
    <div className='banner-img'>
        <div className='text-container'>
            <h1 className='text-light mb-4'>
                <span>Welcome</span> to Restaurant
            </h1>
            <p className='text-light'>The Best Restaurant Available in Hinjewadi, Pune</p>
            <p className='text-light btn btn-secondary'>
                Book online or call <span className='special-word'>(555)123-4567</span>
            </p>
        </div>
    </div>
  )
}

export default HomeBanner
