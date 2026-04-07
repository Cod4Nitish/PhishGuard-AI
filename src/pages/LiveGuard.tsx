import React from 'react';

const LiveGuard: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold flex items-center">
                    <span className="text-gradient">Live Guard Monitoring</span>
                </h2>

                <div className="flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-neon-green/30">
                    <span className="w-3 h-3 rounded-full bg-neon-green animate-pulse shadow-neon-green"></span>
                    <span className="text-sm rounded-full text-neon-green tracking-wider font-semibold">PULSE ACTIVE</span>
                </div>
            </div>

            <p className="text-gray-400">Continuous background monitoring of high-risk domains and real-time threat detection.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {/* Dummy Card 1 */}
                <div className="glass-card p-6 glow-red border-l-4 border-l-neon-red">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-white truncate mr-2">secure-login-update.com</h3>
                        <span className="bg-neon-red/20 text-neon-red text-xs px-2 py-1 rounded border border-neon-red/30">HIGH RISK</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-4">Detected credential harvesting kit. IP registered 2 hours ago.</p>
                    <div className="text-xs text-gray-500 flex justify-between">
                        <span>Target: Microsoft 365</span>
                        <span>0 ms ago</span>
                    </div>
                </div>

                {/* Dummy Card 2 */}
                <div className="glass-card p-6 glow-blue border-l-4 border-l-neon-blue">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-white truncate mr-2">verify-account-info.net</h3>
                        <span className="bg-neon-blue/20 text-neon-blue text-xs px-2 py-1 rounded border border-neon-blue/30">ANALYZING</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-4">Suspicious DOM mutations detected. Running heuristic scan.</p>
                    <div className="text-xs text-gray-500 flex justify-between">
                        <span>Target: PayPal</span>
                        <span>12 secs ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveGuard;
