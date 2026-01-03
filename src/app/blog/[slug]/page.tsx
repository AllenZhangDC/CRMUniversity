import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { format } from "date-fns";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await prisma.blogPost.findUnique({
        where: { slug: slug },
    });

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.seoTitle || post.title,
        description: post.seoDesc || post.excerpt,
        keywords: post.seoKeywords ? post.seoKeywords.split(',') : undefined,
        openGraph: {
            title: post.seoTitle || post.title,
            description: post.seoDesc || post.excerpt || undefined,
            type: 'article',
            publishedTime: post.publishedAt.toISOString(),
            authors: ['Allen Zhang'], // Assuming Allen is the main author based on scraper
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = await prisma.blogPost.findUnique({
        where: { slug: slug },
    });

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white dark:bg-deep-navy pb-20 pt-10">
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-10 text-center">
                    <div className="text-sm text-gray-500 mb-4">
                        发布于 {format(new Date(post.publishedAt), 'yyyy年MM月dd日')} · 作者: Allen Zhang
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                    {post.excerpt && (
                        <p className="text-xl text-gray-600 dark:text-gray-300 italic">
                            {post.excerpt}
                        </p>
                    )}
                </header>

                <div className="prose prose-lg dark:prose-invert mx-auto">
                    {/* For now, just rendering text. In a real app, use a markdown renderer like react-markdown */}
                    {post.content.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </article>
        </div>
    );
}
