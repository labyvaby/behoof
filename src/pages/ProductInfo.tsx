import React from 'react'

 import ProductPage from './ProductInfo/Sections/ProductPage/ProductPage';
import ReviewsSection from './ProductInfo/Sections/ReviewsSection/ReviewsSection'; 
import UserComments from './ProductInfo/Sections/UserComments/UserComments';

const ProductInfo = () => {
  return (
    <div> 
         <ProductPage/> 
         <ReviewsSection/> 
         <UserComments/>
    </div>
  )
} 
export default ProductInfo
