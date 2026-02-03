import Header from '../components/Header'
import Navbar from '../components/Navbar'

import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const Success = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");

    const [invoiceUrl, setInvoiceUrl] = useState("");

    useEffect(() => {
        if (sessionId) {
            axios.get(`http://e-commerce-backend-production-6436.up.railway.app/get-invoice/${sessionId}`)
                .then(res => setInvoiceUrl(res.data.invoice_url))
                .catch(err => console.error(err));
        }
    }, [sessionId]);

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