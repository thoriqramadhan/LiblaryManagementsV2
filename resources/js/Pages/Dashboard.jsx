import Dropdown from "@/Components/Dropdown";
import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard({ auth, books, bookCategories }) {
    // tab condition
    const [bookFilter, setBookFilter] = useState("available");
    const [selectedTab, setSelectedTab] = useState("book-lists");
    console.log(bookCategories);
    // book data
    const [book, setBook] = useState(books);
    // console.log(bookCategories);
    function setTab(param, callback) {
        callback(param);
    }
    // jangan ubah langsung dari referensi / not pure funcition
    // jangan looping dari referensi yang berubah
    useEffect(() => {
        let filteredBooks;
        if (selectedTab == "book-lists") {
            if (bookFilter == "booked") {
                filteredBooks = books.filter((book) => {
                    return book.status == 0;
                });
                setBook(filteredBooks);
            } else {
                filteredBooks = books.filter((book) => {
                    return book.status == 1;
                });
                setBook(filteredBooks);
            }
        } else if (selectedTab == "booked-lists") {
            const filteredBooks = books.filter(
                (book) => book.user_id == auth.user.id
            );
            setBook(filteredBooks);
            console.log(book);
        }
    }, [selectedTab, bookFilter]);
    useEffect(() => {
        console.log(book);
    }, [book]);
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

            <div className="relative h-[100vh] sm:flex">
                {/* sidebar */}
                <div className="w-full h-[80px] bg-red-100 fixed bottom-0 flex justify-around items-center sm:static sm:h-full sm:w-20 sm:flex-col sm:justify-start sm:gap-y-4 sm:py-[40px] sm:overflow-hidden">
                    <div
                        className={`p-2 cursor-pointer ${
                            selectedTab == "book-lists" ? "selected-tab" : ""
                        }`}
                        onClick={() => setTab("book-lists", setSelectedTab)}
                    >
                        List Book
                    </div>
                    <div
                        className={`p-2 cursor-pointer ${
                            selectedTab == "booked-lists" ? "selected-tab" : ""
                        }`}
                        onClick={() => setTab("booked-lists", setSelectedTab)}
                    >
                        Borrowed
                    </div>
                </div>
                {/* content */}
                <main className="h-full bg-slate-500 mb-[80px] pt-10  sm:flex-1 sm:px-10 sm:py-5 flex flex-col gap-y-7">
                    {/* header */}
                    <div className="px-5 flex items-center justify-between">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="p-2 font-semibold bg-white rounded-md border px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Genre
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content align="left">
                                {bookCategories.map((category) => (
                                    <Dropdown.Link
                                        href={`/dashboard/category?${category.id}`}
                                    >
                                        <span>{category.name}</span>
                                        <span className="ml-3    inline-block">
                                            {category.books_count}
                                        </span>
                                    </Dropdown.Link>
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
                    {selectedTab == "book-lists" ? (
                        <div className="w-full flex-1 bg-white px-4 py-4">
                            <p>List Of Books</p>
                            <p>Description testt </p>
                            <Table books={book} />
                        </div>
                    ) : (
                        <div className="w-full flex-1 bg-white px-4 py-4">
                            <p>List Of Borrowed</p>
                            <p>Description text </p>
                            <Table books={book} />
                        </div>
                    )}
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
