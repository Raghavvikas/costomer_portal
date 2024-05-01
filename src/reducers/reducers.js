import { handleAction } from "redux-actions";
import issueContants  from "../contants/issueContants";
import { combineReducers } from "redux";


const initialState = {
    user: '',
    feedbackDetail : [],
    productList : [],
    ProductDetails : [],
    isAuthenticated : false,    
}

const login = (state = initialState,action) => {
    switch(action.type){
        case issueContants.LOGIN:
            return{
                ...state,
                isAuthenticated :action.isAuthenticated,
                user:action.user
            }
        
        case issueContants.LOGOUT:
            return {
                ...state,
                ...initialState
            }

        default:
            return state;
    }
}

const productDetail = (state = initialState, action) => {
    switch (action.type){
        case issueContants.PRODUCT_DETAILS:
            return {
                ...state,
                ...action.payload
            }
        
        default:
            return state;
    }
}



const feedbackDetail = (state = initialState, action) => {
    switch (action.type){
        case issueContants.FEEDBACK_DETAILS:
            return {
                ...state,
                feedbackDetail:action.payload
            }
        
            
        case issueContants.SUBMIT_FEEDBACK:
            return {
                ...state,
                feedbackDetail:[...state.feedbackDetail, action.payload]
            }

        default:
            return state;
    }
}


const submitFeedback = (state = initialState, action) => {
    switch(action.type) {

        case issueContants.SUBMIT_FEEDBACK:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}



const productList = handleAction(issueContants.PURCHASED_ITEMS,(state,action) => ({
    ...state,
    ...action.payload
}),initialState);


export const getLoginState = state => state.login;
export const getProductState = state => state.productDetail.productDetail;
export const getFeedbackDetailsState = state => state.feedbackDetail.feedbackDetail;
export const getFeedbackState = state => state.submitFeedback;
export const getProductList = state => state.productList.productList;


export default combineReducers({
    login,
    productDetail,
    feedbackDetail,
    submitFeedback,
    productList
});