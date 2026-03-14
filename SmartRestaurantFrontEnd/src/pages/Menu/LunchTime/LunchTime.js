import React from 'react'
import ListItem from "../../../components/ListMenuItem/ListMenuItem";

const menuDataLeft = [
  {
    id:1,
    title: "Paneer Tikka",
    description: "with fresh paneer and kolhapuri spices",
    price: 149,
  },
  {
    id:2,
    title: "Paneer Butter Masala",
    description: "with fresh butter fry",
    price: 149,
  },
  {
    id:3,
    title: "Chana Masala",
    description: "With chana and indian spices",
    price: 199,
  },
  {
    id:4,
    title: "Matar Paneer",
    description: "With afgan spices and fresh peas",
    price: 139,
  },
];

const menuDataRight = [
  {
    id:5,
    title: "Baingan Bharta",
    description: "with khandeshi tadka and spring onion",
    price: 89,
  },
  {
    id:6,
    title: "Malai Kofta",
    description: "with fresh malai and butter fry",
    price: 33,
  },
  {
    id:7,
    title: "Raajma Masala",
    description: "Raajma with south spices and onions",
    price: 75,
  },
  {
    id:8,
    title: "Veg Biryani",
    description: "with peas, tomatos and fresh veggies",
    price: 22,
  },
];


const LunchTime = () => {
  return (
    <div className='container my-5'>
      <div className="row">
        <h1 className="text-center text-uppercase pb-4">
          Lunch<span> Menu</span>
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
  )
}

export default LunchTime;