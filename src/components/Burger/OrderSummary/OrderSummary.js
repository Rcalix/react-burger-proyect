import React from 'react';
import Aux from '../../../hoc/Auxiliar';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return <li key={igKey}>
      <span  style={{textTransform: 'capitalize'}}>
        {igKey}
      </span>: {props.ingredients[igKey]}
      </li>
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <h3>a delicius burger he following ingredients</h3>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Contiune checkout</p>
      <Button>Cancel</Button>
      <Button>Continue</Button>
    </Aux>
  );
};

export default orderSummary;