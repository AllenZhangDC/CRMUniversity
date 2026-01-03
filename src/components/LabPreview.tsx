"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LabPreview = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">拒绝"只看不练"，从实战中学习</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    体验我们高度仿真的实战实验室。你不仅是在背诵理论，更是在亲手构建真实的企业级解决方案。
                </p>

                <div className="relative mx-auto max-w-5xl">
                    {/* Laptop Frame Mockup */}
                    <div className="relative bg-gray-800 rounded-t-2xl border-4 border-gray-800 shadow-2xl overflow-hidden aspect-video">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-700 rounded-b-md z-20"></div> {/* Camera */}

                        {/* Screen Content */}
                        <div className="relative w-full h-full bg-black">
                            <Image
                                src="/images/dashboard.png"
                                alt="Dynamics 365 Dashboard Lab"
                                fill
                                className="object-cover opacity-90"
                            />
                        </div>

                        {/* Tooltips */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute top-1/4 left-1/4 bg-ms-blue text-white text-sm px-4 py-2 rounded-lg shadow-xl cursor-help z-30 hidden md:block"
                        >
                            第二周课程：亲手配置此仪表盘
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-ms-blue"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute bottom-1/3 right-1/4 bg-purple-600 text-white text-sm px-4 py-2 rounded-lg shadow-xl cursor-help z-30 hidden md:block"
                        >
                            在此处构建自定义 Power Automate 流程
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-purple-600"></div>
                        </motion.div>
                    </div>
                    {/* Base of laptop */}
                    <div className="relative mx-auto bg-gray-700 w-full rounded-b-xl h-4 sm:h-6 md:h-8 shadow-xl">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-b-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
