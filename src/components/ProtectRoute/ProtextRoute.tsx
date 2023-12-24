import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/slices/cartSlice";

const ProtectRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
    const cartItems = useSelector(selectCartItems);

    return cartItems.length > 0 ? children : <Navigate to="/" />;
};

export default ProtectRoute;
