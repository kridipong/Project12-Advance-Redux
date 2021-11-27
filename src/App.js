import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
// import store from './components/store/index';
import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import { fetchCartData, sendCartData } from "./components/Store/cart-actions";
import Notification from "./components/Layout/Notification";
import { cartActions } from "./components/Store/cart-slice";


let isInitial = true;

function App() {
  const isLoggedIn = useSelector((state) => state.status.isLoggedIn);
  const notification = useSelector((state)=> state.status.notification);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchCartData());

  }, [dispatch]);


  useEffect(() => {
    if (isInitial) {
      isInitial =false;

      return;
    }
    if (cart.changed) {
    dispatch(sendCartData(cart));
    }

   }, [cart,dispatch]);



  return (
    <Layout>
    {notification && <Notification status={notification.status} title={notification.title} message= {notification.message} />}
    {isLoggedIn && <Cart />}
    <Products />
    </Layout>
  );
}

export default App;
