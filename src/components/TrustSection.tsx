export const TrustSection = () => {
    return (
        <section className="py-12 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center items-center">
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                        <div className="text-3xl font-bold text-ms-blue mb-1">85%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">3个月内成功就业</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                        <div className="text-3xl font-bold text-green-500 mb-1">+40%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">平均薪资涨幅</div>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                        <div className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-xs font-mono mb-2 text-gray-500">认证备考专精</div>
                        <span className="font-bold text-lg">MB-910 / PL-200</span>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                        <div className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-xs font-mono mb-2 text-gray-500">校友就职于</div>
                        <span className="font-bold text-lg text-gray-500">Microsoft · Avanade · EY</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
