import React from "react";
import { useSearchProductQuery } from "../services/productApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import RecommendedProducts from "../components/RecommendedItems";


const Search = () => {
     const navigate = useNavigate();
    const [params] = useSearchParams();
    const query = params.get("q") || "";

    const { data, isLoading } = useSearchProductQuery(query);
    const products = data?.data || [];

    return (

        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar/>



            <div className="flex-1 w-full max-w-400 px-6 lg:px-26   mx-auto py-10">
                <h2 className="text-2xl font-bold mb-6">Search results for: {query}</h2>

                {isLoading && <p>Loading...</p>}

                {!isLoading && products.length === 0 && (
                    <div className="text-center py-10">
                        <p className="text-xl font-semibold text-red-500">No Product Found</p>
                       
                    </div>
                )}

                <div className=" grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-6">
                    {products.map((product) => (
                        <div key={product._id} className="border p-4 rounded">
                            <img src={product.image} onClick={() => navigate(`/productDetails/${product._id}`)} className="h-40 mx-auto cursor-pointer object-contain" />
                            <h3 className="mt-2 font-semibold">{product.pname}</h3>
                            <p className="text-red-500">${product.discountedPrice}</p>
                        </div>
                    ))}
                </div>
                <RecommendedProducts className="mt-6 " />
            </div>

            <Footer className="mt-auto" />
        </div>
    );
};

export default Search;
