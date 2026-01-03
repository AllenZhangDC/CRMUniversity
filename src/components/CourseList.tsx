"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

type Course = {
    id: string;
    title: string;
    description: string;
    track: string;
    level: number;
    price: string | null;
}

export const CourseList = ({ courses }: { courses: Course[] }) => {
    return (
        <section id="courses" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">热门课程</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        从初学者入门到高级架构设计，涵盖职业发展的每一个阶段。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="h-2 bg-gradient-to-r from-ms-blue to-cyan-500" />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide 
                    ${course.track === 'developer' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30' :
                                            course.track === 'functional' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30' :
                                                'bg-green-100 text-green-600 dark:bg-green-900/30'}`}>
                                        {course.track === 'developer' ? '开发' : course.track === 'functional' ? '功能' : course.track}
                                    </span>
                                    <span className="text-lg font-bold text-ms-blue">${course.price || '99'}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-ms-blue transition-colors line-clamp-2 h-14">{course.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 text-sm flex-grow">
                                    {course.description}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <span>等级 {course.level}</span>
                                    <Link href={`/courses/${course.id}`} className="text-ms-blue font-semibold hover:underline">
                                        查看详情 &rarr;
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
