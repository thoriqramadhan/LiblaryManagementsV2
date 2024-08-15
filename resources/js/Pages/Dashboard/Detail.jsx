import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function Detail({ book, bookedBy, auth }) {
    const [values, setValues] = useState({
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
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <label htmlFor="name" className="block">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={book.name}
                            disabled
                        />
                    </div>
                    <div className="">
                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            name="author"
                            id="author"
                            value={book.author}
                            disabled
                        />
                    </div>
                    <div className="">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            name="description"
                            id="description"
                            value={book.description}
                            disabled
                        />
                    </div>
                    <div className="">
                        <label htmlFor="return_at">Return Book At</label>
                        <input
                            type="date"
                            name="return_at"
                            id="return_at"
                            value={
                                values.return_at
                                    ? values.return_at.split(" ")[0]
                                    : null
                            }
                            onChange={handleChange}
                            disabled={
                                book.user_id === auth.user.id || !!book.user_id
                            }
                            required
                        />
                    </div>
                    <button
                        hidden={!!book.user_id && auth.user.id != book.user_id}
                    >
                        {!!book.user_id && auth.user.id == book.user_id
                            ? "Return Book"
                            : "Borrow Book"}
                    </button>

                    {!!book.user_id ? (
                        <p>Book Reserved by : {bookedBy.name}</p>
                    ) : (
                        ""
                    )}
                </form>
            </div>
        </>
    );
}

export default Detail;
