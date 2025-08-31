import React, { useState } from "react";
import AppKeeper from "./components/keeper/AppKeeper.jsx";
import AppTodo from "./components/Todo/AppTodo.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("keeper"); // default tab

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-indigo-200 p-4 sm:p-6">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
        📒 Keeper + ✅ To-Do
      </h1>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
        <button
          className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition w-32 sm:w-auto ${
            activeTab === "keeper"
              ? "bg-yellow-400 text-gray-800 shadow-md"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("keeper")}
        >
          Notes
        </button>
        <button
          className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition w-32 sm:w-auto ${
            activeTab === "todo"
              ? "bg-indigo-500 text-white shadow-md"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("todo")}
        >
          To-Do List
        </button>
      </div>

      {/* Render Based on Active Tab */}
      <div className="max-w-6xl mx-auto">
        {/* Keeper App */}
        <div className={activeTab === "keeper" ? "block" : "hidden"}>
          <AppKeeper />
        </div>

        {/* To-Do App */}
        <div className={activeTab === "todo" ? "block" : "hidden"}>
          <AppTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
