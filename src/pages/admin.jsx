import Header from "../components/Header"

import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/data";

const Admin = () => {

    const [productForm, setproductForm] = useState({
        pname: "", description: "", orignalPrice: "", discountedPrice:"", image: null
    });
    const [message, setMessage] = useState("");
    
    const handleProductChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setproductForm({ ...productForm, image: files[0] });
        } else {
            setproductForm({ ...productForm, [name]: value });
        }
    };

     const handleProductSubmit = async (e) => {
            e.preventDefault();
    
            try {
                const productData = new FormData();
                  productData.append("pname", productForm.pname);
                  productData.append("description", productForm.description);
                  productData.append("orignalPrice", productForm.orignalPrice);
                  productData.append("discountedPrice", productForm.discountedPrice);
                  productData.append("image", productForm.image);
                const res = await axios.post(`${BASE_URL}/api/product/product-insert`, productData,
                    {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    });
                alert("Product Inserted")
                setMessage(res.data.msg); 
               
                // navigate('/login')
                
                
            } catch (err) {
                
                setMessage(err.response?.data?.msg || "Something Wrong, Please try agian");

         }
         
         
        };
    return (
        <div className="flex flex-col h-ful">
            <Header />
           
               <div className="W-full bg-amber-700 py-4">
                <h1 className="text-white text-[26px] font-bold text-center">Admin Panel</h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
             <div className="px-8 mt-5  flex flex-col gap-6 bg-[#e4e4e4] justify-center items-center py-5 rounded-10">
                    <p className="text-[22px] text-black font-bold">Products Upload</p>
                    {message && (
                        <div
                            style={{
                                marginTop: "10px",
                                color: message.includes("successful") ? "green" : "red"
                            }}
                        >
                            {message}
                        </div>
                    )}


                    <form onSubmit={handleProductSubmit} encType="multipart/form-data" className="w-full flex flex-col gap-4">
                        <input type="text" onChange={handleProductChange} name='pname' placeholder="Product Name" className="border-b h-12 p-2 border-amber-700 outline-0 w-100" required />

                        <textarea name="description" onChange={handleProductChange} placeholder="Product Description" className="border-b h-12 p-2 border-amber-700 outline-0" required></textarea>

                        <input type="number" onChange={handleProductChange} name="orignalPrice" className="border-b h-12 p-2 border-amber-700 outline-0 w-100" required placeholder="Orignal Price" />
                        
                        <input type="number" onChange={handleProductChange} name="discountedPrice" className="border-b h-12 p-2 border-amber-700 outline-0 w-100" required placeholder="Discounted Price" />
                        <input type="file" onChange={handleProductChange} name="image" className="border-b h-12 p-2 border-amber-700 outline-0 text-[#6e6d6d]"
                            id="image" />
                        
                        <button className="w-full bg-[#DB4444] py-4 flex items-center justify-center  
                             rounded-sm text-[#FAFAFA] text-[16px] font-medium font-poppins cursor-pointer">Add product

                        </button>
                    </form>
                    
                </div>
            </div>    

        </div>
    )
}

export default Admin;