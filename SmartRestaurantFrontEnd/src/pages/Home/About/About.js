import React from 'react'
import aboutimg from "../../../assets/about.jpg";
import './About.css';

const About = () => {
    return (
        <section className="bg-light" id='about'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className='mb-4'>Why Choose Us?</h2>
                        <h4 className='mb-4'>What's Makes Our Food Delicious!</h4>
                        <p className="mb-4">
                        Enjoy delicious food, beautiful setting surrounded by greenery, where our friendly service and warm atmosphere make every meal special. Whether you're here for a family gathering, a romantic dinner, or a casual outing, we promise an experience that delights all your senses.
                        </p>
                        <p className="mb-4">
                            Delicious Food, Cozy Ambiance, Friendly Service, And Beautiful Garden View. Choose Us For An Unforgettable Dining Experience.
                        </p>

                        <h4 className="mb-5">Location: Grand Highstreet, Hinjewadi, Pune - 411057</h4>

                        <div className="container mb-4">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                <div className="col">
                                    <div className="p-2 bg-light text-center">
                                        <h5 className="mb-0">Fast Delivery</h5>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-2 bg-light text-center">
                                        <h5 className="mb-0">Fresh Food</h5>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-2 bg-light text-center">
                                        <h5 className="mb-0">Best Quality</h5>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-1 bg-light text-center">
                                        <h5 className="mb-0">24/7 Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="#menu" className="btn btn-outline-dark d-grid justify-content-center mb-4 m-auto ">
                            Read More
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <img src={aboutimg} alt="About Us" className="img-fluid rounded" />
                    </div>
                </div>
            </div>

            <div className='container our-data mb-5'>
                <h2 className='mt-5 mb-5 text-center'>Our Restaurant Has</h2>
                <div className='grid-container'>
                    <div>
                        <h1>17</h1>
                        <p>years of experience</p>
                    </div>

                    <div>
                        <h1>34</h1>
                        <p>Team Members</p>
                    </div>

                    <div>
                        <h1>13000</h1>
                        <p>Customers served</p>
                    </div>

                    <div>
                        <h1>60</h1>
                        <p>Dishes</p>
                    </div>

                    <div>
                        <h1>350+</h1>
                        <p>wines</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About