import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddEmployer from '../components/AddEmployer';
import { UserPlus, Trash2, UserPen } from 'lucide-react';
import { removeEmployer } from '../app/features/EmployersSlice';
import { motion, AnimatePresence } from 'framer-motion';

function Employers() {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employers);
    const [isVisible, setAddFormVisible] = useState(false);

    // Handle remove employer
    const handleRemoveEmployer = (id) => {
        if (window.confirm('Are you sure you want to remove this employer?')) {
            dispatch(removeEmployer(id));
        }
    };

    // Handle body scroll lock
    useEffect(() => {
        document.body.style.overflow = isVisible ? 'hidden' : 'auto';
    }, [isVisible]);

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-900 text-white p-4"
        >
            {/* Header */}
            <motion.h1 
                initial={{ y: -20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
            >
                Employers
            </motion.h1>

            {/* Table Container */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-lg shadow-md p-6 overflow-x-auto"
            >
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-700">
                            <th className="py-2 px-4">#</th>
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Position</th>
                            <th className="py-2 px-4">Department</th>
                            <th className="py-2 px-4">Salary ($)</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <motion.tr 
                                key={employee.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="border-b border-gray-700"
                            >
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{employee.name}</td>
                                <td className="py-2 px-4">{employee.position}</td>
                                <td className="py-2 px-4">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-900/50 text-indigo-300 border border-indigo-700">
                                        {employee.department}
                                    </span>
                                </td>
                                <td className="py-2 px-4">{employee.salary}</td>
                                <td className="py-2 px-4 flex space-x-2">
                                    {/* Edit Button */}
                                    <button className="text-yellow-400 hover:text-yellow-500 transition-colors">
                                        <UserPen size={18} />
                                    </button>
                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleRemoveEmployer(employee.id)}
                                        className="text-red-500 hover:text-red-600 transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>

            {/* Add Employer Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setAddFormVisible(true)}
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
            >
                <UserPlus size={20} className="mr-2" />
                Add Employer
            </motion.button>

            {/* Add Employer Form */}
            <AnimatePresence>
                {isVisible && (
                    <AddEmployer isVisible={isVisible} setAddFormVisible={setAddFormVisible} />
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Employers;
