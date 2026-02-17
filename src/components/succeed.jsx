import Header from '../components/Header'
import Navbar from '../components/Navbar'

import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from '../utils/data';
import { useDispatch } from "react-redux";
import { loadUserCart } from "../services/adToCart";
import { Link } from 'react-router-dom';

const Success = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");

    const [invoiceUrl, setInvoiceUrl] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const handleSuccess = async () => {
            try {
                if (!sessionId) return;
                const res = await axios.get(
                    `${BASE_URL}/get-invoice/${sessionId}`
                );
                setInvoiceUrl(res.data.invoice_url);

                await axios.delete(
                    `${BASE_URL}/api/user/cart/clear-cart`,
                    { withCredentials: true }
                );
                dispatch(loadUserCart());

            } catch (err) {
                console.error(err);
            }
        };

        handleSuccess();
    }, [sessionId, dispatch]);

 

    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <Navbar />

            <div className="flex flex-col max-w-400 mx-auto items-center justify-center mt-20 gap-5">
                <h1 className="text-3xl font-bold text-[#DB4444]">
                    Payment Successful
                </h1>

                <Link to="/" className='py-3 border border-[#DB4444] text-center whitespace-nowrap overflow-hidden font-bold font-poppins text-black text-base w-full  rounded-sm '>
                    Back to Home
                </Link>


            </div>
        </div>
    );
};

export default Success;
