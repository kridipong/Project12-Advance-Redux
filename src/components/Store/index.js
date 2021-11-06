 import {configureStore} from '@reduxjs/toolkit';
 import statusSlice from './status';
 import cartSlice from './cart-slice';

 const store = configureStore({reducer:{status:statusSlice.reducer,cart:cartSlice.reducer}});

 export default store;