import { router, usePage, useRemember } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import ValidationMessage from "./ValidationMessage";

function FormModal({ id, categories, auth }) {
    console.log(auth);
    const { errors, flash } = usePage().props;
    const [modalStatus, setModalStatus] = useState("book");
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
        let dynamicRoute;
        if (id == "add_admin") {
            dynamicRoute = "/admins?new_admin=true";
            setValues({
                ...values,
                isAdmin: 1,
            });
        } else if (modalStatus == "category") {
            dynamicRoute = "/admins?category=true";
        } else {
            dynamicRoute = "admins";
        }
        router.post(dynamicRoute, values, {
            errorBag: "createBooks",
        });
    };

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <form onSubmit={submitHandler}>
                        {/* title */}
                        {id == "add_admin" ? (
                            <p className="text-xl font-bold">Add Admin</p>
                        ) : (
                            <select
                                name="modal-status"
                                id="modal-status"
                                onChange={(e) => setModalStatus(e.target.value)}
                                className="text-xl font-bold py-2"
                            >
                                <option value="book">Add New Books</option>
                                <option value="category">
                                    Add New Category
                                </option>
                            </select>
                        )}
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
                            <ValidationMessage
                                msg={errors.createBooks?.name || ""}
                            />
                        </div>
                        {/* dynamic input */}
                        {id == "add_admin" ? (
                            <>
                                <div className="">
                                    <label
                                        htmlFor="email"
                                        className="label-input"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={values?.email || null}
                                        onChange={onChange}
                                        className="input-form"
                                    />
                                    <ValidationMessage
                                        msg={errors.createBooks?.email || ""}
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="password"
                                        className="label-input"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        required
                                        className="input-form"
                                        value={values?.password || null}
                                        onChange={onChange}
                                    />
                                    <ValidationMessage
                                        msg={errors.createBooks?.password || ""}
                                    />
                                </div>
                            </>
                        ) : modalStatus == "category" ? (
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
                                <ValidationMessage
                                    msg={errors.createBooks?.description || ""}
                                />
                            </div>
                        ) : (
                            <>
                                <div className="">
                                    <label
                                        htmlFor="author"
                                        className="label-input"
                                    >
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
                                    <ValidationMessage
                                        msg={errors.createBooks?.author || ""}
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
                                    <ValidationMessage
                                        msg={
                                            errors.createBooks?.description ||
                                            ""
                                        }
                                    />
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
                                            <option value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </>
                        )}

                        <button className="primary-btn mt-5 w-full">Add</button>
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
