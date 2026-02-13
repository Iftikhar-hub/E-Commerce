import Header from '../components/Header'
import Navbar from '../components/Navbar'

import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from '../utils/data';
import { useDispatch } from "react-redux";
import { loadUserCart } from "../services/adToCart";

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

            <div className="flex flex-col items-center mt-20 gap-5">
                <h1 className="text-3xl font-bold text-[#DB4444]">
                    Payment Successful 
                </h1>

                {invoiceUrl ? (
                    <a
                        href={invoiceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#DB4444] text-white px-6 py-3 rounded-md"
                    >
                        Download Invoice 📄
                    </a>
                ) : (
                    <p>Generating invoice...</p>
                )}
            </div>
        </div>
    );
};

export default Success;
