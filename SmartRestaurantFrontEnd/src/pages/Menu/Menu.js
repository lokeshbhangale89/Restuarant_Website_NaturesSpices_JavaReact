import React from "react";
// import bgImage from "../../assets/coffee.jpg";
import Breakfast from './Breakfast/Breakfast'
import LunchTime from "./LunchTime/LunchTime";
import CoffeeSelection from './CoffeeSelection/CoffeeSelection'
import Beverages from './Beverages/Beverages'

const Menu = () => {
  return (
    <div>
      <Breakfast />
      <LunchTime />
      <CoffeeSelection />
      <Beverages />
    </div>
  );
};

export default Menu;
