import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Clock } from "lucide-react";


function ModifyAbsence() {
    const dispatch = useDispatch();
    const absences = useSelector((state) => state.absences.absences);
    const employees = useSelector((state) => state.employers);

    const [selectedEmployee, setSelectedEmployee] = useState("");
    const [status, setStatus] = useState("");
    const [lateMinutes, setLateMinutes] = useState("");
    const [entryTime, setEntryTime] = useState("");
    const [exitTime, setExitTime] = useState("");

    const handleEmployeeChange = (e) => {
        const employeeId = e.target.value;
        setSelectedEmployee(employeeId);
        const existingAbsence = absences.find(abs => abs.employeeId === employeeId);
        if (existingAbsence) {
            setStatus(existingAbsence.status || "");
            setLateMinutes(existingAbsence.lateMinutes || "");
            setEntryTime(existingAbsence.entryTime || "");
            setExitTime(existingAbsence.exitTime || "");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateAbsence({
            employeeId: selectedEmployee,
            status,
            lateMinutes: status === "retard" ? lateMinutes : null,
            entryTime: status === "authorized_output" ? entryTime : null,
            exitTime: status === "authorized_output" ? exitTime : null,
        }));
    };

    return (
        <main className="p-6 min-h-screen bg-gray-900 text-gray-200">
            <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-violet-400 bg-clip-text text-transparent">
                    Modify Absence
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Select Employee</label>
                        <select
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:ring-indigo-500"
                            value={selectedEmployee}
                            onChange={handleEmployeeChange}
                        >
                            <option value="">Select</option>
                            {employees.map(emp => (
                                <option key={emp.id} value={emp.id}>{emp.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300">Status</label>
                        <select
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:ring-indigo-500"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                            <option value="retard">Late</option>
                            <option value="authorized_output">Authorized Output</option>
                            <option value="congis">Leave</option>
                        </select>
                    </div>

                    {status === "retard" && (
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-yellow-500" />
                            <input
                                type="number"
                                placeholder="Late Minutes"
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:ring-indigo-500"
                                value={lateMinutes}
                                onChange={(e) => setLateMinutes(e.target.value)}
                            />
                        </div>
                    )}

                    {status === "authorized_output" && (
                        <div className="flex space-x-2">
                            <input
                                type="time"
                                className="w-1/2 p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:ring-indigo-500"
                                value={entryTime}
                                onChange={(e) => setEntryTime(e.target.value)}
                            />
                            <span>to</span>
                            <input
                                type="time"
                                className="w-1/2 p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:ring-indigo-500"
                                value={exitTime}
                                onChange={(e) => setExitTime(e.target.value)}
                            />
                        </div>
                    )}

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default ModifyAbsence;
