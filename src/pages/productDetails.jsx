import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import { useGetProductDataQuery } from "../services/productApi";
import { sellingItems } from "../utils/data";
import LoginPopup from '../components/LoginPopup';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartBackend } from "../services/adToCart";
import { useGetUserDataQuery } from '../services/userApi';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const { data: productData, isLoading: productLoading, isError: productError } = useGetProductDataQuery();
    const { data: userData } = useGetUserDataQuery();

    const products = productData?.data || [];
    const product = products.find(item => item._id === id || item.id === id);
    const sellingProduct = sellingItems.find(item => item.id === id);

    const handleAddToCart = (prod) => {
        if (!userData) {
            setShowLoginPopup(true);
            return;
        }
        dispatch(
            addToCartBackend({
                productId: prod._id ?? prod.id,
                quantity: 1,
            })
        )
            .unwrap()
            .then(() => console.log("Product added to cart in backend!"))
            .catch(err => console.error("Failed to add product to cart:", err));
    };

    let content;
    if (productLoading) {
        content = <p>Loading...</p>;
    } else if (productError) {
        content = <p>Error loading product</p>;
    } else if (!product && !sellingProduct) {
        content = <p className="text-center mt-20 text-xl">Product not found</p>;
    } else if (product) {
        content = (
            <div className="flex-grow p-4">
                <h1 className="text-2xl font-bold mb-4">{product.pname || product.name}</h1>
                <img src={product.image} alt={product.pname || product.name} className="w-64 h-64 object-cover mb-4" />
                <p className="text-lg mb-2">Price: ${product.discountedPrice || product.price}</p>
                <p className="text-gray-700">{product.description}</p>
                <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 bg-[#DB4444] cursor-pointer text-white px-8 py-3 rounded-md hover:bg-[#b82525] transition"
                >
                    Add to Cart
                </button>
            </div>
        );
    } else if (sellingProduct) {
        content = (
            <div className="flex-grow p-6 flex flex-col md:flex-row gap-8">
                <img src={sellingProduct.sellingImage} alt={sellingProduct.sellingName} className="w-80 h-80 object-cover rounded-md" />
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">{sellingProduct.sellingName}</h1>
                    <p className="text-lg text-[#DB4444]">
                        {sellingProduct.sellingPrice}
                        <span className="line-through text-gray-500 ml-3">{sellingProduct.sellingDiscounted}</span>
                    </p>
                    <p className="text-gray-700">{sellingProduct.description}</p>
                    <button
                        onClick={() => handleAddToCart(sellingProduct)}
                        className="mt-4 bg-[#DB4444] text-white px-8 py-3 cursor-pointer rounded-md hover:bg-[#b82525] transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />
            {content}
            <LoginPopup show={showLoginPopup} onClose={() => setShowLoginPopup(false)} />
            <Footer />
        </div>
    );
};

export default ProductDetails;
