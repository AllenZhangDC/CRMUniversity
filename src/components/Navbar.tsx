import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 acrylic-light dark:acrylic-dark border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-ms-blue">
                            CRMUniversity
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/#courses" className="text-gray-700 dark:text-gray-300 hover:text-ms-blue dark:hover:text-ms-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                课程列表
                            </Link>
                            <Link href="/#roadmap" className="text-gray-700 dark:text-gray-300 hover:text-ms-blue dark:hover:text-ms-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                职业路线图
                            </Link>
                            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-ms-blue dark:hover:text-ms-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                博客文章
                            </Link>
                            <Link href="/#success-stories" className="text-gray-700 dark:text-gray-300 hover:text-ms-blue dark:hover:text-ms-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                学员故事
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-ms-blue text-sm font-medium">
                            登录
                        </Link>
                        <Link href="/#contact" className="bg-ms-blue hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg">
                            联系我们
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
