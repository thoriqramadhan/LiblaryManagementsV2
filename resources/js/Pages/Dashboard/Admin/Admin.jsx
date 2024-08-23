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

function Admin({ auth, books, categories, admins }) {
    const [selectedTab, setSelectedTab] = useState("book-lists");
    const [modalStatus, setModalStatus] = useState("");
    const [selectedCard, setSelectedCard] = useState({
        add_book: false,
        add_admin: false,
    });
    const [book, setBook] = useState(
        JSON.parse(sessionStorage.getItem("books")) || books
    );
    return (
        <>
            <Authenticated user={auth}>
                <AuthProvider auth={auth}>
                    <DashboardLayout>
                        <SearchBook books={books} setBook={setBook} />
                        {/* book lists */}
                        <div
                            className={`bg-white transition-all duration-500 px-4 py-4 ${
                                selectedCard.add_book
                                    ? "h-screen overflow-y-auto shrink-0"
                                    : "h-[80px] overflow-hidden shrink-0"
                            }`}
                        >
                            {/* book lists header */}
                            <div className="w-full">
                                <div className=" py-3 flex justify-between">
                                    <p className="text-xl font-bold">
                                        All Books{" "}
                                        <span
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setSelectedCard({
                                                    ...selectedCard,
                                                    add_book:
                                                        !selectedCard.add_book,
                                                })
                                            }
                                        >
                                            V
                                        </span>
                                    </p>
                                    <label
                                        htmlFor="add_books"
                                        onClick={(e) =>
                                            setModalStatus(e.target.htmlFor)
                                        }
                                        className="w-8 h-8 flex justify-center cursor-pointer items-center bg-slate-700 rounded-full text-white"
                                    >
                                        +
                                    </label>
                                </div>
                            </div>

                            {/* book lists content */}
                            <Table books={book} layout={"admin"} />
                        </div>
                        {/* admin lists */}
                        <div
                            className={`bg-white transition-all duration-500 px-4 py-4 ${
                                selectedCard.add_admin
                                    ? "h-screen overflow-y-auto shrink-0"
                                    : "h-[80px] overflow-hidden shrink-0 mb-10"
                            }`}
                        >
                            <div className="w-full">
                                <div className=" py-3 flex justify-between">
                                    <p className="text-xl font-bold">
                                        All Admin
                                        <span
                                            className={`cursor-pointer rotate-90${
                                                selectedCard.add_admin
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setSelectedCard({
                                                    ...selectedCard,
                                                    add_admin:
                                                        !selectedCard.add_admin,
                                                })
                                            }
                                        >
                                            V
                                        </span>
                                    </p>
                                    <label
                                        htmlFor="add_admin"
                                        onClick={(e) =>
                                            setModalStatus(e.target.htmlFor)
                                        }
                                        className="w-8 h-8 flex justify-center cursor-pointer items-center bg-slate-700 rounded-full text-white"
                                    >
                                        +
                                    </label>
                                </div>
                                <Table books={admins} />
                            </div>
                        </div>
                        <FormModal
                            id={modalStatus}
                            categories={categories}
                            auth={auth}
                        />
                    </DashboardLayout>
                </AuthProvider>
            </Authenticated>
        </>
    );
}

export default Admin;
