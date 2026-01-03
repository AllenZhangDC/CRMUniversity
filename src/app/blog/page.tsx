import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { format } from 'date-fns';

export const dynamic = 'force-dynamic';

export default async function BlogIndex() {
    const posts = await prisma.blogPost.findMany({
        orderBy: { publishedAt: 'desc' },
    });

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-deep-navy py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">最新博客文章</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        分享 CRM 行业动态、技术教程和学员成功转型的真实故事。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                <div className="h-2 bg-gradient-to-r from-purple-400 to-ms-blue" />
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="text-sm text-gray-500 mb-3 block">
                                        {format(new Date(post.publishedAt), 'yyyy年MM月dd日')}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-ms-blue transition-colors text-gray-900 dark:text-white line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto text-ms-blue font-semibold flex items-center">
                                        阅读更多
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
