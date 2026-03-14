
import React from "react";

const ContactUs = () => {
  
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6">
        <h2 className="text-secondary mb-4 mt-2">Share Your Valuable Feedback</h2>
          <form className="w-75 justify-content-center">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="feedback" className="form-label">
                Your Feedback
              </label>
              <textarea className="form-control" id="feedback" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-25 ">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.704255933172!2d77.64304591443818!3d12.972179190859053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14d5c5a211d5%3A0x1fb5bb33fc03a025!2sCubbon%20Park%2C%20Kasturba%20Road%2C%20Ambedkar%20Veedhi%2C%20Sampangi%20Rama%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e0!3m2!1sen!2sin!4v1619984995535!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

