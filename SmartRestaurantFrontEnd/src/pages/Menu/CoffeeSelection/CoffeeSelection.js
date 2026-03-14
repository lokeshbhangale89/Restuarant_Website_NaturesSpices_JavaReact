import React from "react";
import ListItem from "../../../components/ListMenuItem/ListMenuItem";

const menuDataRight = [
  {
    id:1,
    title: "Cafe Americano",
    description: "with strong and intense flavour",
    price: 49,
  },
  {
    id:2,
    title: "Cafe Latte",
    description: "with strong and intense flavour",
    price: 59,
  },
  {
    id:3,
    title: "Cappucciano Frappw",
    description: "with strong and intense flavour",
    price: 99,
  },
  {
    id:4,
    title: "Caramel Frappe",
    description: "with strong and intense flavour",
    price: 99,
  },
];

const menuDataLeft = [
  {
    id:5,
    title: "Hazelenut Coffee",
    description: "with strong and intense flavour",
    price: 89,
  },
  {
    id:6,
    title: "Lemon Iced Tea",
    description: "with strong and intense flavour",
    price: 79,
  },
  {
    id:7,
    title: "Assam Tea",
    description: "with strong and intense flavour",
    price: 39,
  },
  {
    id:8,
    title: "Hot Chocolate",
    description: "with strong and intense flavour",
    price: 79,
  },
];

const CoffeeSelection = () => {
  return (
    <div className='container my-5'>
      <div className="row">
        <h1 className="text-center text-uppercase pb-4">
          Coffee<span> Menu</span>
        </h1>

        <div className="col-md-6">
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              key={data.id}
            />
          ))}
        </div>

        <div className='col-md-6'>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              key={data.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeSelection;
