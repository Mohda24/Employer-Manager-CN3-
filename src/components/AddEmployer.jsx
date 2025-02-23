import { useState } from "react";
import { PlusCircle,X } from "lucide-react";
import React from "react";
import Overlay from "./Shared/overllay";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addEmployer } from "../app/features/EmployersSlice";

export default function AddEmployer({ isVisible, setAddFormVisible }) {
    const positions=useSelector((state)=>state.positions)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id:new Date().getTime(),
        name: "",
        salary: "",
        position: "",
        department: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.department || !formData.position || !formData.salary){
            alert('Please fill all fields');
            return;
        }
        dispatch(addEmployer(formData));
        setFormData({
            name: "",
            salary: "",
            position: "",
            department: "",
        });
        setAddFormVisible(false);

    };

    return (
        <>
            <div
                className={`max-w-lg min-w-md mx-auto bg-gray-900  p-8 rounded-2xl shadow-2xl border border-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 duration-200 transition-all ${
                    isVisible ? "visible opacity-100" : "invisible opacity-0"
                }`}
            >
                {/* close btn */}
                <button className="absolute top-4 right-4 hover:opacity-90 duration-300" onClick={() => setAddFormVisible(false)}>
                    <X/>
                </button>
                <h2 className="text-xl font-semibold text-gray-100 mb-6 flex items-center gap-2">
                    <PlusCircle className="text-blue-400" /> Add Employer
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-500"
                            placeholder="Enter name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Salary
                        </label>
                        <input
                            type="number"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-500"
                            placeholder="Enter salary"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Position
                        </label>
                        <select
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required
                        >
                            <option value="" disabled>
                                Select a position
                            </option>
                            {positions.map((position) => (
                                <option key={position} value={position}>
                                    {position}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Department
                        </label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-500"
                            placeholder="Enter department"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                    >
                        Add Employer
                    </button>
                </form>
            </div>
            {/* overlay */}
            {isVisible && <Overlay />}
        </>
    );
}