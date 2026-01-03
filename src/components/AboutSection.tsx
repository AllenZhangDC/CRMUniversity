export const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">关于我们</h2>
                        <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                            <p>
                                <strong>CRM University</strong> 是 <strong>Pure Digits Inc.</strong> (<a href="https://puredigits.us" target="_blank" rel="noopener noreferrer" className="text-ms-blue hover:underline">https://puredigits.us</a>) 的一个核心培训品牌。
                            </p>
                            <p>
                                Pure Digits Inc 从2022年11月份开始试运营，并于2023年1月正式成立。
                            </p>
                            <p>
                                我们是一家注册于美国马里兰州（Maryland），专注于<strong>市场营销、软件开发、AI企业应用</strong>以及<strong>CRM 职业培训</strong>的创新型科技公司。我们致力于帮助企业数字化转型，同时为个人提供最前沿的微软技术栈职业教育。
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 relative">
                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center shadow-inner">
                            <span className="text-4xl font-bold text-gray-300 dark:text-gray-600">Pure Digits Inc.</span>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 top-4 -right-4 w-full h-full border-2 border-ms-blue/20 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
