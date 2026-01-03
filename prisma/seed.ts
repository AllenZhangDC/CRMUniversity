import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});

async function main() {
    console.log('Start seeding ...');

    // Create Admin User
    const adminEmail = "admin@crmuniversity.org";
    const existingUser = await prisma.user.findUnique({ where: { email: adminEmail } });

    if (!existingUser) {
        await prisma.user.create({
            data: {
                email: adminEmail,
                password: "password123",
                name: "Admin User",
                role: "admin"
            }
        });
    }

    // Seed Feedback
    const feedbacks = [
        {
            studentName: "微信群友",
            role: "D365 学习小组",
            content: "感谢老师的分享，PL-400的课程非常实用，帮助我们公司解决了几个关键的插件问题。",
            rating: 5,
            imageUrl: "/images/feedback/feedback_2.png"
        },
        {
            studentName: "匿名学员",
            role: "CRM 顾问",
            content: "从小白到拿Offer，只用了3个月。实战项目真的很有用！",
            rating: 5,
            imageUrl: "/images/feedback/feedback_3.png"
        },
        {
            studentName: "Allen Zhang",
            role: "Alumni / 资深顾问",
            content: "两年待业，6个月努力，会计转行到IT，工资翻倍！CRMUniversity 是我职业生涯的转折点。",
            rating: 5,
            imageUrl: "/images/feedback/feedback_1.png"
        }
    ];

    for (const f of feedbacks) {
        const exists = await prisma.feedback.findFirst({ where: { imageUrl: f.imageUrl } });
        if (!exists) {
            await prisma.feedback.create({ data: f });
        }
    }

    // Seed Courses
    const courses = [
        {
            title: "PL-400 微软认证代码真题讲解",
            description: "深入解析 PL-400 认证考试中的代码相关题目，包括 C#、JavaScript 和 Power Fx。",
            details: "PL400题目非常多，这一部分，我们主要把代码相关的题目拿出来讲解一下。所谓的代码相关的就是指和C#, JavaScript, Power Fx相关的题目都拿出来了。目前只是讲了一部分，后面会继续更新。可以感觉每做出来一个题目，就又掌握一个知识点，这个感觉还挺好。",
            syllabus: "1. C# 插件代码分析\n2. JavaScript 客户端脚本题解\n3. PCF 控件相关题目\n4. Power Fx 表达式解析\n5. 异步/同步处理逻辑\n6. 错误处理与调试",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            track: "developer",
            level: 3,
            price: 99.00
        },
        {
            title: "Power Automate 完全开发指南",
            description: "从基本原理到自定义连接器，涵盖 Power Automate 在实际项目中的高级应用。",
            details: "这个课程讲的比较深入：\n01 基本原理部分稍微深入了一点，大致看懂即可，不需要深究。\n02-03 介绍了 Power Automate 的基本使用和变量、流程控制、函数，这些都是比较重要的。\n04 讲了如何创建自己的 Connector，然后如何在 Canvas App 里面使用这个 Connector。\n05 讲解了在广告项目里面如何使用 Power Automate Flow，这里面涉及到了几个重要的，很难的知识点。",
            syllabus: "1. 基本原理与架构\n2. 变量、流程控制与函数\n3. 触发器与操作详解\n4. 自定义连接器 (Custom Connector) 开发\n5. Canvas App 集成\n6. 广告项目实战：复杂业务逻辑实现",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            track: "functional",
            level: 1,
            price: 99.00
        },
        {
            title: "C# 语法与 CRM 开发全攻略",
            description: "专为 Dynamics 365 开发者设计的 C# 语言深度教程。",
            details: "不需要从头学习庞大的 C# 体系，本课程只教你 CRM 开发用得上的 C# 知识。包括 LINQ, 泛型, 委托, 异步编程等核心内容。课程包含 30 节讲座，适合初学者。",
            syllabus: "1. C# 基础语法\n2. 面向对象编程\n3. 泛型与集合\n4. LINQ 查询\n5. CRM SDK 常用类库\n6. 插件开发实战",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            track: "developer",
            level: 1,
            price: 99.00
        },
        {
            title: "Power BI 实战数据分析",
            description: "使用 Power BI 将 CRM 数据转化为可视化洞察。",
            details: "学习数据建模、DAX 公式、报表设计以及如何将 Power BI 嵌入到 Dynamics 365 中。",
            syllabus: "1. Power BI Desktop 基础\n2. 数据获取与转换 (Power Query)\n3. 数据建模\n4. DAX 基础与进阶\n5. 可视化图表制作\n6. 发布与分享",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            track: "analyst",
            level: 2,
            price: 99.00
        },
        {
            title: "CRM 数据迁移：ETL & SSIS 高级教程",
            description: "大型企业级数据迁移实战策略与实施。",
            details: "掌握使用 KingswaySoft 和 SSIS 进行复杂数据迁移的技巧。处理数据映射、错误捕获、性能优化。",
            syllabus: "1. ETL 概念与 SSIS 介绍\n2. KingswaySoft 连接器\n3. 数据清洗与转换\n4. 增量迁移策略\n5. 错误处理与日志\n6. 性能调优",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            track: "architect",
            level: 4,
            price: 99.00
        },
    ];

    for (const c of courses) {
        await prisma.course.deleteMany({ where: { title: c.title } });
        await prisma.course.create({ data: c });
    }

    // Seed Blog Posts
    const posts = [
        {
            title: "戏说C#中的“数组”",
            slug: "c-sharp-array-explained",
            excerpt: "数组，相当于一个代号，比如军队会给自己的某一次行动起一个代号，“沙漠之鹰”行动，而且这个行动有一个特殊的使命，里面有特殊的符合某个特质的人才能进去。",
            content: `编程语言也是一个语言，而这个语言是用来描述我们人类现实中的现象的。而且对于人类某些特殊的现象，人类给这些现象起了特殊的名字，那在计算机里面也是这样，也给他们起了特殊的名字，比如数组 （英文叫 Array） 就是这样的。\n\n数组，相当于一个代号，比如军队会给自己的某一次行动起一个代号，比如叫“沙漠之鹰”行动，而且这个行动有一个特殊的使命，里面有特殊的符合某个特质的人才能进去。\n\n数组也是指代一个具有特殊结构的一个东西，什么特殊结构呢？它非常类似军训的时候，要排队，这个队伍，就非常类似数组。\n\n1. 这个东西是由一排元素顺序的构成。他里面的元素可以是任何基本类型的元素，比如是int, float, object, 但是必须是同类型的元素。这个就类似军队里面，必须是男生和男生一排，女生和女生一排，不能混编。\n2. 这一串东西要有一个固定长度，定下来之后就不能随便改了，类似排队的时候10人一队。\n\n好，大家看到上面这个数组其实就是对现实中队伍这种现象的一个抽象。那计算机里面为了描述这种队伍，就用了array数组这个词。\n\n\`int[] ManArray; //这个就是对队伍的描述\`\n\nManArray = new int[] {3, 4, 6, 8, 3, 5}; \n\nConsole.WriteLine(ManArray[3]); // 结果是 8`,
            coverImage: null,
            seoTitle: "C# 数组(Array)通俗讲解 - 零基础学编程 | CRM University",
            seoDesc: "用通俗易懂的“列队”比喻来讲解C#中的数组概念。帮助非计算机背景的学员快速理解编程核心概念。CRM University 零基础转行 IT 必读。",
            seoKeywords: "C#数组, C# Array, 编程入门, C#基础, 零基础学代码"
        },
        {
            title: "国内CRM相关职位招聘火热！最高月薪6万！",
            slug: "china-crm-jobs-hot",
            excerpt: "今天看了一下猎聘里面关于D365 CRM 的相关职位，薪酬都非常高。最高的是小米的，达到月薪6万！",
            content: `今天看了一下猎聘里面关于D365 CRM 的相关职位，还是不少的，而且薪酬也都不低。我看了最高的是小米的，达到月薪6万！而且学历要求是大专！\n\n【薪酬分布】\n薪酬最少11k, 基本上在20k~50k之间，根据所在地区的不同会有所不同。北上广深这些一线城市要比普通城市高1～2万/月薪。\n\n【地域分布】\n更值得关注的是，这些职位已经不仅仅在一线城市，在一些二线、三线城市也开始有了这方面的招聘需求，比如杭州、宁波、合肥、长沙等地也都有相关职位的招聘了。\n\n【招聘难度】\n很有意思的是，这些职位的招聘进展都非常缓慢，我们同学问了猎头，猎头说这些职位都招聘了甚至半年了，都没有人来，并非这个职位的技能要求太高，而是的确没人懂！所以，这个领域目前的特点就是懂的人太少，是在是人少、钱多！`,
            coverImage: null,
            seoTitle: "2024 国内 CRM 顾问薪资揭秘 - 最高月薪6万 | CRM University",
            seoDesc: "揭秘2024年国内 Microsoft Dynamics 365 CRM 顾问的就业市场与薪资水平。小米等大厂高薪急招，人才缺口巨大。了解 CRM 行业前景。",
            seoKeywords: "CRM顾问薪资, Dynamics 365 就业, CRM 招聘, IT高薪职位, 小米招聘"
        },
        {
            title: "我是怎么做到：两年待业，6个月努力，会计转行到IT，工资翻倍的",
            slug: "accountant-to-it-consultant-success-story",
            excerpt: "分享一位会计背景的学员，如何在待业两年后，通过6个月的 D365 学习，成功转行 IT 顾问并实现工资翻倍的真实经历。",
            content: `(本文由学员投稿)\n\n我本科是学会计的，毕业后做过几年会计，但是工作一直不温不火，后来因为生孩子，在家待业了整整两年。\n\n重返职场的时候非常迷茫，不知道还能干什么。偶然的机会了解到了 CRM University 的 Dynamics 365 课程。听说不需要写代码也能做 IT 顾问，抱着试一试的心态报了名。\n\n刚开始学的时候确实觉得很难，很多概念都不懂。但是 Allen 老师讲得非常细致，而且有很多实战的案例。我跟着视频一步一步做，遇到不懂的就在群里问。\n\n大概学了3个月左右，我考过了 MB-910 和 PL-200。然后就开始准备简历找工作。\n\n面试的时候，面试官问了很多项目实战的问题，幸好课程里都讲过。最后我成功拿到了一家咨询公司的 Offer，起薪就比我以前做会计翻了一倍！\n\n如果你也在迷茫，不妨试试这条路。`,
            coverImage: null,
            seoTitle: "会计转行 IT 成功案例 - 两年待业到工资翻倍 | CRM University",
            seoDesc: "真实案例分享：一位待业两年的宝妈，如何通过6个月的 Microsoft Dynamics 365 学习，从零基础会计成功转行 IT 顾问，实现薪资翻倍。",
            seoKeywords: "会计转行IT, 宝妈转行, 零基础转码, Dynamics 365 成功案例, 职业转型"
        },
        {
            title: "中电金信CRMUniversity宣讲会成功举行！PP职位薪酬上不封顶！",
            slug: "zhongdian-jinxin-recruitment",
            excerpt: "这是企业在我们CRM University的举办的第一次宣讲会，而且是大型央企。来自中电的两位同事参加了这次宣讲会，介绍了中电集团的情况、软件研发情况、待遇福利等。",
            content: `这是企业在我们CRM University的举办的第一次宣讲会，而且是大型央企。来自中电的负责企业关系的，和HR部门的两位同事参加了这次宣讲会，介绍了中电集团的情况，他们的软件研发情况、团队架构、企业发展、公司福利等等，内容满满！\n\n此次宣讲会重点介绍了 Power Platform (PP) 相关职位的招聘需求。作为企业数字化转型的核心技术之一，Power Platform 开发者的薪酬在市场上极具竞争力，企业更是给出了“薪酬上不封顶”的承诺，足见对人才的渴求。\n\nCRM University 作为专业的 D365 人才培养基地，将继续与更多名企合作，为学员输送高质量的就业机会。`,
            coverImage: "/images/blog/zhongdian-cover.png",
            seoTitle: "中电金信招聘宣讲会 - D365 & Power Platform 高薪职位 | CRM University",
            seoDesc: "大型央企中电金信在 CRM University 举办招聘宣讲会。Power Platform 职位薪酬上不封顶，急招 Dynamics 365 开发与顾问人才。",
            seoKeywords: "中电金信招聘, Power Platform 职位, CRM 顾问招聘, 央企内推, IT招聘宣讲会"
        },
        {
            title: "开启稀缺职场之路：D365顾问的职业机遇",
            slug: "rare-career-opportunity-d365",
            excerpt: "当面对众多职业选择时，我们的导师特意选择了CRM，这是一个相对冷门但充满潜力的职业方向。背后蕴含着一种深刻的职业哲学！",
            content: `当面对众多职业选择，如软件开发、数据分析师、数据科学家等时，我们的导师特意选择了CRM，这是一个相对冷门但充满潜力的职业方向。或许你会好奇为什么会作出这样的选择？\n\n背后蕴含着一种深刻的职业哲学！在计算机领域，我们坚信选择那些小众但具有巨大发展潜力、正在蓬勃发展的领域，比起选择那些已经长成大树的领域更胜一筹。\n\n所谓“水涨船高”并不是因为我们个人努力多大，而是因为潮水本身的涨势抬高了我们的船只。企业CRM正是数字化转型的核心，而数字化转型毫无疑问是下一个巨大浪潮。\n\n有趣的是，了解这一领域的人非常有限，这创造了信息不对称，而信息不对称则埋藏着无限机会！技能本身并不会让你更有价值，稀缺的技能才会让你更有价值。D365顾问，就是我们的稀缺职业机遇。`,
            coverImage: null,
            seoTitle: "职业选择哲学：为什么选择做 Dynamics 365 顾问？ | CRM University",
            seoDesc: "深度解析 IT 职业发展路径。为什么选择相对冷门的 CRM 赛道比热门的纯开发更有潜力？掌握稀缺技能，抓住数字化转型红利。",
            seoKeywords: "IT职业规划, 稀缺技能, 职业选择, D365顾问前景, 数字化转型机遇"
        },
        {
            title: "C#知识乾坤大挪移！远超自学的效能！",
            slug: "c-sharp-knowledge-transfer",
            excerpt: "Allen 老师采取了一种为我们CRM学生独身定做的一个学习C#的方式，这个入门C#的方式，完完全全一个不一样的角度。",
            content: `Allen 老师，采取了一种为我们CRM学生独身定做的一个学习C#的方式，这个入门C#的方式，完完全全一个不一样的角度，我敢打赌，全网没有任何人，是从这个角度讲C#的。\n\n这个方式有几个特点：\n1. 能够利用我们已有的CRM的知识，把CRM领域学习的知识和思路，一下子迁移到了C#，甚至是任何一个程序语言领域了，让我们一下子可以理解非常多C#里面的重要的概念和思路。\n2. 在理解C#的同时，我们的CRM的知识再一次扩展开了，让我们对CRM的知识的理解也更加深入。\n3. 一般的学习一个新的东西，都是一点一点的，从下往上，慢慢积累的学习的。而我们这里的学习方式，则不然，是从C#知识的中层降落，是从这个思维高度开始来学习C#的，所以，我们一上来就能看到C#的整个森林，而不是学习了很久看到的都是树木。\n\n祝大家也能学会把已有的知识能乾坤大挪移到C#！`,
            coverImage: null,
            seoTitle: "零基础学 C# 的独特方法 - 知识乾坤大挪移 | CRM University",
            seoDesc: "CRM University 独创的 C# 教学法，帮助 Dynamics 365 学员利用已有知识快速掌握编程核心概念。效率远超传统自学方式。",
            seoKeywords: "C#学习方法, 高效学编程, Dynamics 365 开发, 知识迁移"
        },
        {
            title: "Developer、QA、DA/Data Engineer在美国2023薪酬对比和转型出路",
            slug: "it-career-salary-comparison-2023",
            excerpt: "IT领域每个方向都有自己的痛苦，都在想找一个能平衡工作和生活的位置。本文深度对比这几类职位的薪酬和转型CRM/ERP的机会。",
            content: `IT领域每个方向都有自己的痛苦，都在想找一个能平衡工作和生活的位置，然而，这样的机会并不多。\n\n**痛点分析：**\n1. 【难】软件开发难度大，成就感低。\n2. 【累】厌倦加班，青春饭，家庭平衡难。\n3. 【发展】QA/测试天花板低，感觉不踏实。\n4. 【可替代】DA/Data Engineer 容易被替代，往上走难。\n5. 【钱】工资瓶颈，大龄被裁风险。\n\n**转型方向：**\n成为复合型人才，懂技术更懂业务（如微软CRM）。\n- 对专项代码技能要求低（C#要求不高）。\n- 薪水更高：CRM/ERP 是企业资金密集投入领域。\n- 更加轻松：企业运营核心，资源配置足。\n\n**适合人群：**\n.net开发人员、传统QA、传统DA、非IT想转码者、CS毕业生。\n\n**前景：**\n就业机会巨多，竞争者少，薪酬高！`,
            coverImage: null,
            seoTitle: "2023 美国 IT 薪酬对比 - Developer vs QA vs Data Engineer | CRM University",
            seoDesc: "深度分析2023年美国IT行业各类职位（开发、测试、数据分析）的薪酬待遇与职业痛点，揭示转型 Microsoft Dynamics 365 顾问的高薪蓝海机会。",
            seoKeywords: "IT薪酬对比, 程序员转型, QA转行, 数据分析师职业规划, Dynamics 365 薪资"
        },
        {
            title: "AI时代的“转码”方向-01：6次课的学习，能做出什么样的App?",
            slug: "ai-era-coding-transformation-powerapps",
            excerpt: "AI时代的“转码”，我们应该选择新的转码方向–Power Apps！培训证明，仅仅经过了6次课的学习，同学们就已经能做出来达到企业级App的水平！",
            content: `AI时代的“转码”，我们应该选择新的转码方向–Power Apps！培训证明，仅仅经过了6次课的学习，同学们就已经能做出来达到企业级App的水平！\n\n微软 Power Platform是一个低代码开发平台，就是说以后会有大量的开发人员，是不需要像传统的软件开发人员一样写编程语言的，他们仅仅需要会使用Excel里面的那种函数就可以了，Power Apps就是使用这些简单的函数做软件开发的，我们成为 **低代码开发人员**。\n\n他们会把更多精力放在软件的业务逻辑上，而不是写代码上。但是，他们同样是软件开发人员，而且薪酬比传统的人更高！ \n\n所以，如果你不想投入那么多精力去“转码”了，那就来“转低代码”吧！这个是未来！仅需4～6个月你就可以学出来，性价比远高于普通码农！`,
            coverImage: null,
            seoTitle: "AI 时代转码新方向 - 6节课掌握 Power Apps 开发 | CRM University",
            seoDesc: "在 AI 时代，与其死磕传统编程，不如拥抱低代码。展示学员仅用6次课完成的企业级 Power Apps 项目，验证低代码开发的超高性价比。",
            seoKeywords: "Power Apps 培训, 低代码开发, 转码新方向, AI时代就业, 零基础开发 App"
        },
        {
            title: "一张图搞懂Power Platform, D365的关系",
            slug: "understand-power-platform-d365-relationship",
            excerpt: "简单来说，Power Platform 是从 D365 中提取出来的用户定制功能。现有 D365, 后有 Power Platform。",
            content: `**Dynamics 365** 是一套企业级的应用程序套件，集成了CRM和ERP。旨在帮助企业在销售、服务、财务等领域实现数字化转型。\n\n**Power Platform** 是一个低代码/无代码开发平台，包括 Power Apps, Power Automate, Power BI, Power Virtual Agents。\n\n**两者关系：**\n1. **时间关系**：先有D365，后有PP。PP是从D365中提取出的定制化能力。\n2. **功能关系**：Power Platform 是 D365 的扩展和开发工具。D365 的很多底层就是 Power Platform (Dataverse)。\n\n**五大协同效应：**\n1. 数据整合\n2. 应用定制\n3. 流程自动化\n4. 数据分析可视化\n5. 智能聊天机器人\n\n以前的 *Dynamics 365 Functional Consultant* 正在逐渐演变为 *Power Platform Functional Consultant*，这正是我们培训的核心方向。`,
            coverImage: null,
            seoTitle: "一张图看懂 Dynamics 365 与 Power Platform 的关系 | CRM University",
            seoDesc: "深入浅出解析 Microsoft Dynamics 365 与 Power Platform 的技术渊源与功能关系。帮助初学者快速理清微软商业应用生态架构。",
            seoKeywords: "Dynamics 365 vs Power Platform, Dataverse, 微软技术架构, CRM 开发基础"
        },
        {
            title: "为什么30~40岁女性更适合从事D365顾问工作",
            slug: "why-women-30-40-fit-d365-consultant",
            excerpt: "Power Platform Functional Consultant 需要将技术和业务流程相结合。中年女性在业务理解、沟通协调和稳定性上的优势，使其成为该领域的不二人选。",
            content: `随着数字化转型加速，Power Platform Functional Consultant 职业前景广阔。相比纯开发，这个职位更注重业务流程。\n\n**为什么 30~40 岁女性更适合？**\n\n1. **行业经验丰富**：职场积累的业务知识对理解客户需求至关重要。\n2. **团队融合剂**：成熟女性更擅长在以男性为主的研发团队中协调关系，氛围更融洽。\n3. **技能匹配**：Low Code 开发所见即所得，偏向感性思维与逻辑思维的结合，不需要枯燥的代码逻辑，更适合女性。\n4. **稳定性高**：生活状态稳定，能专注深入理解业务，提供最佳实践。\n5. **沟通能力强**：顾问的核心是沟通，女性天生的亲和力与同理心是巨大的职业优势。\n\n这是一个不需要拼体力、拼发际线，而是拼经验、拼理解力的金领职业。`,
            coverImage: null,
            seoTitle: "女性 IT 职业规划 - 为什么 30+ 给更适合做 CRM 顾问？ | CRM University",
            seoDesc: "深度分析为何 30-40 岁女性在 Dynamics 365 顾问领域具有独特优势。发挥沟通与业务经验特长，避开年龄焦虑，实现职业生涯第二春。",
            seoKeywords: "女性转行IT, 30岁转行, 适合女性的IT工作, D365 顾问, 宝妈就业"
        },
        {
            title: "独家行业分析：“转码” vs “转低代码”",
            slug: "coding-vs-low-code-industry-analysis",
            excerpt: "转码难度大、竞争激烈，是学霸的游戏。而“转低代码”是更易掌握、前景广阔且未被大众熟知的蓝海选择。",
            content: `**一、转码 (Traditional Coding)**\n需要投入大量时间精力，竞争激烈（学霸游戏），且容易面临“35岁危机”。对于文科生或非计算机背景的人来说，性价比越来越低。\n\n**二、低代码 (Low-Code)**\n这是一个为了“转行”而生的新领域！\n- **门槛低**：图形化界面，减少手写代码，文科生也能快速上手。\n- **关注业务**：从繁琐的代码中解放，专注于解决实际业务问题（这才是企业付费的核心）。\n- **前景广**：从企业应用到移动端，应用场景无限。\n\n**三、Power Platform**\n微软的 Power Platform 是全球最大的低代码平台，背靠 Office 365 和 Dynamics 365 的庞大用户群，有着明确且高端的就业市场。\n\n如果你是一名文科生，或者想拓展职业空间，**转低代码**是比强行转码更明智的选择。`,
            coverImage: null,
            seoTitle: "转码还是转低代码？独家行业前景分析 | CRM University",
            seoDesc: "深度对比传统编程（转码）与低代码开发（Low-Code）的就业难度与前景。揭示为何低代码是文科生和非技术背景人士转行 IT 的最佳捷径。",
            seoKeywords: "转码 vs 低代码, Low Code 前景, 微软 Power Platform, 文科生转行 IT"
        }
    ];

    for (const p of posts) {
        await prisma.blogPost.deleteMany({ where: { slug: p.slug } });
        await prisma.blogPost.create({ data: p });
    }

    console.log('Seeding finished.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
