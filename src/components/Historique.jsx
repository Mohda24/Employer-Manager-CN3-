import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function Historique() {
    // Get the historique from the Redux store
    const historique = useSelector((state) => state.absences.Historique[0]);
    console.log(historique);

    return (
        <div className="p-8 min-h-screen bg-gray-950 text-gray-100 dark:bg-gray-950 dark:text-gray-100">
            {/* Header with enhanced gradient and typography */}
            <motion.h1
                className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 bg-clip-text text-transparent mb-16 tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Historique des Absences
            </motion.h1>

            {/* Check if historique is empty */}
            {historique?.length === 0 ? (
                <motion.div
                    className="flex flex-col items-center justify-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <svg className="w-20 h-20 text-gray-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xl text-gray-400 font-medium">
                        Aucun historique disponible.
                    </p>
                </motion.div>
            ) : (
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {historique.map((entry, index) => (
                        <motion.div
                            key={index}
                            className="mb-6 overflow-hidden"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
                                <div className="p-6">
                                    <p className="text-gray-300 font-medium leading-relaxed">{entry}</p>
                                </div>
                                <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-1 w-0 group-hover:w-full transition-all duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default Historique;