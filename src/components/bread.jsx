
"use client";

import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

function Bread() {
    return (
        <Breadcrumb aria-label="Default breadcrumb example" className="w-full max-w-400 mx-auto px-58 pt-6">
            <BreadcrumbItem href="#" icon={HiHome}>Home</BreadcrumbItem>
            <BreadcrumbItem href="/signup">Sign Up</BreadcrumbItem>
            <BreadcrumbItem href="/login">Login</BreadcrumbItem>
            <BreadcrumbItem href="/WhishLists">Whish List</BreadcrumbItem>
            <BreadcrumbItem href="/cart">Cart</BreadcrumbItem>
            <BreadcrumbItem href="/CheckOut">Check Out</BreadcrumbItem>
            
        </Breadcrumb>
    );
}
export default Bread;
