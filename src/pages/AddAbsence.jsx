import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserPen, Trash2, Clock, LogOut } from 'lucide-react';
import {addAbsence} from "../app/features/AbsenseSlice"
import { useEffect } from 'react';

function AddAbsence() {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employers);
    const [selectedStatus, setSelectedStatus] = useState({});
    const [lateMinutes, setLateMinutes] = useState({});
    const [entryTime, setEntryTime] = useState({});
    const [exitTime, setExitTime] = useState({});
    const [absences, setAbsences] = useState([]);

    const handleStatusChange = (employeeId, status) => {
        setSelectedStatus(prev => ({
            ...prev,
            [employeeId]: status
        }));
    };
    useEffect(() => {
        setAbsences(employees.map(employee => {
            return {
                employeeId: employee.id,
                name: employee.name,
                status: selectedStatus[employee.id],
                lateMinutes: selectedStatus[employee.id] === "retard" ? lateMinutes[employee.id] : null,
                entryTime: selectedStatus[employee.id] === "authorized_output" ? entryTime[employee.id] : null,
                exitTime: selectedStatus[employee.id] === "authorized_output" ? exitTime[employee.id] : null
            };
        }));
    }, [selectedStatus, lateMinutes, entryTime, exitTime]);


    // function for Save Absense
    const AddAbsenseForToday=()=>{
        console.log(absences);
        
        const TodayAbsense={
            date:new Date().toISOString().split('T')[0],
            employers:absences
        }
        dispatch(addAbsence(TodayAbsense));
    }
    return (
        <main className="p-6 bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold  bg-gradient-to-r from-amber-400 via-orange-400 to-violet-400 bg-clip-text text-transparent">Add Absence</h1>
                    <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                        <span className="text-gray-300 font-medium">
                            {new Date().toISOString().split('T')[0]}
                        </span>
                    </div>
                </div>

                <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-900/50 border-b border-gray-700">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-300">#</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-300">Name</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-300">Position</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-300">Department</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-300">Status</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-300">Details</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {employees.map((employee, index) => (
                                    <tr key={`id-${employee.id}${new Date()}`} className="hover:bg-gray-700/50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-400">{index + 1}</td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-200">{employee.name}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-400">{employee.position}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-900/50 text-indigo-300 border border-indigo-700">
                                                {employee.department}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <select
                                                className="block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={selectedStatus[employee.id] || ''}
                                                onChange={(e) => handleStatusChange(employee.id, e.target.value)}
                                                required
                                            >
                                                <option value="">Select Status</option>
                                                <option value="present">Present</option>
                                                <option value="absent">Absent</option>
                                                <option value="retard">Late</option>
                                                <option value="authorized_output">Authorized Output</option>
                                                <option value="congis">Leave</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4">
                                            {selectedStatus[employee.id] === 'retard' && (
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="w-4 h-4 text-yellow-500" />
                                                    <input
                                                        type="number"
                                                        placeholder="Minutes"
                                                        className="w-20 rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        value={lateMinutes[employee.id] || ''}
                                                        onChange={(e) => setLateMinutes(prev => ({
                                                            ...prev,
                                                            [employee.id]: e.target.value
                                                        }))}
                                                        required
                                                    />
                                                </div>
                                            )}
                                            {selectedStatus[employee.id] === 'authorized_output' && (
                                                <div className="flex items-center space-x-2 text-gray-300">
                                                    <div>
                                                        <input
                                                            type="time"
                                                            className="rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            value={entryTime[employee.id] || ''}
                                                            onChange={(e) => setEntryTime(prev => ({
                                                                ...prev,
                                                                [employee.id]: e.target.value
                                                            }))}
                                                            required
                                                        />
                                                    </div>
                                                    <span>to</span>
                                                    <div>
                                                        <input
                                                            type="time"
                                                            className="rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            value={exitTime[employee.id] || ''}
                                                            onChange={(e) => setExitTime(prev => ({
                                                                ...prev,
                                                                [employee.id]: e.target.value
                                                            }))}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-3">
                                                <button className="text-indigo-400 hover:text-indigo-300 transition-colors">
                                                    <UserPen className="w-5 h-5" />
                                                </button>
                                                <button className="text-red-400 hover:text-red-300 transition-colors">
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button 
                    onClick={()=>AddAbsenseForToday()}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors">
                        Save Absences
                    </button>
                </div>
            </div>
        </main>
    );
}

export default AddAbsence;