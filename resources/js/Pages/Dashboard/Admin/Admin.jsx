import Authenticated from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import React, { createContext, useState } from "react";
import AuthProvider from "../../Auth/AuthProvider";
import BookFiltering from "@/Module/BookFiltering";
import Table from "@/Components/Table";
import FormModal from "@/Components/FormModal";
import { usePage } from "@inertiajs/react";
import SearchBook from "@/Components/SearchBook";
// import Dashboard from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/Pages/Dashboard";
const AuthContext = createContext(null);

function Admin({ auth, books, categories }) {
    const [selectedTab, setSelectedTab] = useState("book-lists");
    const [book, setBook] = useState(
        JSON.parse(sessionStorage.getItem("books")) || books
    );
    return (
        <>
            <Authenticated user={auth}>
                <AuthProvider auth={auth}>
                    <DashboardLayout>
                        <SearchBook books={books} setBook={setBook} />
                        <div className="bg-white h-full px-4 py-4 overflow-y-auto">
                            <div className="w-full">
                                <div className=" py-3 flex justify-between">
                                    <p className="text-xl font-bold">
                                        All Books
                                    </p>
                                    <label
                                        htmlFor="add_books"
                                        className="w-8 h-8 flex justify-center cursor-pointer items-center bg-slate-700 rounded-full text-white"
                                    >
                                        +
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <Table books={book} layout={"admin"} />
                            </div>
                            <FormModal
                                id={"add_books"}
                                categories={categories}
                            />
                        </div>
                    </DashboardLayout>
                </AuthProvider>
            </Authenticated>
        </>
    );
}

export default Admin;
