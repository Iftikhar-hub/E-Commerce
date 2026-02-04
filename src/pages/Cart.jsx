import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    loadUserCart,
    updateQuantityBackend,
    removeFromCartBackend,
} from "../services/adToCart";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const subtotal = cartItems.reduce((acc, item) => acc + (item.discountedPrice ?? item.orignalPrice) * item.quantity, 0);

    useEffect(() => {
        dispatch(loadUserCart());
    }, [dispatch]);

    const handleQuantityChange = (productId, value) => {
        dispatch(updateQuantityBackend({ productId, quantity: Number(value) }));
    };

    const handleRemove = (productId) => {
        dispatch(removeFromCartBackend({ productId }));
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />

            {cartItems.length === 0 ? (
                <p className="text-[22px] text-red-900 font-bold text-center mt-6">Your cart is empty</p>
            ) : (
                <div className="w-full max-w-400 px-36 flex flex-col gap-20 items-center justify-center mx-auto mt-20">
                    <table className="w-full border-separate border-spacing-y-4">
                        <thead>
                            <tr className="bg-white/5 shadow-sm backdrop-blur-sm">
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((cart) => (
                                <tr key={cart._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <img src={cart.image} alt={cart.pname} className="w-13.5 h-13.5 object-cover" />
                                            <p>{cart.pname}</p>
                                        </div>
                                    </td>
                                    <td>${cart.discountedPrice ?? cart.orignalPrice}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min={1}
                                            value={cart.quantity}
                                            onChange={(e) => handleQuantityChange(cart._id, e.target.value)}
                                        />
                                    </td>
                                    <td>${(cart.discountedPrice ?? cart.orignalPrice) * cart.quantity}</td>
                                    <td>
                                        <button onClick={() => handleRemove(cart._id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                        <div className="border w-full max-w-117.5 border-[#000000] rounded-sm flex flex-col px-4 py-6 gap-6">
                            <p className='text-[#000000] text-[20px] font-poppins font-medium'>Cart Total</p>
                            <div className='border-b border-[#a3a3a3] pb-2 w-full flex flex-row justify-between'>
                                <p className='text-[16px] font-poppins font-normal'>Subtotal</p>
                                <p className='text-[16px] font-poppins font-normal'>${subtotal}</p>

                            </div>
                            <div className='border-b border-[#a3a3a3] pb-2 w-full flex flex-row justify-between'>
                                <p className='text-[16px] font-poppins font-normal'>Shipping:</p>
                                <p className='text-[16px] font-poppins font-normal'>Free</p>

                            </div>
                            <div className=' w-full flex flex-row justify-between'>
                                <p className='text-[16px] font-poppins font-normal'>Total:</p>
                                <p className='text-[16px] font-poppins font-normal'>${subtotal}</p>

                            </div>
                        <a href="/CheckOut" className="bg-[#DB4444] text-white px-4 text-center py-2 rounded">Proceed to Checkout</a>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Cart;
