import React from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'motion/react';
import 'react-datepicker/dist/react-datepicker.css';
import { Eye, FilePenLine, Calendar, Clock } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { filterAbsence } from '../app/features/AbsenseSlice';
import { getNameOfResponsable, getNameOfEmployer, isResponsable } from '../helper/HandleLocalStorage';
import users from '../data/users/users';

const ListeAbsence = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const employers = useSelector(state => state.employers);
    const filtredAbsense = useSelector(state => state.absences.filteredAbsences);
    const selectedDate = useSelector(state => state.absences.selectedDate);

    const handleDateChange = (date) => {
        const dateStr = date.toISOString().split('T')[0];
        dispatch(filterAbsence(dateStr));
    };

    const getStatusStyle = (status) => {
        switch (status.toLowerCase()) {
            case 'present':
                return 'bg-emerald-950/40 text-emerald-400 border-l-4 border-l-emerald-500';
            case 'authorized_output':
                return 'bg-blue-950/40 text-blue-400 border-l-4 border-l-blue-500';
            case 'absent':
                return 'bg-red-950/40 text-red-400 border-l-4 border-l-red-500';
            case 'congis':
                return 'bg-gradient-to-r from-amber-950/50 to-amber-900/20 text-amber-300 border-l-4 border-l-amber-500 opacity-80 hover:opacity-100';
            default:
                return 'bg-slate-800/40 text-slate-400 border-l-4 border-l-slate-500';
        }
    };

    const getStatusBadgeStyle = (status) => {
        switch (status.toLowerCase()) {
            case 'present':
                return 'bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30';
            case 'authorized_output':
                return 'bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30';
            case 'absent':
                return 'bg-red-500/20 text-red-400 ring-1 ring-red-500/30';
            case 'congis':
                return 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 ring-1 ring-amber-500/30';
            default:
                return 'bg-slate-500/20 text-slate-400 ring-1 ring-slate-500/30';
        }
    };


    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
        }),
    };

    return (
        <div className="bg-slate-900 min-h-screen rounded-xl shadow-xl p-6 space-y-6">
            <div className="flex items-center justify-between mb-8">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-violet-400 bg-clip-text text-transparent">
                        Absence Management
                    </h2>
                    <p className="text-slate-400 text-sm">Track and manage employee absence status</p>
                </div>
                <div className="relative">
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                        className="bg-slate-800/50 text-slate-200 px-4 py-2 rounded-lg border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent pr-10 w-56"
                        placeholderText="Select date..."
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400/70" size={18} />
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-800/50 backdrop-blur-sm">
                <motion.table
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    



                    className="w-full">
                    <thead>
                        <tr className="bg-slate-800/30">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Employee</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Responsible</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Status</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                        {filtredAbsense.employers?.length > 0 ? (
                            filtredAbsense.employers.map((employer,index) => (
                                <motion.tr
                                    key={`id-${employer.name}-${new Date().getTime()}-dd`}
                                    className={`group transition-all duration-300 ${getStatusStyle(employer?.status)}`}
                                    variants={rowVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index}
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`h-10 w-10 rounded-lg bg-slate-800/50 flex items-center justify-center shadow-lg ${employer?.status.toLowerCase() === 'congis' ? 'bg-gradient-to-br from-amber-950 to-orange-900' : ''}`}>
                                                <span className={`font-medium ${employer.status.toLowerCase() === 'congis' ? 'text-amber-300' : 'text-slate-300'}`}>
                                                    {employer.name?.charAt(0)}
                                                </span>
                                            </div>
                                            <span className="text-slate-200 font-medium">
                                                {employer.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-slate-400" />
                                            <span className="text-slate-300">
                                                {getNameOfResponsable(employer?.responsibleUserId, users)}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-medium ${getStatusBadgeStyle(employer?.status)}`}>
                                            {employer?.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {employer?.status.toLowerCase() === 'congis' ? (
                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                                    On Congis Leave
                                                </span>
                                            ) : (
                                                <>
                                                    <button className="p-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-200 text-slate-300 hover:text-slate-100">
                                                        <Eye size={18} />
                                                    </button>
                                                    {isResponsable(employer?.responsibleUserId, user) && (
                                                        <button className={`p-2 rounded-lg transition-colors duration-200 ${employer?.status.toLowerCase() === 'congis'
                                                            ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 hover:text-amber-300'
                                                            : 'bg-violet-500/20 hover:bg-violet-500/30 text-violet-400 hover:text-violet-300'
                                                            }`}>
                                                            <FilePenLine size={18} />
                                                        </button>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </motion.tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-10 text-center">
                                    <div className="flex flex-col items-center gap-3 text-slate-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-12 h-12 text-slate-500"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M9 12h6"></path>
                                            <path d="M12 9v6"></path>
                                        </svg>
                                        <p className="text-lg font-medium">No Records Found</p>
                                        <p className="text-sm text-slate-500">
                                            Try adjusting your filters or check back later.
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </motion.table>
            </div>
        </div>
    );
};

export default ListeAbsence;