import Authenticated from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import React from "react";
// import Dashboard from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/Pages/Dashboard";

function Admin() {
    return (
        <Authenticated>
            <DashboardLayout>
                <div className="">Admin</div>
            </DashboardLayout>
        </Authenticated>
    );
}

export default Admin;
