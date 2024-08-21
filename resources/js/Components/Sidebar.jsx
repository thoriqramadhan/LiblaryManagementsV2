import React, { useContext } from "react";
import { HomeSvg, ListSvg, ServiceSvg } from "./Svg";
import { AuthContext } from "@/Pages/Auth/AuthProvider";
import SidebarTab from "./SidebarTab";

function Sidebar({ setTab, selectedTab, setSelectedTab }) {
    function setTab(param, callback) {
        callback(param);
    }

    const auth = useContext(AuthContext);
    return (
        <div className="z-10 w-full h-[80px] bg-white border-t shadow-md fixed bottom-0 flex justify-around items-center sm:static sm:h-full sm:w-20 sm:flex-col sm:justify-start sm:gap-y-4 sm:pt-[40px] sm:overflow-hidden">
            <SidebarTab
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                setTab={setTab}
                using="book-lists"
            >
                <span className="group-hover:text-white  sm:hidden">
                    List Book
                </span>
                <HomeSvg
                    color="white"
                    height="25"
                    width="25"
                    className="hidden sm:inline-block"
                />
            </SidebarTab>
            <SidebarTab
                setTab={setTab}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                using="booked-lists"
            >
                <span className="group-hover:text-white sm:hidden">
                    Borrowed
                </span>
                <ListSvg
                    height="25"
                    width="25"
                    color="white"
                    className="hidden sm:inline-block"
                />
            </SidebarTab>
            {auth.isAdmin ? (
                <SidebarTab
                    setTab={setTab}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                    using="admin-lists"
                >
                    <span className="group-hover:text-white sm:hidden">
                        Admin
                    </span>
                    <ServiceSvg
                        height="25"
                        width="25"
                        color="white"
                        className="hidden sm:inline-block"
                    />
                </SidebarTab>
            ) : (
                ""
            )}
        </div>
    );
}
export default Sidebar;
