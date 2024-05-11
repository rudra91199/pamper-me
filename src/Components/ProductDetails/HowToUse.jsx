import React from 'react'

const HowToUse = ({product, service}) => {
  return (
    <div className='how-to-use'>
      {
        product ? <h4>A brief guide to use {product.name}</h4> : <h4>Steps for {service?.title}</h4>
      }
      {product ? <ul>
        {product?.howToUse?.map((step, i) => <li key={i}><span>Step {i+1}:</span> {step}</li>)}
      </ul> : <div dangerouslySetInnerHTML={{__html:service?.longDescription}}/>}
    </div>
  )
}

export default HowToUse