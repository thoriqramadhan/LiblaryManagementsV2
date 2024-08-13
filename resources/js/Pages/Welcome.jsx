import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    console.log(auth);
    return (
        <>
            <Head title="Welcome" />
            <div className="dark:bg-black dark:text-white/50 h-[100vh] flex">
                <div className="h-full w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <div className="h-full ml-auto w-1/2 px-4 border flex flex-col overflow-hidden">
                    <nav
                        className={`flex justify-end items-center pt-4 text-black/50 ${
                            auth ? "" : "flex gap-x-5"
                        }`}
                    >
                        {auth ? (
                            <Link
                                href={route("dashboard")}
                                className="text-link"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="text-link"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="text-link"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                    <main className="flex-1 grid place-content-center text-3xl font-bold">
                        Welcome to BookManagemetsV2
                    </main>
                </div>
            </div>
        </>
    );
}
