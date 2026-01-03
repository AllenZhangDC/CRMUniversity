export const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-blue-50 dark:bg-gray-900 border-t border-blue-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-ms-blue">联系我们报名</h2>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-100 dark:border-gray-700">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Lily 老师</h3>
                        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                            <div className="flex items-center justify-center gap-3">
                                <span className="font-semibold w-20 text-right">微信:</span>
                                <span className="font-mono text-ms-blue">CRMUniversity</span>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <span className="font-semibold w-20 text-right">Phone:</span>
                                <a href="tel:+12028239437" className="font-mono hover:text-ms-blue hover:underline transition-colors">
                                    +1 (202)-823-9437
                                </a>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <span className="font-semibold w-20 text-right">Email:</span>
                                <a href="mailto:CRMisYours@gmail.com" className="font-mono hover:text-ms-blue hover:underline transition-colors">
                                    CRMisYours@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-sm text-gray-500">
                                无论是课程咨询、职业规划还是企业内训，欢迎随时联系。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
