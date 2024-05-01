import React from 'react'
import { Link } from 'react-router-dom'
import Rater from './Rater'

const ProductList = (props) => {
 
    const {pdtCode, pdtDescription, pdtImg, pdtName, pdtPrice, avgFeedback, isDiscontinued} = props;

  return (
    <div className='thumbnail'>
      <img src={pdtImg} alt='products' className='img img-rounded img-responsive' />
      <div className='caption' style={{textAlign:"center"}}>
        <Link to={`/productDetails/${pdtCode}`}>
            <h3>{pdtName}</h3>
        </Link>
        <h4>
            <span style={{color:"red"}}>Rs.{pdtPrice}</span>
        </h4>
        {
            isDiscontinued ? <h5 style={{color:"Red", fontWeight:"bold"}}>The product is discontinued.</h5> : 
            <p className='description'>{pdtDescription}</p>
        }
        <Rater value={avgFeedback} maxLength="6" />&nbsp; &nbsp;
        <span  style={{fontSize:"9px"}}>{avgFeedback}</span>
      </div>
    </div>
  )
}

export default ProductList
