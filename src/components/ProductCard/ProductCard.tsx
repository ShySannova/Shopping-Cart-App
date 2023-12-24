import React from "react";
import "./ProductCard.css";

import { Product } from "../../types";
import { Link } from "react-router-dom";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="product-card">
            <div className="product-img">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-content">
                <h4>{product.name}</h4>
                <p>&#8377;{product.price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
