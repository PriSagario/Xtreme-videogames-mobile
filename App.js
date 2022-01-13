import React from 'react';
import AuthenticateRoutes from './src/Navegation/AuthenticateRoutes';
// import UnauthenticateRoutes from './src/Navegation/UnauthenticatedRoutes';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
import mainReducer from './src/Redux/Reducers/mainReducer';

const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={reduxStore}>
       <AuthenticateRoutes />
    </Provider>
      //  <UnauthenticateRoutes />
  );
}
