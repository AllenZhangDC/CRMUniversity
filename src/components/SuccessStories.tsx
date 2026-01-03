"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

type Feedback = {
    id: string;
    studentName: string;
    role: string | null;
    content: string;
    rating: number;
    imageUrl: string | null;
}

export const SuccessStories = ({ feedbacks }: { feedbacks: Feedback[] }) => {
    return (
        <section id="success-stories" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">学员成功故事</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {feedbacks.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col"
                        >
                            {item.imageUrl && (
                                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden shadow-inner bg-gray-200">
                                    <Image
                                        src={item.imageUrl}
                                        alt={`Feedback from ${item.studentName}`}
                                        fill
                                        className="object-cover object-top hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            )}

                            <div className="flex-grow">
                                <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative z-10 text-sm leading-relaxed">"{item.content}"</p>
                            </div>

                            <div className="flex items-center pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                                <div className="w-10 h-10 bg-gradient-to-br from-ms-blue to-purple-600 rounded-full mr-3 flex items-center justify-center text-white font-bold text-sm shrink-0">
                                    {item.studentName.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">{item.studentName}</h4>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                                <div className="ml-auto flex text-yellow-500 text-xs">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
