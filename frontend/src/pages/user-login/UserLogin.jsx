import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const UserLogin = () => {

    const { Login } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {

            email: e.target.email.value,
            password: e.target.password.value,
        };

        Login(newUser);
    };

    return (
        <>
            <div className="mt-20 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Welcome Back !
                    </h2>
                    <h3 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">

                    </h3>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit}>
                            <div>
                            </div>
                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-5 text-gray-700">Email</label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="email" type="email" placeholder="user@gmail.com" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="password" name="password" type="password" placeholder="**************" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                            </div>
                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                        Sign in
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default UserLogin;