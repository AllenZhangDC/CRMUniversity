import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CourseDetail({ params }: { params: { id: string } }) {
    const { id } = await params;

    const course = await prisma.course.findUnique({
        where: { id }
    });

    if (!course) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-deep-navy pb-20">
            {/* Course Hero */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="max-w-3xl">
                        <span className="text-ms-blue font-bold tracking-wide uppercase text-sm mb-2 block">{course.track} Track - Level {course.level}</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">{course.title}</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{course.description}</p>
                        <div className="flex flex-col gap-4 mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg">
                            <h3 className="font-bold text-lg text-ms-blue">报名咨询请联系: Lily 老师</h3>
                            <div className="space-y-2 text-gray-700 dark:text-gray-300">
                                <p className="flex items-center gap-2">
                                    <span className="font-semibold w-16">微信:</span>
                                    <span>CRMUniversity</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="font-semibold w-16">Phone:</span>
                                    <a href="tel:+12028239437" className="hover:text-ms-blue">+1(202)-823-9437</a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="font-semibold w-16">Mail:</span>
                                    <a href="mailto:CRMisYours@gmail.com" className="hover:text-ms-blue">CRMisYours@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-6">课程详情</h2>
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="whitespace-pre-wrap text-gray-600 dark:text-gray-300 leading-relaxed">
                                {course.details || "暂无详细介绍。"}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8">
                        <h2 className="text-2xl font-bold mb-6">课程大纲</h2>
                        <div className="space-y-4">
                            {course.syllabus ? (
                                course.syllabus.split('\n').map((item: string, i: number) => (
                                    <div key={i} className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="mr-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-ms-blue text-sm font-bold">
                                            {i + 1}
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-200 mt-1">{item}</span>
                                    </div>
                                ))
                            ) : (
                                <p>暂无大纲。</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sticky top-24">
                        <h3 className="font-bold text-lg mb-4">包含内容</h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8">
                            <li className="flex items-center">✓ 20 小时高清视频</li>
                            <li className="flex items-center">✓ 完整项目源码</li>
                            <li className="flex items-center">✓ 课件下载 (.pptx, .pdf)</li>
                            <li className="flex items-center">✓ 讲师 1-on-1 答疑</li>
                            <li className="flex items-center">✓ 结业证书</li>
                        </ul>
                        <Link href="https://adilo.bigcommand.com/watch/c2Oc2Q2W" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            试看课程
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
