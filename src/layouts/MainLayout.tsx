import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
    const location = useLocation();

    return (
        <div className="flex h-screen overflow-hidden bg-obsidian text-slate-200">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-[128px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green rounded-full mix-blend-screen filter blur-[128px]"></div>
            </div>

            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 ml-20 md:ml-64 pb-16 overflow-y-auto z-10 custom-scrollbar relative">
                <div className="p-6 md:p-10 max-w-7xl mx-auto w-full min-h-screen">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
