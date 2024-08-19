import React, { useEffect, useState } from "react";

function Table({ books, layout }) {
    // const routeToDetail = selectedTab == 'booked' ? `/dashboard/booked${}`
    return (
        <div className="">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Status</th>
                        <th>Available At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => {
                        return (
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
                                        {book.status > 0
                                            ? "Booked"
                                            : "Available"}
                                    </span>
                                </td>
                                <td>
                                    {book.return_at
                                        ? book.return_at.split(" ")[0]
                                        : "Now"}
                                </td>
                                <th>
                                    {/* show detail */}
                                    <a
                                        href={`${
                                            layout == "admin"
                                                ? `/admins/${book.id}`
                                                : `/dashboard/${book.id}`
                                        }`}
                                    >
                                        <button className="btn btn-ghost btn-xs">
                                            details
                                        </button>
                                    </a>
                                </th>
                            </tr>
                        );
                    })}
                    {/* row 1 */}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
