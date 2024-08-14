import React, { useEffect, useState } from "react";

function Table({ books }) {
    // const [book, setBook] = useState(books);
    // useEffect(() => {
    //     setBook(books);
    // }, [books]);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Status</th>
                        <th>Return At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {book.name}
                                        </div>
                                        <div className="text-sm opacity-50">
                                            {book.author}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="badge badge-ghost badge-sm">
                                    {book.user_id > 0 ? "Booked" : "Available"}
                                </span>
                            </td>
                            <td>10,Dec 2024</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    details
                                </button>
                            </th>
                        </tr>
                    ))}
                    {/* row 1 */}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
