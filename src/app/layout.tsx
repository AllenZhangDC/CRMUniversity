import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CRMUniversity - 微软 Dynamics 365 认证培训 | 零基础转行 IT 高薪',
  description: '无论你是大学毕业生、会计、销售、公司职员……只要你有基本的软件技能，就可以转行Dynamics 365顾问，不需要写代码，平均年薪12万美元！我们的使命是：帮助渴望进入IT领域，但又不想花大量时间学习写代码的人，顺利进入独特的企业CRM低代码开发领域，拿高端工作，走入数字化转型的最前端。',
  keywords: ['Microsoft Dynamics 365 Functional Consultant', '微软Dynamics 365', 'Dynamics CRM', 'Power Platform', 'Power Apps', 'Functional Consultant', '功能顾问', '顾问', '咨询顾问', 'Low Code', 'No Code', '转行', '转码', '转行IT', '软件开发', '高薪', '培训', 'IT培训', '华人转行', '转低代码', 'CRMUniversity'],
  authors: [{ name: 'CRMUniversity', url: 'http://crmuniversity.org' }],
  creator: 'Pure Digits Inc.',
  publisher: 'Pure Digits Inc.',
  openGraph: {
    title: 'CRMUniversity - 微软 Dynamics 365 认证培训',
    description: '无需写代码，平均年薪12万美元。帮助你顺利进入独特的企业CRM低代码开发领域。',
    url: 'http://crmuniversity.org',
    siteName: 'CRMUniversity',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
