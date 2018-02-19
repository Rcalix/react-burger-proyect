import React from 'react';
import Aux from '../../../hoc/Auxiliar';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return <li>
      <span style={{textTransform: 'capitalize'}}>
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
    </Aux>
  );
};

export default orderSummary;