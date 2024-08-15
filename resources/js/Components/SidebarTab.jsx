import React, { Children } from "react";

function SidebarTab({ setTab, selectedTab, setSelectedTab, using, children }) {
    return (
        <div
            className={`p-2 cursor-pointer w-full h-full group sm:w-1/2 sm:rounded-full transition-all duration-300 sm:bg-[#6b7280] hover:bg-slate-600 flex items-center justify-center ${
                selectedTab == using ? "selected-tab" : ""
            }`}
            onClick={() => setTab(using, setSelectedTab)}
        >
            {children}
        </div>
    );
}

export default SidebarTab;
