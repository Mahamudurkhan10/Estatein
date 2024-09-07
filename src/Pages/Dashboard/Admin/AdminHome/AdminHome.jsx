import React, { useContext } from "react";
import { TfiStatsUp, TfiUser } from "react-icons/tfi";
import { AuthContext } from "../../../../Components/Provider/AuthProvider";
import { FaBookmark } from "react-icons/fa";
import { PieChart, Pie, ResponsiveContainer, Tooltip, LabelList, Cell, Legend } from "recharts";

// Sample data for PieChart with different color schemes
const pieData = [
  { name: 'Group A', value: 400, fill: "#8884d8" }, // Purple
  { name: 'Group B', value: 300, fill: "#82ca9d" }, // Green
  { name: 'Group C', value: 300, fill: "#ffc658" }, // Yellow
  { name: 'Group D', value: 200, fill: "#ff7300" }, // Orange
];

// Alternatively, you can define an array of colors:
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="">
      {/* User Info */}
      <div className="flex border w-1/3 mx-auto mt-5 p-5 gap-5">
        <div className="mb-4 md:mr-6 md:mb-0">
          <img
            className="h-56 rounded-lg object-cover md:w-56"
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </div>
        <div>
          <h1 className="text-xl text-white">Name: {user?.displayName}</h1>
          <h1 className="text-xl text-white">Email: {user?.email}</h1>
          <h1 className="text-4xl font-semibold text-center pt-5 text-[#703bf7]">Admin</h1>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:m-[100px]">
        <div className="bg-[#283350] p-5">
          <div className="text-xl flex justify-between">
            <h1 className="text-3xl font-semibold text-gray-400">Total Sales</h1>
            <TfiStatsUp className="text-2xl text-yellow-600" />
          </div>
          <h1 className="mt-5 text-2xl text-center font-semibold text-white">$ 1000</h1>
          <p className="text-center text-xl font-semibold text-blue-600 pt-5">increased by 60%</p>
        </div>

        <div className="bg-[#283350] p-5">
          <div className="text-xl flex justify-between">
            <h1 className="text-3xl font-semibold text-gray-400">Total Orders</h1>
            <FaBookmark className="text-2xl text-white" />
          </div>
          <h1 className="mt-5 text-2xl text-center font-semibold text-white">10</h1>
          <p className="text-center text-xl font-semibold text-blue-600 pt-5">increased by 60%</p>
        </div>

        <div className="bg-[#283350] p-5">
          <div className="text-xl flex justify-between">
            <h1 className="text-3xl font-semibold text-gray-400">Total Users</h1>
            <TfiUser className="text-2xl text-yellow-600" />
          </div>
          <h1 className="mt-5 text-2xl text-center font-semibold text-white">20</h1>
          <p className="text-center text-xl font-semibold text-blue-600 pt-5">increased by 60%</p>
        </div>
      </div>

      {/* Recharts PieChart Section */}
      <div className="mt-10 p-5 bg-[#1f2937] rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-white">Sales Distribution</h2>
        <div className="w-[1000px] h-[500px] mx-auto"> {/* Adjusted width and height */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120} // Adjusted outer radius for better visual
              >
                {/* Loop through pieData and apply different colors */}
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                {/* Customizing LabelList to display both name and value */}
                <LabelList 
                  dataKey="value" 
                  position="inside" 
                  fill="#fff" 
                  formatter={(value, entry) => ` ${value}`} 
                />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
