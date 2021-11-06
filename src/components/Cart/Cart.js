import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

const Cart = (props) => {
  const isLoggedIn = useSelector((state) => state.status.isLoggedIn);
  const items = useSelector(state=> state.cart.items);
  
   const cartItems = items.map(item => <CartItem item= {{id:item.id, name:item.name, quantity:item.quantity, price:item.price , total:+(item.quantity*item.price)}} />);
  return (
     <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {isLoggedIn && <ul>
        {cartItems}
      </ul>}
    </Card> 
  );
};

export default Cart;
