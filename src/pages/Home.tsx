import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Target, Globe, Server, AlertTriangle } from 'lucide-react';
import GlobalPhishingMap from '../components/GlobalPhishingMap';
import MalwareAwareness from '../components/MalwareAwareness';

const Home: React.FC = () => {
    const [url, setUrl] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [showResult, setShowResult] = useState(false);

    // Simulated scan result data
    const scanData = {
        score: 87, // High risk
        status: "PHISHING",
        color: "neon-red",
        features: [
            { name: "Domain Age", value: "2 Days (High Risk)", icon: Globe },
            { name: "SSL Certificate", value: "Let's Encrypt (Recent)", icon: ShieldCheck },
            { name: "URL Length", value: "Suspiciously Long (74 chars)", icon: Target },
            { name: "Hosting IP", value: "Blacklisted Subnet", icon: Server },
        ]
    };

    const handleScan = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setIsScanning(true);
        setShowResult(false);

        // Simulate API call
        setTimeout(() => {
            setIsScanning(false);
            setShowResult(true);
        }, 2500);
    };

    // SVG Gauge calculation
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scanData.score / 100) * circumference;

    return (
        <div className="space-y-10 pb-12 w-full">
            {/* Hero Section */}
            <section className="glass-panel rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Background ambient light */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-neon-blue/10 blur-[80px] rounded-full pointer-events-none"></div>

                <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)] tracking-tight">
                    Real-Time Threat <span className="text-gradient">Engine</span>
                </h1>
                <p className="text-gray-400 mb-10 max-w-3xl text-lg md:text-xl relative z-10">
                    Instantly detect malicious URLs, zero-day phishing attempts, and advanced malware distribution networks before they compromise your system.
                </p>

                <form onSubmit={handleScan} className="w-full max-w-4xl relative z-10 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-green rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex items-center w-full">
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter URL to analyze (e.g., https://suspicious-link.net)"
                            className="w-full bg-obsidian border border-white/20 rounded-full py-5 pl-8 pr-40 md:pr-48 focus:outline-none focus:border-neon-blue focus:shadow-[0_0_20px_rgba(0,123,255,0.4)] transition-all duration-300 text-white placeholder-gray-500 text-lg sm:text-xl input-glow"
                            disabled={isScanning}
                        />
                        <button
                            type="submit"
                            disabled={isScanning || !url}
                            className={`absolute right-2 top-2 bottom-2 rounded-full px-6 md:px-8 font-bold transition-all duration-300 flex items-center justify-center text-sm md:text-base cursor-pointer
                ${isScanning
                                    ? 'bg-carbon text-gray-400 border border-white/10'
                                    : 'bg-neon-blue text-white hover:bg-blue-600 shadow-[0_0_15px_rgba(0,123,255,0.6)] hover:shadow-[0_0_25px_rgba(0,123,255,0.8)]'
                                }`}
                        >
                            {isScanning ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-neon-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    ANALYZING
                                </>
                            ) : (
                                'ANALYZE URL'
                            )}
                        </button>
                    </div>
                </form>
            </section>

            {/* Result Section */}
            <AnimatePresence>
                {showResult && (
                    <motion.section
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        className="overflow-hidden"
                    >
                        <div className={`glass-panel border border-${scanData.color}/30 shadow-${scanData.color} rounded-2xl p-6 md:p-8 relative`}>
                            <div className="absolute top-0 right-0 p-4">
                                <AlertTriangle className={`w-8 h-8 text-${scanData.color} animate-pulse`} />
                            </div>

                            <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">
                                Analysis Report
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                {/* Score Column */}
                                <div className="md:col-span-4 flex flex-col items-center justify-center bg-black/40 rounded-xl p-6 border border-white/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-neon-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                                        {/* Background Circle */}
                                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
                                            <circle
                                                cx="70"
                                                cy="70"
                                                r={radius}
                                                fill="transparent"
                                                stroke="rgba(255,255,255,0.05)"
                                                strokeWidth="12"
                                            />
                                            {/* Progress Circle */}
                                            <motion.circle
                                                initial={{ strokeDashoffset: circumference }}
                                                animate={{ strokeDashoffset }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                cx="70"
                                                cy="70"
                                                r={radius}
                                                fill="transparent"
                                                stroke="#DC143C"
                                                strokeWidth="12"
                                                strokeLinecap="round"
                                                style={{
                                                    strokeDasharray: circumference,
                                                    filter: 'drop-shadow(0 0 8px rgba(220,20,60,0.8))'
                                                }}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{scanData.score}</span>
                                            <span className="text-xs text-neon-red/80 font-bold uppercase tracking-widest mt-1">/ 100 Risk</span>
                                        </div>
                                    </div>

                                    <div className={`text-2xl font-black tracking-widest text-${scanData.color} drop-shadow-[0_0_10px_rgba(220,20,60,0.8)] mt-2`}>
                                        {scanData.status}
                                    </div>
                                </div>

                                {/* Details Column */}
                                <div className="md:col-span-8 flex flex-col">
                                    {/* Website Preview Placeholder */}
                                    <div className="bg-black/80 rounded-xl h-40 overflow-hidden border border-white/10 mb-6 relative group flex-shrink-0">
                                        <div className="absolute inset-0 bg-red-900/30 z-10 transition-colors duration-300 group-hover:bg-red-900/20"></div>
                                        <img
                                            src={`https://image.thum.io/get/width/600/crop/800/${url}`}
                                            alt="Website Preview"
                                            className="w-full h-full object-cover filter blur-[2px] opacity-60 grayscale scale-105 group-hover:scale-100 transition-transform duration-500"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=400";
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center z-20">
                                            <div className="bg-black/90 px-4 py-2 rounded-md border border-neon-red/50 shadow-[0_0_15px_rgba(220,20,60,0.4)] flex items-center">
                                                <ShieldCheck className="w-5 h-5 text-neon-red mr-2" />
                                                <span className="font-mono text-neon-red text-sm font-bold tracking-wide">
                                                    PREVIEW OBFUSCATED FOR SAFETY
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Extracted Features */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                                        {scanData.features.map((feature, idx) => (
                                            <div key={idx} className="bg-white/5 border border-white/5 hover:border-white/20 transition-colors duration-300 rounded-lg p-4 flex items-center space-x-4 group">
                                                <div className="bg-black/50 p-2.5 rounded-lg group-hover:bg-black/80 transition-colors">
                                                    <feature.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">{feature.name}</p>
                                                    <p className={`text-sm font-bold ${feature.value.includes('High Risk') || feature.value.includes('Blacklisted') ? 'text-neon-red' : 'text-white'}`}>
                                                        {feature.value}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Global Map & Awareness Section */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch pt-4">
                <div className="xl:col-span-7 h-full">
                    <GlobalPhishingMap />
                </div>
                <div className="xl:col-span-5 h-full">
                    <MalwareAwareness />
                </div>
            </div>
        </div>
    );
};

export default Home;
