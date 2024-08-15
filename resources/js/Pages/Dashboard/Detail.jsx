import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function Detail({ book, auth }) {
    console.log(auth.user.id != book.user_id);
    const [values, setValues] = useState({
        name: book.name,
        author: book.author,
        description: book.description,
        returnAt: null,
        user_id: null,
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
    function handleInput(e) {
        e.preventDefault();
        router.put(`/dashboard/${book.id}`, values);
    }

    return (
        <>
            <div className="">
                <form onSubmit={handleInput}>
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
                        <label htmlFor="returnAt">Return Book At</label>
                        <input
                            type="date"
                            name="returnAt"
                            id="returnAt"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        disabled={
                            !!book.user_id && auth.user.id != book.user_id
                        }
                    >
                        borrow a book
                    </button>
                </form>
            </div>
        </>
    );
}

export default Detail;
