import React, { useEffect, useState } from "react";

function BookFiltering({ books, auth }) {
    // console.log(books);
    const [bookFilter, setBookFilter] = useState("available");
    const [selectedTab, setSelectedTab] = useState("book-lists");
    const [book, setBook] = useState(
        JSON.parse(sessionStorage.getItem("books")) || books
    );
    function setTab(param, callback) {
        callback(param);
    }

    useEffect(() => {
        if (!books) {
            console.error("Books is undefined or null.");
            return;
        }
        let filteredBooks;
        if (selectedTab == "book-lists") {
            if (bookFilter == "booked") {
                filteredBooks = books.filter((book) => {
                    return book.status == 1;
                });
                setBook(filteredBooks);
            } else {
                filteredBooks = books.filter((book) => {
                    return book.status == 0;
                });
                setBook(filteredBooks);
            }
        } else if (selectedTab == "booked-lists") {
            console.log("in");
            filteredBooks = books.filter((book) => book.user_id == auth.id);
            console.log(filteredBooks);
            setBook(filteredBooks);
        }
    }, [selectedTab, bookFilter]);

    return book;
}

export default BookFiltering;
