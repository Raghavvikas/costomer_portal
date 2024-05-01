import axios from "axios";
import { createAction } from "redux-actions";
import issueContants from '../contants/issueContants.js'


export const logoutMe = createAction(issueContants.LOGOUT);
export const submitFB = createAction(issueContants.SUBMIT_FEEDBACK);
export const getProduct = createAction(issueContants.PRODUCT_DETAILS);
export const getPurchasedItems = createAction(issueContants.PURCHASED_ITEMS);
export const getFeedback = createAction(issueContants.FEEDBACK_DETAILS);





export function loginAction(data){
    return dispatch => {
        axios.get('http://localhost:4000/users').then((res) => {
            let value = res.data;
            var result = value.find(val => val.username === data.username && val.password === data.password)
            if(result){
                dispatch(loginMe(true, result.username))
            }
            else{
                dispatch(loginMe(false))
            }
        })
    }
}

export function loginMe(isAuthenticated, username){
    return {
        type:'LOGIN',
        isAuthenticated : isAuthenticated,
        user: username
    }
}


// LOGOUT ACTION

export function logout(){
    return (dispatch) => {{
        dispatch(logoutMe())
    }}
}

// GET PRODUCT LIST

export function getPurchasedProductList(){
    return (dispatch) => {
        axios.get('http://localhost:4000/products').then((response) => {
            dispatch(getPurchasedItems({productList:response.data})).catch(err => console.log(err))
        })
    }
}

// SUBMIT FEEDBACK
export function submitFeedback(data){
    return dispatch =>{
        axios.post('http://localhost:4000/feedbackDetails',{
            crossdomain : true,
            data : JSON.stringify(data),
            headers:{
                "Content_Type" : "application/json"
            }
        }).then(res => {
            dispatch(submitFB(res.data))
        }).catch(err => dispatch(submitFB(err)));
    }
}


// Product DETAILS

export function getProductDetails(data){
    const pdID = data.pdtID;
    return dispatch => {
        axios.get(`http://localhost:4000/products/${pdID}`)
        .then((res) => {dispatch(getProduct({productDetails : res.data}))})
        .catch(err => dispatch(getProduct(err)))
    }
}



export function getFeedbackDetails(data){
    const pdID = data.pdtID;
    return dispatch => {
        axios.get(`http://localhost:4000/feedbackDetails?pdtCode=${pdID}`)
        .then((res) => {dispatch(getFeedback(res.data))})
        .catch(err => dispatch(getFeedback(err)))
    }
}