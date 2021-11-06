import classes from './CartItem.module.css';
import {cartActions}  from '../Store/cart-slice';
import { useDispatch } from 'react-redux';


const CartItem = (props) => {
  const { id ,name, quantity, total, price } = props.item;

  const dispatch =  useDispatch();
  const addItemHandler = () => {
    dispatch(cartActions.addItem({id, name, price}));

  };

  const removeItemHandler =()=>{
    dispatch(cartActions.removeItem(id));

  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick = {removeItemHandler}>-</button>
          <button onClick = {addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
