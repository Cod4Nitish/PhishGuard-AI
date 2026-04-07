import React from 'react';
import { History as HistoryIcon, Search } from 'lucide-react';

const History: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold flex items-center">
                    <HistoryIcon className="w-8 h-8 mr-3 text-neon-blue" />
                    <span className="text-gradient">Scan History</span>
                </h2>
            </div>

            <div className="glass-panel p-6 rounded-xl">
                <div className="flex justify-between items-center mb-6">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search past scans..."
                            className="w-full bg-black/40 border border-white/10 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,123,255,0.2)] transition-all text-sm"
                        />
                    </div>
                    <button className="hidden md:block bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2 rounded-lg text-sm transition-colors">
                        Export CSV
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-400 text-sm">
                                <th className="pb-3 px-4 font-medium">URL Analyzed</th>
                                <th className="pb-3 px-4 font-medium">Status</th>
                                <th className="pb-3 px-4 font-medium">Date & Time</th>
                                <th className="pb-3 px-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-4 px-4 font-medium text-white">login.microsoftonline.update-security.com</td>
                                <td className="py-4 px-4">
                                    <span className="bg-neon-red/20 text-neon-red px-2 py-1 rounded text-xs border border-neon-red/30">PHISHING</span>
                                </td>
                                <td className="py-4 px-4 text-gray-400">Oct 24, 2023 14:32:01</td>
                                <td className="py-4 px-4 text-right">
                                    <button className="text-neon-blue hover:text-white transition-colors">View Report</button>
                                </td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-4 px-4 font-medium text-white">netflix.com</td>
                                <td className="py-4 px-4">
                                    <span className="bg-neon-green/20 text-neon-green px-2 py-1 rounded text-xs border border-neon-green/30">SAFE</span>
                                </td>
                                <td className="py-4 px-4 text-gray-400">Oct 24, 2023 12:15:44</td>
                                <td className="py-4 px-4 text-right">
                                    <button className="text-neon-blue hover:text-white transition-colors">View Report</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default History;
