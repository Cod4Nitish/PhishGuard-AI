import React, { useEffect, useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from 'react-simple-maps';
import { motion } from 'framer-motion';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Helper to generate random coordinates (rough landmass approximation)
const generateMarkers = (count: number) => {
    const points: Array<{ id: number; coordinates: [number, number]; timestamp: number }> = [];
    for (let i = 0; i < count; i++) {
        // Avoid poles, mostly focus between -60 and +60 latitude
        const lat = (Math.random() * 120) - 60;
        const lng = (Math.random() * 360) - 180;
        points.push({
            id: i,
            coordinates: [lng, lat],
            timestamp: Date.now() + i * 1000
        });
    }
    return points;
};

const GlobalPhishingMap: React.FC = () => {
    const [markers, setMarkers] = useState(generateMarkers(15));

    // Periodically refresh some markers to simulate active attacks
    useEffect(() => {
        const interval = setInterval(() => {
            setMarkers(current => {
                // Remove oldest 3, add 3 new ones
                const updated = [...current.slice(3)];
                const newMarkers = generateMarkers(3).map(m => ({ ...m, id: Math.random() }));
                return [...updated, ...newMarkers];
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-card p-4 md:p-6 w-full flex flex-col glow-blue relative overflow-hidden">
            {/* Background glow for the container */}
            <div className="absolute inset-0 bg-blue-900/5 mix-blend-screen pointer-events-none"></div>

            <div className="flex justify-between items-center mb-6 z-10">
                <h3 className="text-xl md:text-2xl font-bold flex items-center">
                    <span className="text-white mr-2">Global Live</span>
                    <span className="text-neon-red drop-shadow-[0_0_8px_rgba(220,20,60,0.8)]">Threat Map</span>
                </h3>
                <div className="flex items-center space-x-2 text-xs text-gray-400 glass-panel px-3 py-1 rounded-full border-neon-red/30 pl-2">
                    <span className="w-2 h-2 rounded-full bg-neon-red animate-pulse shadow-neon-red mr-1"></span>
                    ACTIVE ATTACKS: {markers.length * 142}
                </div>
            </div>

            <div className="w-full h-[300px] md:h-[450px] bg-black/40 rounded-xl border border-white/5 relative flex items-center justify-center overflow-hidden">
                <ComposableMap
                    projection="geoMercator"
                    width={800}
                    height={400}
                    projectionConfig={{ scale: 120, center: [0, 20] }}
                    className="w-full h-full opacity-90 filter drop-shadow-[0_0_10px_rgba(0,123,255,0.2)]"
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#1a202c" // dark slate
                                    stroke="#2d3748"
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: "#2a4365", outline: "none", transition: "all 250ms" },
                                        pressed: { outline: "none" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {markers.map(({ id, coordinates }) => (
                        <Marker key={id} coordinates={coordinates}>
                            <motion.circle
                                r={4}
                                fill="#DC143C"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0, 1, 0.5, 1, 0.2], scale: [0, 1.5, 1, 1.2, 0.8] }}
                                transition={{
                                    duration: 2 + Math.random(),
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                style={{
                                    filter: "drop-shadow(0 0 8px rgba(220,20,60,0.9))"
                                }}
                            />
                            <motion.circle
                                r={12}
                                fill="none"
                                stroke="#DC143C"
                                strokeWidth={1}
                                initial={{ opacity: 1, scale: 0 }}
                                animate={{ opacity: 0, scale: 2 }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() }}
                            />
                        </Marker>
                    ))}
                </ComposableMap>
            </div>
        </div>
    );
};

export default GlobalPhishingMap;
