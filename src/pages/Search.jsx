import { useSearchParams } from "react-router-dom";
import { useGetProductDataQuery } from "../services/productApi";

const Search = () => {
    const [params] = useSearchParams();
    const query = params.get("q");

    const { data: products = [], isLoading } = useGetProductDataQuery({
        search: query
    });

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            <h2 className="text-2xl font-bold mb-6">
                Search results for: "{query}"
            </h2>

            {isLoading && <p>Loading...</p>}

            {!isLoading && products.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-xl font-semibold text-red-500">
                        No Product Found 
                    </p>

                    <h3 className="mt-6 font-bold">
                        Recommended For You
                    </h3>
                </div>
            )}

            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-6">
                {products.map((product) => (
                    <div key={product._id} className="border p-4 rounded">
                        <img src={product.image} className="h-40 mx-auto object-contain" />
                        <h3 className="mt-2 font-semibold">{product.pname}</h3>
                        <p className="text-red-500">{product.discountedPrice}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Search;
