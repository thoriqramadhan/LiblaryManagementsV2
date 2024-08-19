import { router } from "@inertiajs/react";
import React, { Children, useEffect, useState } from "react";

function SidebarTab({ setTab, selectedTab, setSelectedTab, using, children }) {
    const [newClass, setNewClass] = useState("");
    function onClickConfig() {
        if (using === "admin-lists") {
            setNewClass("selected-tab");
            router.visit("/admins");
            // router.get("/dashboard/admins/lists");
        } else {
            setNewClass(selectedTab === using ? "selected-tab" : "");
            setTab(using, setSelectedTab);
        }
    }
    return (
        <div
            className={`p-2 cursor-pointer w-full h-full sm:h-auto group sm:w-1/2 sm:rounded-full transition-all duration-300 sm:bg-[#6b7280] hover:bg-slate-600 flex items-center justify-center ${newClass}`}
            onClick={onClickConfig}
        >
            {children}
        </div>
    );
}

export default SidebarTab;
