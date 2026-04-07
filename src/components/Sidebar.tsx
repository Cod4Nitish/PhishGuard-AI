import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Activity, History } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar: React.FC = () => {
    const navItems = [
        { path: '/', label: 'Scanner', icon: ShieldCheck },
        { path: '/monitoring', label: 'Live Guard', icon: Activity },
        { path: '/history', label: 'History', icon: History },
    ];

    return (
        <aside className="fixed left-0 top-0 h-full w-20 md:w-64 glass-panel border-r border-white/5 flex flex-col z-40">
            <div className="p-4 md:p-6 flex items-center justify-center md:justify-start">
                <div className="relative flex items-center">
                    <ShieldCheck className="w-8 h-8 text-neon-green drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]" />
                    <h1 className="hidden md:block ml-3 font-bold text-xl tracking-wider text-gradient">
                        PhishGuard
                    </h1>
                </div>
            </div>

            <nav className="flex-1 px-4 mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center p-3 rounded-lg transition-all duration-300 relative group
              ${isActive ? 'bg-white/10 text-neon-blue shadow-[inset_2px_0_0_0_#007BFF]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}
            `}
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon className={`w-6 h-6 ${isActive ? 'text-neon-blue' : ''}`} />
                                <span className="hidden md:block ml-3 font-medium">{item.label}</span>

                                {/* Active Indicator Glow */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav-indicator"
                                        className="absolute left-0 top-1/4 h-1/2 w-1 bg-neon-blue rounded-r-md shadow-[0_0_8px_rgba(0,123,255,0.8)]"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Decorative pulse element at bottom of sidebar */}
            <div className="p-6 hidden md:flex items-center justify-center mb-16">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse shadow-[0_0_8px_rgba(57,255,20,0.8)]"></span>
                    <span className="text-xs text-gray-400 tracking-wider">SYSTEM ONLINE</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
