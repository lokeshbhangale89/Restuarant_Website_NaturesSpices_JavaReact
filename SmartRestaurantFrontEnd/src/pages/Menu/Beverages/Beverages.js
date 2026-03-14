import React from "react";
import ListItem from "../../../components/ListMenuItem/ListMenuItem";

const menuDataLeft = [
  {
    id:1,
    title: "Cold Brew Coffee",
    price: 90,
  },
  {
    id:2,
    title: "Bubble Tea",
    price: 39,
  },
  {
    id:3,
    title: "apple juice",
    price: 40,
  },
  {
    id:4,
    title: "orange juice",
    price: 30,
  },
];

const menuDataRight = [
  {
    id:5,
    title: "coke",
    price: 99,
  },
  {
    id:6,
    title: "pepsi",
    price: 59,
  },
  {
    id:7,
    title: "red bull",
    price: 199,
  },
  {
    id:8,
    title: "bitter lemon",
    price: 70,
  },
];

const Beverages = () => {
  return (
    <div className='container my-5'>
      <div className="row">
        <h1 className="text-center text-uppercase pb-4">
          Beverages<span> Menu</span>
        </h1>

        <div className="col-md-6">
          {menuDataLeft.map((data, i) => (
            <ListItem
              key={data.id}
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>

        <div className='col-md-6'>
          {menuDataRight.map((data, i) => (
            <ListItem
              key={data.id}
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beverages;
