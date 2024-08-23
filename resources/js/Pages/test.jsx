import React from "react";

function test() {
    return (
        <>
            <div className="flex w-full h-full overflow-y-hidden bg-gray-600 p-10">
                <div className="w-full h-full bg-gray-400">
                    <div className="w-full h-[65px] bg-pink-100 shadow-lg rounded-xl flex items-center justify-start p-5 mb-5">
                        <h1 className="font-extrabold text-pink-600 text-2xl">
                            Tambah User
                        </h1>
                    </div>
                    <div className="w-full h-full overflow-y-hidden bg-white shadow-xs rounded-xl flex items-center justify-start p-16">
                        <div className=" w-full h-full px-10">
                            <input
                                type="checkbox"
                                id="dropdownToggle"
                                className="hidden"
                            />
                            <label
                                for="dropdownToggle"
                                className="flex cursor-pointer items-center rounded-md bg-white outline outline-gray-200 text-gray-900 p-3 transition duration-300 hover:bg-gray-100"
                            >
                                <span className="font-semibold">Pengajuan</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="ml-auto h-4 w-4 transform transition-transform duration-300"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 9l-7.5 7.5-7.5-7.5"
                                    ></path>
                                </svg>
                            </label>
                            <div className="dropdown-content">
                                <a
                                    href="#"
                                    className="block rounded-md bg-white p-2 text-gray-900 hover:text-pink-600 my-5"
                                >
                                    Infrastruktur
                                </a>
                            </div>

                            <div className="relative mb-6">
                                <input
                                    className="shadow appearance-none border border-2 rounded-xl w-full py-3 pl-10 pr-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Masukkan nama lengkap"
                                />
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <i className="fas fa-user text-gray-500"></i>
                                </div>
                            </div>

                            <div className="relative mb-6">
                                <input
                                    className="shadow appearance-none border border-2 rounded-xl w-full py-3 pl-10 pr-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Masukkan Email"
                                />
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <i className="fa-regular fa-envelope text-gray-500"></i>
                                </div>
                            </div>

                            <div className="relative mb-6">
                                <input
                                    className="shadow appearance-none border border-2 rounded-xl w-full py-3 pl-10 pr-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Masukkan Password"
                                />
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <i className="fa-solid fa-lock text-gray-500"></i>
                                </div>
                            </div>

                            <div className="flex w-full h-auto justify-center gap-5 mt-16">
                                <button className="w-[170px] py-2 outline outline-pink-600 bg-pink-50 rounded rounded-xl">
                                    Kembali ke Beranda
                                </button>

                                <button className="w-[170px] outline text-white outline-pink-600 bg-pink-600 rounded rounded-xl hover:shadow-xl">
                                    Daftar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default test;
