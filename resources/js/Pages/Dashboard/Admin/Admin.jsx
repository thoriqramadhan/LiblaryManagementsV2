import Authenticated from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import React, { createContext, useState } from "react";
import AuthProvider from "../../Auth/AuthProvider";
import BookFiltering from "@/Module/BookFiltering";
import Table from "@/Components/Table";
// import Dashboard from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/Pages/Dashboard";
const AuthContext = createContext(null);

function Admin({ auth, books }) {
    const [selectedTab, setSelectedTab] = useState("book-lists");
    const book = BookFiltering(books, auth);
    console.log(book);
    return (
        <>
            <Authenticated user={auth}>
                <AuthProvider auth={auth}>
                    <DashboardLayout>
                        <div className="bg-white h-full px-4 py-4 overflow-y-auto">
                            <div className="w-full">
                                <div className=" py-3 flex justify-between">
                                    <p className="text-xl font-bold">
                                        All Books
                                    </p>
                                    <button className="w-8 h-8 bg-slate-700 rounded-full text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="">
                                <Table books={books} layout={"admin"} />
                            </div>
                        </div>
                    </DashboardLayout>
                </AuthProvider>
            </Authenticated>
        </>
    );
}

export default Admin;
