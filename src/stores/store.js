import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slice/authSlice';
import messageReducer from '../slice/message';

const reducer = {
    auth:authReducer,
    message:messageReducer,
}

// const enhancerList = [];

// const composeEnhancer = devToolsEnhancer({});

// const composedEnhancer = compose(applyMiddleware(thunk,logger), ...enhancerList,);

const store = configureStore({reducer,devTools:true});

export default store;