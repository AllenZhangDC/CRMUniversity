"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert("登录功能演示：登录成功！");
            window.location.href = "/";
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-deep-navy flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                    登录你的账户
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-gray-900 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                电子邮箱
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ms-blue focus:border-ms-blue sm:text-sm bg-white dark:bg-gray-800"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                密码
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-ms-blue focus:border-ms-blue sm:text-sm bg-white dark:bg-gray-800"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-ms-blue focus:ring-ms-blue border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                    记住我
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-ms-blue hover:text-blue-500">
                                    忘记密码?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ms-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ms-blue disabled:opacity-50 transition-colors"
                            >
                                {isLoading ? '登录中...' : '登录'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">
                                    还没有账户？
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <Link href="/register" className="text-ms-blue hover:text-blue-500 font-medium">
                                注册新账户
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
