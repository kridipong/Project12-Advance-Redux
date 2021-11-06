import classes from './CartButton.module.css';
import {statusActions} from '../Store/status';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

const CartButton = (props) => {

  const isLoggedIn = useSelector(state=> state.status.isLoggedIn);
  const cartQuantity = useSelector(state=> state.cart.totalQuantity);

  const dispatch = useDispatch();
  const toggleHandler =()=> {
    dispatch(statusActions.toggleShow());
    console.log(isLoggedIn);
  
  }

  return (
    <button onClick = {toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
