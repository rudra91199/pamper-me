import React from 'react'

const HowToUse = ({product}) => {
  return (
    <div className='how-to-use'>
      <h4>A brief guide to use {product.name}</h4>
      {product?.howToUse?.map((step, i) => <li key={i}><span>Step {i+1}:</span> {step}</li>)}
    </div>
  )
}

export default HowToUse