import { router, useRemember } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function FormModal({ id, categories }) {
    const [values, setValues] = useRemember({
        name: "",
        author: "",
        description: "",
        status: 0,
        category_id: categories[0].id,
        user_id: 0,
    });

    const onChange = (e) => {
        const key = e.target.id;
        let value = e.target.value;
        if (key == "category_id") {
            value = parseInt(value);
        }
        setValues({
            ...values,
            [key]: value,
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        router.post("/admins", values);
    };
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <form onSubmit={submitHandler}>
                        <h3 className="text-lg font-bold">Add New Books</h3>
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="name" className="label-input">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="input-form"
                                value={values.name}
                                onChange={onChange}
                                required
                                id="name"
                            />
                        </div>
                        <div className="">
                            <label htmlFor="author" className="label-input">
                                Author
                            </label>
                            <input
                                type="text"
                                name="author"
                                className="input-form"
                                value={values.author}
                                onChange={onChange}
                                required
                                id="author"
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="description"
                                className="label-input"
                            >
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={values.description}
                                onChange={onChange}
                                required
                                className="input-form"
                                id="description"
                            ></textarea>
                        </div>
                        <div className="">
                            <label
                                htmlFor="category_id"
                                className="label-input"
                            >
                                Category
                            </label>
                            <select
                                name="category_id"
                                className="input-form"
                                value={values.category_id}
                                onChange={onChange}
                                id="category_id"
                            >
                                {categories.map((item) => (
                                    <option value={item.id}>{item.name}</option>
                                ))}
                            </select>
                            <button className="primary-btn mt-5 w-full">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor={id}>
                    Close
                </label>
            </div>
        </>
    );
}

export default FormModal;
