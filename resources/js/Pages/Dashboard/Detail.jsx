import { BackArrowSvg } from "@/Components/Svg";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, useRemember } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function Detail({ book, bookedBy, auth, admin = false, category }) {
    const [values, setValues] = useRemember({
        name: book.name,
        author: book.author,
        description: book.description,
        return_at: book.return_at,
        category_id: book.category_id,
        user_id: book.user_id || null,
    });

    function handleChange(e) {
        const key = e.target.id;
        let value = e.target.value;
        if (key === "category_id") {
            value = parseInt(value);
        }
        console.log(`Changing ${key} to ${value}`); // Log perubahan input
        setValues((values) => ({
            ...values,
            user_id: auth.user.id,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const dynamicRoute = admin
            ? `/admins/${book.id}`
            : auth.user.id == book.user_id
            ? `/dashboard/${book.id}?booked=true`
            : `/dashboard/${book.id}`;
        router.put(dynamicRoute, values);
    }
    function handleDelete(e) {
        if (confirm("Are you sure you want to delete this book?")) {
            router.delete(`/admins/${book.id}`);
        }
    }

    const shouldDisableInputs =
        !admin && (book.user_id === auth.user.id || !!book.user_id);

    useEffect(() => {
        console.log("Values on render:", values);
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
                                className="p-2 rounded-md border"
                                value={values.name}
                                onChange={handleChange}
                                disabled={shouldDisableInputs}
                            />
                        </div>
                        <div className="">
                            <label className="label-input" htmlFor="author">
                                Author
                            </label>
                            <input
                                type="text"
                                className="p-2 w-full rounded-md border"
                                name="author"
                                id="author"
                                value={values.author}
                                onChange={handleChange}
                                disabled={shouldDisableInputs}
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
                                className="p-2 w-full rounded-md block max-h-[100px] border"
                                name="description"
                                id="description"
                                value={values.description}
                                onChange={handleChange}
                                disabled={shouldDisableInputs}
                            />
                        </div>
                        {admin ? (
                            ""
                        ) : (
                            <div className="">
                                <label
                                    className="label-input"
                                    htmlFor="return_at"
                                >
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
                                            : ""
                                    }
                                    onChange={handleChange}
                                    disabled={shouldDisableInputs && !admin}
                                    required
                                />
                            </div>
                        )}
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

                        {/* category */}
                        {category ? (
                            <select
                                name="category_id"
                                id="category_id"
                                value={values.category_id}
                                onChange={handleChange}
                                className="block my-4 p-2 border w-full"
                            >
                                {category.map((item) => (
                                    <option value={item.id} key={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            ""
                        )}
                        {/* dynamic button */}
                        {admin ? (
                            <>
                                <button
                                    className="primary-btn mr-4"
                                    type="submit"
                                >
                                    Edit
                                </button>
                                <button
                                    className="primary-btn bg-red-700"
                                    type="button"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            </>
                        ) : (
                            <button
                                className="primary-btn"
                                hidden={
                                    !!book.user_id &&
                                    auth.user.id != book.user_id
                                }
                            >
                                {!!book.user_id && auth.user.id == book.user_id
                                    ? "Return Book"
                                    : "Borrow Book"}
                            </button>
                        )}
                    </form>
                </div>
            </Authenticated>
        </>
    );
}

export default Detail;
