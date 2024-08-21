import React, { useState } from "react";
import { SearchSvg } from "./Svg";
import ValidationMessage from "./ValidationMessage";

function SearchBook({ books, setBook }) {
    const [searchErr, setSearchErr] = useState("");
    const [searchInput, setSearchInput] = useState("");
    function searchHandler() {
        const trimmedInput = searchInput.trim().toLowerCase();
        if (!trimmedInput) {
            setSearchErr("Input tidak boleh kosong!");
            setBook(books);
            return;
        }
        const searchResult = books.filter((book) =>
            book.name.toLowerCase().includes(searchInput.toLowerCase().trim())
        );
        if (searchResult.length == 0) {
            setSearchErr("Nama buku tidak ada di database!");
            return;
        }
        setSearchErr(`Berhasil menemukan ${searchResult.length} data`);
        setBook(searchResult);
    }
    return (
        <>
            <div className="w-full flex items-end flex-col">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow outline-none"
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                            setSearchErr("");
                        }}
                    />
                    <div className="cursor-pointer" onClick={searchHandler}>
                        <SearchSvg />
                    </div>
                </label>
                <ValidationMessage msg={searchErr} />
            </div>
        </>
    );
}

export default SearchBook;
