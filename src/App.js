import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
// import store from './components/store/index';
import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import {statusActions} from './components/Store/status';

function App() {
  const isLoggedIn = useSelector((state) => state.status.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(statusActions.showNotification({
        status:'pending', 
        title:'sending..',
        message:'Sending cart data'
      }));
      const response = await fetch(
        "https://myreactapp-14003-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      
      if (!response.ok) {
        throw new Error('Sending cart data error');
      }

      dispatch(statusActions.showNotification({
        status:'success', 
        title:'Success!!!',
        message:'Sending cart data successfully'
      }));

    };

    sendCartData().catch(error=>{
      dispatch(statusActions.showNotification({
        status:'error', 
        title:'Error!',
        message:'System cannot update data to the server'
      }));
    })

  }
  

  
  , [cart]);



  return (
    <Layout>
      {isLoggedIn && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
