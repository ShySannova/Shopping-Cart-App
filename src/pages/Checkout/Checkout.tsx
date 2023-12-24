import React, { useState } from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/slices/cartSlice";

interface ShippingDetails {
    name: string;
    address: string;
}

const Checkout: React.FC = () => {
    const cartItems = useSelector(selectCartItems);

    const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
        name: "",
        address: "",
    });

    const calculateTotalPrice = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * (item.quantity || 1),
            0
        );
    };

    const handleConfirmOrder = () => {
        alert("Feature Coming Soon : After Selected As An Intern    : )");
    };

    return (
        <div className="checkout">
            <h2 className="title">Checkout</h2>
            <div className="checkout-container">
                <div className="review-items">
                    <h3>Review Items</h3>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <p>- {item.name} </p>
                                <p className="item-qp">
                                    <span>Qty. {item.quantity} </span>x
                                    <span> &#8377;{item.price}</span>
                                </p>
                                <p>
                                    total
                                    <span>
                                        : &#8377;{item.quantity * item.price}
                                    </span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="order-panel">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={shippingDetails.name}
                                onChange={(e) =>
                                    setShippingDetails({
                                        ...shippingDetails,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <textarea
                                rows={10}
                                id="address"
                                value={shippingDetails.address}
                                onChange={(e) =>
                                    setShippingDetails({
                                        ...shippingDetails,
                                        address: e.target.value,
                                    })
                                }
                            />
                        </div>
                        {/* Add more shipping details inputs as needed */}
                    </form>
                    <div className="total-price">
                        <h3>Total Price : </h3>
                        <span>&#8377; {calculateTotalPrice().toFixed(2)}</span>
                    </div>

                    <button
                        disabled={
                            !shippingDetails.name || !shippingDetails.address
                        }
                        className="confirm-btn"
                        onClick={handleConfirmOrder}>
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
