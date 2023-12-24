import "./Cart.css";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/slices/cartSlice";
import CartItem from "../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const handleProceedToCheckout = () => {
        navigate("/checkout");
    };

    const calculateTotalAmount = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * (item.quantity || 1),
            0
        );
    };

    return (
        <div className="cart">
            <div className="cart-container">
                <h2 className="title">Your Cart</h2>

                <div className="cart-content">
                    <div
                        className={`cart-items ${
                            !cartItems.length && "empty"
                        }`}>
                        {!cartItems.length ? (
                            <div className="no-items">
                                <h2>No items available</h2>
                                <button
                                    onClick={() => {
                                        navigate("/");
                                    }}>
                                    Add Products
                                </button>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))
                        )}
                    </div>
                    {cartItems?.length ? (
                        <div className="cart-proceed">
                            <div>
                                <p>Total Items</p>
                                <span>{cartItems.length}</span>
                            </div>
                            <div>
                                <p>Total Amount</p>
                                <span>
                                    &#8377; {calculateTotalAmount().toFixed(2)}
                                </span>
                            </div>
                            <button onClick={handleProceedToCheckout}>
                                Proceed To Checkout
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Cart;
