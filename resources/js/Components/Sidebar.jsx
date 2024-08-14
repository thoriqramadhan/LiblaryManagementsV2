import React from "react";

function Sidebar({ setTab, selectedTab, setSelectedTab }) {
    function setTab(param, callback) {
        callback(param);
    }
    return (
        <div className="w-full h-[80px] bg-red-100 fixed bottom-0 flex justify-around items-center sm:static sm:h-full sm:w-20 sm:flex-col sm:justify-start sm:gap-y-4 sm:py-[40px] sm:overflow-hidden">
            <div
                className={`p-2 cursor-pointer ${
                    selectedTab == "book-lists" ? "selected-tab" : ""
                }`}
                onClick={() => setTab("book-lists", setSelectedTab)}
            >
                List Book
            </div>
            <div
                className={`p-2 cursor-pointer ${
                    selectedTab == "booked-lists" ? "selected-tab" : ""
                }`}
                onClick={() => setTab("booked-lists", setSelectedTab)}
            >
                Borrowed
            </div>
        </div>
    );
}

export default Sidebar;
