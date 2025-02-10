import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";


import todoImage from "../image/todo.jpg"

const Todo = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pending");
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [isFormVisible, setFormVisible] = useState(false);

    const addOrUpdateTask = (e) => {
        e.preventDefault();
        if (task.trim() !== "" && description.trim() !== "") {
            if (editIndex !== null) {
                const updatedTasks = tasks.map((item, index) =>
                    index === editIndex ? { ...item, task, description, status } : item
                );
                setTasks(updatedTasks);
                setEditIndex(null);
            } else {
                setTasks([...tasks, { task, description, status }]);
            }
            setTask("");
            setDescription("");
            setStatus("Pending");
            setFormVisible(false); // Hide the form after submission
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleTaskStatus = (index) => {
        const newTasks = tasks.map((taskItem, i) =>
            i === index
                ? {
                    ...taskItem,
                    status: taskItem.status === "Complete" ? "Pending" : "Complete",
                }
                : taskItem
        );
        setTasks(newTasks);
    };

    const editTask = (index) => {
        setTask(tasks[index].task);
        setDescription(tasks[index].description);
        setStatus(tasks[index].status);
        setEditIndex(index);
        setFormVisible(true); // Show the form when editing
    };

    return (
        // style={{backgroundImage: `url(${todoImage})`,}}
        <div className=" flex flex-col min-h-screen overflow-auto bg-cover bg-center bg-white" >
            {/* Navbar */}
            <div className="Nav h-16 w-full bg-[#898989] bg-opacity-65 flex items-center justify-center text-white text-2xl font-bold">
                Make Your Morning Bright, With one More ToDo
            </div>

            {/* Tasks Section */}
            <div className="p-4 mt-4 w-full max-w-6xl mx-auto">
                {/* Task Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {tasks.map((taskItem, index) => (
                        <div
                            key={index}
                            className="p-4 border rounded-md bg-white bg-opacity-60 shadow-md flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="font-bold">Task: {taskItem.task}</h3>
                                <p className="text-sm italic">Description: {taskItem.description}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <button
                                    onClick={() => toggleTaskStatus(index)}
                                    className={`px-3 py-1 text-sm rounded-md ${taskItem.status === "Complete"
                                            ? "bg-green-500"
                                            : "bg-yellow-500"
                                        } text-white`}
                                >
                                    {taskItem.status}
                                </button>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => editTask(index)}
                                        className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    >
                                        <FiEdit />
                                    </button>
                                    <button
                                        onClick={() => removeTask(index)}
                                        className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                        <MdDelete />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Action Button */}
            <button
                onClick={() => setFormVisible(!isFormVisible)}
                className="fixed bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
            >
                <AiOutlinePlus size={24} />
            </button>

            {/* Task Form Modal */}
            {isFormVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <form
                        onSubmit={addOrUpdateTask}
                        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
                    >
                        <h1 className="text-gray-800 font-bold text-xl text-center mb-5">
                            {editIndex !== null ? "Edit Task" : "Add New Task"}
                        </h1>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="task" className="font-medium text-gray-700 mb-2">
                                Task
                            </label>
                            <input
                                id="task"
                                className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                placeholder="Enter your task"
                                value={task}
                                required
                                onChange={(e) => setTask(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="description" className="font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <input
                                id="description"
                                className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                placeholder="Task description"
                                value={description}
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="status" className="font-medium text-gray-700 mb-2">
                                Status
                            </label>
                            <select
                                id="status"
                                className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Processing">Processing</option>
                                <option value="Complete">Complete</option>
                            </select>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => setFormVisible(false)}
                                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                            >
                                {editIndex !== null ? "Update Task" : "Add Task"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>

    );
};

export default Todo;
