"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const tracks = [
    {
        id: 'functional',
        title: '功能顾问 (Functional)',
        icon: '🧩',
        color: 'from-blue-400 to-blue-600',
        levels: [
            'Level 1: Dynamics 365 基础 (Fundamentals)',
            'Level 2: 配置销售与市场模块 (Sales & Marketing)',
            'Level 3: 客户服务与 Power Platform (CS & PP)',
            'Level 4: 功能解决方案设计 (Solution Design)',
            'Level 5: 项目管理 (Scrum/Agile)',
        ]
    },
    {
        id: 'developer',
        title: '开发人员 (Developer)',
        icon: '👨‍💻',
        color: 'from-purple-400 to-purple-600',
        levels: [
            'Level 1: C# & .NET Core 基础',
            'Level 2: Dynamics 365 插件 (Plugins) 与工作流',
            'Level 3: Power Automate & Azure Functions',
            'Level 4: PCF 控件开发 (React/TS)',
            'Level 5: 高级系统集成 (Advanced Integration)',
        ]
    },
    {
        id: 'architect',
        title: '解决方案架构师 (Architect)',
        icon: '📐',
        color: 'from-cyan-400 to-cyan-600',
        levels: [
            'Level 1: 系统设计原则',
            'Level 2: 安全模型与数据架构',
            'Level 3: 企业级集成模式',
            'Level 4: 性能优化策略',
            'Level 5: 企业架构战略与咨询',
        ]
    }
];

export const Roadmap = () => {
    const [activeTrack, setActiveTrack] = useState(tracks[0]);

    return (
        <section id="roadmap" className="py-20 bg-gray-50 dark:bg-deep-navy relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">你的职业进阶路线</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        选择你的赛道，掌握成为顶级 Dynamics 365 专家所需的核心技能。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {tracks.map((track) => (
                        <button
                            key={track.id}
                            onClick={() => setActiveTrack(track)}
                            className={`p-6 rounded-xl text-left transition-all duration-300 transform hover:-translate-y-1 ${activeTrack.id === track.id
                                    ? 'bg-white dark:bg-gray-800 shadow-xl border-l-4 border-ms-blue'
                                    : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
                                }`}
                        >
                            <div className="text-4xl mb-4">{track.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                            <div className={`h-1 w-12 rounded bg-gradient-to-r ${track.color}`} />
                        </button>
                    ))}
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold mb-8 flex items-center">
                        <span className="mr-3">{activeTrack.icon}</span>
                        {activeTrack.title} 技能树
                    </h3>
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

                        <div className="space-y-8">
                            {activeTrack.levels.map((level, index) => (
                                <motion.div
                                    key={level}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative flex items-center"
                                >
                                    <div className={`absolute left-0 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 bg-gradient-to-r ${activeTrack.color} flex items-center justify-center text-white font-bold z-10 shadow-lg`}>
                                        {index + 1}
                                    </div>
                                    <div className="ml-20 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg w-full border border-gray-100 dark:border-gray-600">
                                        <span className="font-semibold text-lg">{level}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
