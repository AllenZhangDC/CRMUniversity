export const Footer = () => {
    return (
        <footer className="bg-deep-navy text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-ms-blue mb-4">CRMUniversity</h3>
                        <p className="text-gray-400 max-w-sm">
                            顾问的发射台。精通 Dynamics 365，在企业级科技领域建立面向未来的职业生涯。
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">快速链接</h4>
                        <ul className="space-y-2">
                            <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">课程列表</a></li>
                            <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">职业路线图</a></li>
                            <li><a href="#success-stories" className="text-gray-400 hover:text-white transition-colors">成功案例</a></li>
                            <li><a href="/login" className="text-gray-400 hover:text-white transition-colors">学员登录</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">联系我们</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400">info@crmuniversity.org</li>
                            <li className="text-gray-400">+1 (202) 823-9437</li>
                            <li className="text-gray-400">Gaithersburg, Maryland</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} CRMUniversity. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
