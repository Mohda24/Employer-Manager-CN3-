import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Statistique() {
    const [selectedOne, setSelectedOne] = useState(null);
    const [selectedTwo, setSelectedTwo] = useState(null);
    const [absentTotal, setAbsentTotal] = useState(0);
    const [retardTotal, setRetardTotal] = useState(0);
    const [presentTotal, setPresentTotal] = useState(0);
    const [authorizedOutputTotal, setAuthorizedOutputTotal] = useState(0);

    const absences = useSelector((state) => state.absences.absences);

    const getAbsencesTotal = () => {
        if (!selectedOne || !selectedTwo) return;

        const startDate = new Date(selectedOne).getTime();
        const endDate = new Date(selectedTwo).getTime();

        let totalAbsence = 0;
        let totalRetard = 0;
        let totalPresent = 0;
        let totalAuthorizedOutput = 0;

        absences.forEach((absence) => {
            const absenceDate = new Date(absence.date).getTime();

            if (absenceDate >= startDate && absenceDate <= endDate) {
                totalAbsence += absence.employers.filter((emp) => emp.status === "absent").length;
                totalRetard += absence.employers.filter((emp) => emp.status === "retard").length;
                totalPresent += absence.employers.filter((emp) => emp.status === "present").length;
                totalAuthorizedOutput += absence.employers.filter((emp) => emp.status === "authorized_output").length;
            }
        });

        setAbsentTotal(totalAbsence);
        setRetardTotal(totalRetard);
        setPresentTotal(totalPresent);
        setAuthorizedOutputTotal(totalAuthorizedOutput);
    };

    return (
        <main className="w-[90%] mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-amber-400 mb-5">Filter for Statistics</h2>

            <header className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* First Date Picker */}
                <div className="relative w-full md:w-64">
                    <DatePicker
                        selected={selectedOne}
                        onChange={(date) => setSelectedOne(date)}
                        dateFormat="yyyy-MM-dd"
                        className="w-full bg-slate-800 text-slate-200 px-4 py-2 rounded-lg border border-slate-700 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholderText="Select start date..."
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400" size={18} />
                </div>

                {/* Second Date Picker */}
                <div className="relative w-full md:w-64">
                    <DatePicker
                        selected={selectedTwo}
                        onChange={(date) => setSelectedTwo(date)}
                        dateFormat="yyyy-MM-dd"
                        className="w-full bg-slate-800 text-slate-200 px-4 py-2 rounded-lg border border-slate-700 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholderText="Select end date..."
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400" size={18} />
                </div>

                {/* Filter Button */}
                <button
                    onClick={getAbsencesTotal}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-2 rounded-lg transition-all"
                >
                    Filtrer
                </button>
            </header>

            {/* Absence Statistics Display */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800 p-4 rounded-md shadow-md text-center">
                    <p className="text-lg">Total Absences:</p>
                    <span className="text-2xl font-bold text-red-400">{absentTotal}</span>
                </div>

                <div className="bg-slate-800 p-4 rounded-md shadow-md text-center">
                    <p className="text-lg">Total Retards:</p>
                    <span className="text-2xl font-bold text-yellow-400">{retardTotal}</span>
                </div>

                <div className="bg-slate-800 p-4 rounded-md shadow-md text-center">
                    <p className="text-lg">Total Presents:</p>
                    <span className="text-2xl font-bold text-green-400">{presentTotal}</span>
                </div>

                <div className="bg-slate-800 p-4 rounded-md shadow-md text-center">
                    <p className="text-lg">Authorized Outputs:</p>
                    <span className="text-2xl font-bold text-blue-400">{authorizedOutputTotal}</span>
                </div>
            </div>
        </main>
    );
}

export default Statistique;
