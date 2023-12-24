import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementQuantity,
    incrementQuantity,
    removeItem,
    selectCartItems,
} from "../../store/slices/cartSlice";
import { Product } from "../../types";
import "./CartItem.css";
import { Link } from "react-router-dom";

interface CartItemProps {
    item: Product;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const quantity =
        cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0;

    const handleIncrement = () => {
        dispatch(incrementQuantity(item.id));
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity(item.id));
    };

    const handleRemove = () => {
        dispatch(removeItem(item.id));
    };

    return (
        <div className="cart-item">
            <Link to={`/product/${item.id}`} className="item-card">
                <div className="item-img">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="item-content">
                    <h4>{item.name}</h4>
                    <p>per quantity : &#8377;{item.price} </p>
                </div>
            </Link>
            <div className="control">
                <div className="quantity-control">
                    <button onClick={handleDecrement}>-</button>
                    <div>{quantity}</div>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <div className="remove-item">
                    <button className="remove-btn" onClick={handleRemove}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
