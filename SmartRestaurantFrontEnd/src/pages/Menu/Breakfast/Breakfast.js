import React from "react";
import ListItem from "../../../components/ListMenuItem/ListMenuItem";

const menuDataLeft = [
  {
    id:1,
    title: "Spicy Egg Royale",
    description: "with spices and curry sause",
    price: "40",
  },
  {
    id:2,
    title: "Spiced Granola Bowl",
    description: "with outs, nuts, seeds and spices",
    price: "40",
  },
  {
    id:3,
    title: "Paneer Paratha Roll",
    description:
      "Combination of paratha flatbread with spicy paneer cheese filling",
    price: "70",
  },
];

const menuDataRight = [
  {
    id:4,
    title: "Veg Grilled Sandwich",
    description: "with afgan spices, grilled veggies",
    price: 130,
  },
  {
    id:5,
    title: "Tofu Bhurji",
    description: "with crumbled tofu and spices",
    price: 80,
  },
  {
    id:6,
    title: "Masala Dosa",
    description: "with south indian spices, onion and tomatos",
    price: 40,
  },
];

const Breakfast = () => {
  return (
    <div className='container my-5'>
      <div className="row">
        <h1 className="text-center text-uppercase pb-4">
          Breakfast<span> Menu</span>
        </h1>

        <div className="col-md-6">
          {menuDataLeft.map((data) => (
            <ListItem
              key={data.id}
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>

        <div className='col-md-6'>
          {menuDataRight.map((data) => (
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

export default Breakfast;
