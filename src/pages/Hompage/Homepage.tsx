import React from "react";
import "./Homepage.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Product } from "../../types";
import products from "../../utils/products.json";

const Homepage: React.FC = () => {
    return (
        <div className="homepage">
            <h1 className="title">Shop with us On trending Products</h1>
            <div className="products">
                {products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Homepage;
