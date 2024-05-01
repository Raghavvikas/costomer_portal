import React, { useEffect } from 'react'
import Navigation from './Navigation'
import Product from './Product'
import Feedback from 'react-bootstrap/esm/Feedback'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import Footer from './Footer'

const ProductDetails = (props) => {
    const productId = useParams().id;
    const productDetails = useSelector(state => state.productDetails);
    const feedbackDetails = useSelector(state => state.feedbackDetails);
    const login = useSelector(state=> state.login.user);

  useEffect(()=> {
    props.getProductDetails({pdtId:productId});
    props.getFeedbackDetails({pdtId:productId});
  },[]);

  const handleSubmitFeedback = (rating, feedback, feedbackAck) => {
    const fbData ={
      'body':feedback,
      'user':login,
      'rating':rating,
      'feedbackAck':feedbackAck,
      'pdtCode':productId
    }
    props.submitFeedback(fbData);
    props.getProductDetails({pdtId:productId});
  }



  return (
    <>
      <Navigation />
      <div className='container-fluid'>
        <div className='row' style={{maxWidth:"100%"}}>
            <div className='col-sm-8'>
                {
                    <Product {...productDetails} />
                }
            </div>
            <div className='col-sm-4'>
                {feedbackDetails.length === 0 ? '' : <Feedback feedback={feedbackDetails} onFeedback ={handleSubmitFeedback} />}
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ProductDetails;
