import { statusActions } from "./status";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://myreactapp-14003-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("fetch cart data error");
      }

      const data = await response.json();

      return data;
    }
    try {
      const cartData = await sendRequest();
      dispatch(cartActions.replaceCart({items:cartData.items || [], totalQuantity: cartData.totalQuantity }));
    } catch (error) {
      dispatch(
        statusActions.showNotification({
          status: "error",
          title: "Error!",
          message: "System cannot update data to the server",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      statusActions.showNotification({
        status: "pending",
        title: "sending..",
        message: "Sending cart data",
      })
    );

    const sendRequest = async (cart) => {
      const response = await fetch(
        "https://myreactapp-14003-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify({items:cart.items, totalQuantity:cart.totalQuantity}) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data error");
      }
    };

    try {
      await sendRequest(cart);

      dispatch(
        statusActions.showNotification({
          status: "success",
          title: "Success!!!",
          message: "Sending cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        statusActions.showNotification({
          status: "error",
          title: "Error!",
          message: "System cannot update data to the server",
        })
      );
    }
  };
};
