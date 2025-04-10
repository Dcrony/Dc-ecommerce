import React, { useContext } from 'react';
import Breadcrum from '../components/Breadcrum';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../contexts/ShopContext';
import ProductDisplay from '../components/ProductDisplay';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    
    // Add defensive checks
    if (!all_product) return <div>Loading products...</div>;
    if (!productId) return <div>Product ID not specified</div>;

    const product = all_product.find((e) => e.id === Number(productId));
    
    if (!product) return <div>Product not found</div>;

    return (
        <div>
            <Breadcrum product={product} />
            {/* Add your product details here */}
            <ProductDisplay product={product} />
        </div>
    );
};

export default Product;