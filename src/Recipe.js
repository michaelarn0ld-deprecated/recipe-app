import React from 'react';
import style from './recipe.module.css';

const Recipe = (props) => {
  return (
    <div className={style.recipes}>
      <h1>{props.name}</h1>
      <ul className={style.ingredients}>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{props.calories} Calories</p>
      <img className={style.image} src={props.image} alt="" />
    </div>
  );
};

export default Recipe;
