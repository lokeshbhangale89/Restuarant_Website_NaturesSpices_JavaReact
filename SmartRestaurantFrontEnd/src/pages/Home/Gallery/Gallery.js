import React from "react";
import imageItem1 from "../../../assets/Gallary/cheese.jpg";
import imageItem2 from "../../../assets/Gallary/pasta.jpeg";
import imageItem3 from "../../../assets/Gallary/pizza.jpeg";
import imageItem4 from "../../../assets/Gallary/coffee-items.jpg";
import imageItem5 from "../../../assets/Gallary/wine.jpeg";
import imageItem6 from "../../../assets/Gallary/pasta.jpg";
import imageItem7 from "../../../assets/Gallary/chef.jpg";
import imageItem8 from "../../../assets/Gallary/cake.jpg";
import imageItem9 from "../../../assets/Gallary/coffee.jpg";

const Gallery = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Image Gallery</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imageItem1} className="card-img-top" alt="Pizza" />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imageItem2} className="card-img-top" alt="Pasta" />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imageItem3} className="card-img-top" alt="Pizza" />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imageItem4} className="card-img-top" alt="Coffee" />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imageItem5} className="card-img-top" alt="Wine" />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imageItem6} className="card-img-top" alt="Pasta" />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imageItem7} className="card-img-top" alt="Chef" />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imageItem8} className="card-img-top" alt="Cake" />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={imageItem9} className="card-img-top" alt="Coffee" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

