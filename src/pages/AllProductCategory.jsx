import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import { useParams } from "react-router-dom";
import { useGetProductDataQuery } from "../services/productApi";



const AllProductCategory = () => {
    const { category } = useParams();

   
    const { data, isLoading, isError } = useGetProductDataQuery(category);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading products</p>;

    return (

        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar />

            <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data?.data.length === 0 && <p>No products found in {category}</p>}
                {data?.data.map((product) => (
                    <div key={product._id} className="border p-4 rounded shadow">
                        <img src={product.image} alt={product.pname} className="w-full h-40 object-cover mb-2" />
                        <h3 className="text-lg font-semibold">{product.pname}</h3>
                        <p className="text-gray-500 line-through">${product.orignalPrice}</p>
                        <p className="text-red-600 font-bold">${product.discountedPrice}</p>
                    </div>
                ))}
            </div>

            

            <Footer className="mt-auto" />
        </div>
    );
};

export default AllProductCategory;
