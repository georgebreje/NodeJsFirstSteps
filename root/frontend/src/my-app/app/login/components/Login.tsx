"use client"
import React, { FC, FormEvent, useState } from "react";


export const Login: FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            body: JSON.stringify({
                username, password
            })
        })

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-white dark:bg-blue-800">
            <div className="w-full max-w-md">
                <div className="bg-white px-6 py-8 rounded-lg shadow-md">
                    <h2 className="text-center text-2xl font-semibold text-gray-700 dark:text-white mb-6">Sign in to your account</h2>
                    <form>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" id="email" type="email" name="email" required />
                            </div>
                            <div>
                                <label className="block text-gray-900 font-semibold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="w-full px-4 py-2 border text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" id="password" type="password" name="password" required />
                            </div>
                            <div>
                                <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type="submit">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="text-gray-700 text-center mt-6">
                        Don't have an account?
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
