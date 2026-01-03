import { prisma } from "@/lib/prisma";
import { Hero } from "@/components/Hero";
import { Roadmap } from "@/components/Roadmap";
import { LabPreview } from "@/components/LabPreview";
import { TrustSection } from "@/components/TrustSection";
import { CourseList } from "@/components/CourseList";
import { SuccessStories } from "@/components/SuccessStories";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const courses = await prisma.course.findMany({
    orderBy: { level: 'asc' }
  });

  const formattedCourses = courses.map(c => ({
    ...c,
    price: c.price ? c.price.toString() : '99.00'
  }));

  const feedbacks = await prisma.feedback.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustSection />
      <AboutSection />
      <CourseList courses={formattedCourses} />
      <Roadmap />
      <LabPreview />
      <SuccessStories feedbacks={feedbacks} />
      <ContactSection />
    </div>
  );
}
