import Dropdown from "@/Components/Dropdown";
import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { createContext, useContext, useEffect, useState } from "react";

// create context Model
const AuthContext = createContext(null);

export default function Dashboard({ auth, books, bookCategories }) {
    // tab condition
    const [bookFilter, setBookFilter] = useState("available");
    const [selectedTab, setSelectedTab] = useState("book-lists");
    const [categoryNow, setCategoryNow] = useState("");

    const [book, setBook] = useState(
        JSON.parse(sessionStorage.getItem("books")) || books
    );
    function setCategoryData(categoryId, name) {
        let filteredBooks = books.filter(
            (book) => book.category_id == categoryId
        );
        setBook(filteredBooks);
        setCategoryNow(name);
    }
    function setTab(param, callback) {
        callback(param);
    }
    useEffect(() => {
        sessionStorage.setItem("books", JSON.stringify(book));
        console.log(book);
    }, [book]);
    // jangan ubah langsung dari referensi / not pure funcition
    // jangan looping dari referensi yang berubah
    useEffect(() => {
        let filteredBooks;
        if (selectedTab == "book-lists") {
            if (bookFilter == "booked") {
                filteredBooks = books.filter((book) => {
                    return book.status == 1;
                });
                setBook(filteredBooks);
            } else {
                filteredBooks = books.filter((book) => {
                    return book.status == 0;
                });
                setBook(filteredBooks);
            }
        } else if (selectedTab == "booked-lists") {
            console.log("in");
            filteredBooks = books.filter(
                (book) => book.user_id == auth.user.id
            );
            console.log(filteredBooks);
            setBook(filteredBooks);
        }
    }, [selectedTab, bookFilter]);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <AuthContext.Provider value={auth}>
                <DashboardLayout
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                >
                    {/* header */}
                    <div className=" flex items-center justify-between">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="p-2 font-semibold bg-white rounded-md border px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Genre
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content align="left">
                                {bookCategories.map((category) => (
                                    <div
                                        onClick={() =>
                                            setCategoryData(
                                                category.id,
                                                category.name
                                            )
                                        }
                                        className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                    >
                                        <span>{category.name}</span>
                                        <span className="ml-3 inline-block">
                                            {category.books_count}
                                        </span>
                                    </div>
                                ))}
                            </Dropdown.Content>
                        </Dropdown>
                        {/* tab */}
                        {selectedTab == "book-lists" ? (
                            <div className="flex gap-x-3">
                                <div
                                    onClick={() =>
                                        setTab("available", setBookFilter)
                                    }
                                    className={`tab-books ${
                                        bookFilter == "available"
                                            ? "selected-tab"
                                            : ""
                                    }`}
                                >
                                    Available
                                </div>
                                <div
                                    onClick={() =>
                                        setTab("booked", setBookFilter)
                                    }
                                    className={`tab-books ${
                                        bookFilter == "booked"
                                            ? "selected-tab"
                                            : ""
                                    }`}
                                >
                                    Booked
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    {/* content */}
                    <div className="w-full flex-1 bg-white px-4 py-4 overflow-y-auto">
                        {selectedTab == "book-lists" ? (
                            <>
                                <p className="text-xl font-bold">
                                    List Of Books
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="text-xl font-bold">
                                    List Of Borrowed
                                </p>
                            </>
                        )}
                        {categoryNow == "" ? (
                            ""
                        ) : (
                            <p>
                                Category :<b>{categoryNow}</b>
                            </p>
                        )}
                        <Table books={book} selectedTab={selectedTab} />
                    </div>
                </DashboardLayout>
            </AuthContext.Provider>
        </AuthenticatedLayout>
    );
}

// export useContext for outside components
export const useAuth = () => {
    return useContext(AuthContext);
};
