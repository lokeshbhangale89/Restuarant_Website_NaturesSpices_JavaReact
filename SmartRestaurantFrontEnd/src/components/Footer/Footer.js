
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white">

        <section className='container row m-auto pt-4 d-flex justify-content-center'>
          <div className="col-sm-6 m-auto text-center">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className='col-sm-6 justify-content-end text-center'>
            <a href="www.facebook.com" className="text-white me-4">
              <FaFacebook size={25} />
            </a>
            <a href="www.twitter.com" className="text-white me-4">
              <FaTwitter size={25} />
            </a>
            <a href="www.google.com" className="text-white me-4">
              <FaGoogle size={25} />
            </a>
            <a href="www.instagram.com" className="text-white me-4">
              <FaInstagram size={25} />
            </a>
            <a href="www.linkedin.com" className="text-white me-4">
              <FaLinkedin size={25} />
            </a>

          </div>
          <hr className="mb-1 mt-3 " />
        </section>

        <div className="container py-3">
          <div className="row">
            <div className="col-md-4 text-center">
              <h5 className="fw-bold pt-3">Links</h5>
              <hr className="mb-3 mt-3 " />

              <ul className="list-unstyled my-auto">
                <li>              
                <NavLink className="nav-link" exact ="true" to="/">
                  <p>Home</p>
                </NavLink>
                </li>
                <li>              
                <NavLink className="nav-link" exact ="true" to="/login">
                  <p>Login</p>
                </NavLink>
                </li>
                <li>              
                <NavLink className="nav-link" exact ="true" to="/menu">
                  <p>Menu Card</p>
                </NavLink>
                </li>
                <li>              
                <NavLink className="nav-link" exact ="true" to="/fooditems">
                  FoodItems
                </NavLink>
                </li>
              </ul>

            </div>
            <div className="col-md-4 text-center">
              <h5 className="fw-bold pt-3">Opening Hours</h5>
              <hr className="mb-3 mt-3  " />
              <p> Monday - Friday: 9am - 5pm</p>
              <p> Saturday: 9am - 12pm</p>
              <p> Sunday: 9am - 12pm</p>
            </div>
            <div className="col-md-4 text-center">
              <h5 className=" fw-bold pt-3">Contact</h5>
              <hr className="mb-3 mt-3 " />
              <p> Grand Highstreet, 411057, India</p>
              <p> naturespices@gmail.com</p>
              <p> + 91 9158920423</p>
              <p> + 91 9307719877</p>
            </div>
          </div>
        </div>

      </footer >
    </div>
  )
}

export default Footer;
