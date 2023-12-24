import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Product } from "../../types";
import productsData from "../../utils/products.json";
import { addItem } from "../../store/slices/cartSlice"; // Import your cartSlice and action
import "./Product.css";

const ProductDetails: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams<{ id?: string }>();
    const parsedId = parseInt(id ?? "", 10);

    const product: Product | undefined = productsData.find(
        (p) => p.id === parsedId
    );

    if (!product) {
        return <div className="error-message">Product not found</div>;
    }

    const handleAddToCart = () => {
        dispatch(addItem(product));
        navigate("/cart");
    };

    return (
        <div className="product-details">
            <h2 className="product-title">{product.name}</h2>
            <div className="product-details-container">
                <div className="product-img-container">
                    <img
                        className="product-image"
                        src={product.image}
                        alt={product.name}
                    />
                </div>
                <div className="product-details-content">
                    <div>
                        <h3>Product Name :</h3>
                        <p className="product-name">{product.name}</p>
                    </div>
                    <div>
                        <h3>Price :</h3>
                        <p className="product-price">&#8377;{product.price}</p>
                    </div>
                    <div>
                        <h3>Description :</h3>
                        <p className="product-desc">{product.details}</p>
                    </div>
                    <button
                        className="add-to-cart-button"
                        onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
