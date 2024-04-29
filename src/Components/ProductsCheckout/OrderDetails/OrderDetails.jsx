import { useContext } from "react"
import "./OrderDetails.css"
import { Context } from "../../../Providers/PamperContext"

const OrderDetails = ({city}) => {
    const { cart } = useContext(Context);

    let price = 0;
    cart.map((item) => {
        price = price + item.price * item.quantity;
    });

    let shippingCharge = city === "" ? 80 : city === "Dhaka" ? 80 : 150;

    return (
        <div className="order-details">
            <div>
                <div className="selectedProducts">
                    <div className="item-header">
                        <p className="product-name">Product</p>
                        <p>Quantity</p>
                        <p>Unit Price</p>
                        <p className="total-price">Total Price</p>
                    </div>
                    <hr />
                    {cart.map((item, i) => (
                        <div className="item-row" key={i}>
                            <div className="product-name">
                                <img
                                    className="product-img"
                                    src={item?.images[0]?.src}
                                    alt=""
                                />
                                <p>
                                    {item?.name.length > 25
                                        ? item?.name.slice(0, 25) + "..."
                                        : item?.name}
                                </p>
                            </div>
                            <p>{item.quantity}</p>
                            <p className="font">{item.price}</p>
                            <p className="total-price font">
                                {item?.price * item.quantity}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="products-total-price">
                    <div className="sub-total">
                        <p>Sub-total :</p>
                        <p className="font">BDT {price}</p>
                    </div>
                    <hr />
                    <div className="sub-total shipping-charge">
                        <div>
                            <p>Shipping Charge :</p>
                            <span>( Inside Dhaka 80, outside dhaka 150 )</span>
                        </div>
                        <p className="font">BDT {shippingCharge}</p>
                    </div>
                    <hr />
                    <div className="sub-total">
                        <p className="">
                            Vat (<span className="font">5</span>%) :
                        </p>
                        <p className="font">BDT {(price * 5) / 100}</p>
                    </div>
                    <hr />
                    <div className="total-price">
                        <p>Total :</p>
                        <p className="font">
                            BDT {price + (price * 5) / 100 + shippingCharge}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails