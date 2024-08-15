import { BackArrowSvg } from "@/Components/Svg";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, useRemember } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function Detail({ book, bookedBy, auth }) {
    const [values, setValues] = useRemember({
        name: book.name,
        author: book.author,
        description: book.description,
        return_at: book.return_at,
        user_id: book.user_id || null,
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            user_id: auth.user.id,
            [key]: value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        const dynamicRoute =
            auth.user.id == book.user_id
                ? `/dashboard/${book.id}?booked=true`
                : `/dashboard/${book.id}`;
        console.log(dynamicRoute);
        router.put(dynamicRoute, values);
    }
    useEffect(() => {
        console.log(values);
    }, [values]);

    return (
        <>
            <Authenticated user={auth.user}>
                <div className="h-screen sm:flex sm:items-center sm:justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className=" bg-white px-6 py-3 relative sm:w-1/2 sm:rounded-md sm:shadow-md sm:py-10"
                    >
                        <a href="/dashboard" className="absolute left-5 top-4">
                            <BackArrowSvg
                                width="23px"
                                height="24px"
                                color="black"
                            />
                        </a>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="label-input">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="p-2 rounded-md"
                                value={book.name}
                                disabled
                            />
                        </div>
                        <div className="">
                            <label className="label-input" htmlFor="author">
                                Author
                            </label>
                            <input
                                type="text"
                                className="p-2 w-full rounded-md"
                                name="author"
                                id="author"
                                value={book.author}
                                disabled
                            />
                        </div>
                        <div className="">
                            <label
                                className="label-input"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                type="text-area"
                                className="p-2 w-full rounded-md block max-h-[100px]"
                                name="description"
                                id="description"
                                value={book.description}
                                disabled
                            />
                        </div>
                        <div className="">
                            <label className="label-input" htmlFor="return_at">
                                Return Book At
                            </label>
                            <input
                                type="date"
                                className="p-2 w-full border rounded-md"
                                name="return_at"
                                id="return_at"
                                value={
                                    values.return_at
                                        ? values.return_at.split(" ")[0]
                                        : null
                                }
                                onChange={handleChange}
                                disabled={
                                    book.user_id === auth.user.id ||
                                    !!book.user_id
                                }
                                required
                            />
                        </div>
                        <hr className="my-4" />
                        {!!book.user_id ? (
                            <p className="my-5 text-md font-medium">
                                Book Reserved by :{" "}
                                <span className="font-bold underline cursor-pointer decoration-sky-600">
                                    {bookedBy.name}
                                </span>
                            </p>
                        ) : (
                            ""
                        )}
                        <button
                            className="bg-slate-700 px-4 py-2 rounded-md text-white"
                            hidden={
                                !!book.user_id && auth.user.id != book.user_id
                            }
                        >
                            {!!book.user_id && auth.user.id == book.user_id
                                ? "Return Book"
                                : "Borrow Book"}
                        </button>
                    </form>
                </div>
            </Authenticated>
        </>
    );
}

export default Detail;
