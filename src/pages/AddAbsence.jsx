import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Clock } from "lucide-react";
import { addAbsence, setHistorique } from "../app/features/AbsenseSlice";

function AddAbsence() {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employers);
    const AllAbsenses = useSelector((state) => state.absences.absences);
    const user = useSelector((state) => state.auth.user);

    const [selectedStatus, setSelectedStatus] = useState({});
    const [lateMinutes, setLateMinutes] = useState({});
    const [entryTime, setEntryTime] = useState({});
    const [exitTime, setExitTime] = useState({});
    const [absences, setAbsences] = useState([]);

    const handleStatusChange = (employeeId, status) => {
        setSelectedStatus((prev) => ({
            ...prev,
            [employeeId]: status,
        }));
    };

    useEffect(() => {
        setAbsences(
            employees.map((employee) => ({
                employeeId: employee.id,
                name: employee.name,
                status: selectedStatus[employee.id],
                lateMinutes: selectedStatus[employee.id] === "retard" ? lateMinutes[employee.id] : null,
                entryTime: selectedStatus[employee.id] === "authorized_output" ? entryTime[employee.id] : null,
                exitTime: selectedStatus[employee.id] === "authorized_output" ? exitTime[employee.id] : null,
            }))
        );
    }, [selectedStatus, lateMinutes, entryTime, exitTime, employees]);

    // Check if Absence is Already Added for Today
    const isAlreadyAdded = () => {
        const currentDate = new Date().toISOString().split("T")[0];
        return AllAbsenses.some((absence) => absence.date === currentDate);
    };

    const generateHistorique = () => {
        return absences.map((absence) => 
            `RH ${user.name} marked ${absence.name} as ${absence.status} on ${new Date().toLocaleString()}`
        );
    };

    // Save Absence
    const handleAddAbsence = () => {
        if (isAlreadyAdded()) return;

        const TodayAbsence = {
            date: new Date().toISOString().split("T")[0],
            employers: absences,
        };

        dispatch(setHistorique(generateHistorique()));
        dispatch(addAbsence(TodayAbsence));
    };

    return (
        <main className="p-6 min-h-screen bg-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-violet-400 bg-clip-text text-transparent">
                        Add Absence
                    </h1>
                    <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 text-gray-300 font-medium">
                        {new Date().toISOString().split("T")[0]}
                    </div>
                </div>

                <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
                    <div className="overflow-x-auto">
                        <table className={`w-full text-left ${isAlreadyAdded() ? "opacity-70 cursor-not-allowed" : ""}`}>
                            <thead className="bg-gray-900 border-b border-gray-700">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold">#</th>
                                    <th className="px-6 py-4 text-sm font-semibold">Name</th>
                                    <th className="px-6 py-4 text-sm font-semibold">Position</th>
                                    <th className="px-6 py-4 text-sm font-semibold">Department</th>
                                    <th className="px-6 py-4 text-sm font-semibold">Status</th>
                                    {!isAlreadyAdded() && <th className="px-6 py-4 text-sm font-semibold">Details</th>}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {employees.map((employee, index) => (
                                    <tr key={employee.id} className="hover:bg-gray-700/50 transition">
                                        <td className="px-6 py-4 text-sm text-gray-400">{index + 1}</td>
                                        <td className="px-6 py-4 font-medium">{employee.name}</td>
                                        <td className="px-6 py-4 text-sm">{employee.position}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-900/50 text-indigo-300 border border-indigo-700">
                                                {employee.department}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {isAlreadyAdded() ? (
                                                <span className="text-red-500 font-semibold">Already Added</span>
                                            ) : (
                                                <select
                                                    className="block w-full rounded-md border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    value={selectedStatus[employee.id] || ""}
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
                                            )}
                                        </td>

                                        {!isAlreadyAdded() && (
                                            <td className="px-6 py-4">
                                                {selectedStatus[employee.id] === "retard" && (
                                                    <div className="flex items-center space-x-2">
                                                        <Clock className="w-4 h-4 text-yellow-500" />
                                                        <input
                                                            type="number"
                                                            placeholder="Minutes"
                                                            className="w-20 rounded-md border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            value={lateMinutes[employee.id] || ""}
                                                            onChange={(e) =>
                                                                setLateMinutes((prev) => ({
                                                                    ...prev,
                                                                    [employee.id]: e.target.value,
                                                                }))
                                                            }
                                                        />
                                                    </div>
                                                )}
                                                {selectedStatus[employee.id] === "authorized_output" && (
                                                    <div className="flex space-x-2">
                                                        <input
                                                            type="time"
                                                            className="rounded-md border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            value={entryTime[employee.id] || ""}
                                                            onChange={(e) =>
                                                                setEntryTime((prev) => ({
                                                                    ...prev,
                                                                    [employee.id]: e.target.value,
                                                                }))
                                                            }
                                                        />
                                                        <span>to</span>
                                                        <input
                                                            type="time"
                                                            className="rounded-md border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            value={exitTime[employee.id] || ""}
                                                            onChange={(e) =>
                                                                setExitTime((prev) => ({
                                                                    ...prev,
                                                                    [employee.id]: e.target.value,
                                                                }))
                                                            }
                                                        />
                                                    </div>
                                                )}
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={handleAddAbsence}
                        disabled={isAlreadyAdded()}
                        className={`px-6 py-2 text-white rounded-lg transition ${isAlreadyAdded() ? "bg-gray-600 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
                    >
                        {isAlreadyAdded() ? "Absences Already Saved" : "Save Absences"}
                    </button>
                </div>
            </div>
        </main>
    );
}

export default AddAbsence;
