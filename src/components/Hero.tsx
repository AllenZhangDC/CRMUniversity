"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white dark:bg-deep-navy">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-ms-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            <span className="block text-gray-900 dark:text-white">精通 Microsoft Dynamics 365</span>
                            <span className="block text-gradient">开启面向未来的职业生涯</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
                            真实的 ERP & CRM 项目实战培训。从零基础新手到微软认证顾问，我们提供最专业的职业晋升路径。
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/#contact" className="px-8 py-4 bg-ms-blue hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                联系我们
                            </Link>
                            <Link href="#roadmap" className="px-8 py-4 bg-white dark:bg-gray-800 text-ms-blue dark:text-white border border-gray-200 dark:border-gray-700 font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                                查看职业路线
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative w-full aspect-square max-w-lg mx-auto"
                        >
                            <Image
                                src="/images/hero.png"
                                alt="Dynamics 365 Abstract Tech"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
