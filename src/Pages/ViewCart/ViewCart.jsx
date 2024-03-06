import { useContext } from "react"
import "./ViewCart.css"
import { Context } from "../../Providers/PamperContext"

const ViewCart = () => {
  const {cart} = useContext(Context);
  console.log(cart)
  return (
    <div>ViewCart</div>
  )
}

export default ViewCart