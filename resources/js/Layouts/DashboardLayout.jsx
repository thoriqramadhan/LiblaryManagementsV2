import Sidebar from "@/Components/Sidebar";
import React from "react";

function DashboardLayout({ children, ...props }) {
    return (
        <div className="relative h-[100vh] sm:flex">
            {/* sidebar */}

            <Sidebar
                selectedTab={props.selectedTab}
                setSelectedTab={props.setSelectedTab}
            />

            {/* content */}
            <main className="h-[100vh] pb-[80px] pt-10 sm:flex-1 sm:px-10 sm:py-5 flex flex-col gap-y-4">
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;
