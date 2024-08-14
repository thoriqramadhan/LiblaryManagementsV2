import Dropdown from "@/Components/Dropdown";
import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard({ auth, books }) {
    const [bookFilter, setBookFilter] = useState("available");
    function setBookTab($param) {
        setBookFilter($param);
    }
    // useEffect(() => {
    //     console.log(bookFilter);
    // }, [bookFilter]);
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
                    <div className="p-2 cursor-pointer bg-slate-700 text-white hover:bg-black/50">
                        List Book
                    </div>
                    <div className="p-2 cursor-pointer hover:bg-black/50">
                        Borrowed
                    </div>
                </div>
                {/* content */}
                <main className="h-full bg-slate-500 mb-[80px] pt-10  sm:flex-1 sm:px-10 sm:py-5 flex flex-col gap-y-7">
                    <div className="px-5 flex items-center justify-between">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="p-2 font-semibold bg-white rounded-md border px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Genre
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content align="left">
                                <Dropdown.Link href="#">
                                    <span>Test</span>
                                    <span className="ml-[110px] inline-block">
                                        01
                                    </span>
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>

                        <div className="flex gap-x-3">
                            <div
                                onClick={() => setBookTab("available")}
                                className={`tab-books ${
                                    bookFilter == "available"
                                        ? "selected-tab"
                                        : ""
                                }`}
                            >
                                Available
                            </div>
                            <div
                                onClick={() => setBookTab("booked")}
                                className={`tab-books ${
                                    bookFilter == "booked" ? "selected-tab" : ""
                                }`}
                            >
                                Booked
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-1 bg-white px-4 py-4">
                        <p>List Of Books</p>
                        <p>Description testt </p>
                        <Table books={books} bookTab={bookFilter} />
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
