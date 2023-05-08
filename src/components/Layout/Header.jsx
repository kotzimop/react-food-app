/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import classes from "./Header.module.css";
import MealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImage} alt="A table full of delicious food"/>
      </div>
    </Fragment>
  );
};

export default Header;
