import React from 'react';
import './foodcard.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

const FoodCard = ({ fooditem, onAddToCart }) => {

    const [image, setImage] = useState("");

    useEffect( () => {

        async function findimage(){
            await axios.get(`http://localhost:4000/${fooditem.image}`, {
                responseType: "arraybuffer"
              })
              .then((res) => {
              const base64 = btoa(
                new Uint8Array(res.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ''
                )
              )
              setImage(base64)
            })
        }
        findimage()
        
    }, []);


    return (
        
        <div key={fooditem.id} className="col col-12">
            <div className="card h-100">
                <img src={`data:;base64,${image}`} alt={fooditem.name} className="card-img-top img-fluid" />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">{fooditem.name}</h5>
                    <p className="card-text">Rs. {fooditem.price}</p>
                    <button className="btn btn-outline-dark" onClick={() => onAddToCart(fooditem)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
