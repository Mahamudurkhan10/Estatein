import React, { useEffect, useState, useContext } from "react";
import { TfiStatsUp, TfiUser } from "react-icons/tfi";
import { AuthContext } from "../../../../Components/Provider/AuthProvider";
import { FaBookmark } from "react-icons/fa";
import { PieChart, Pie, ResponsiveContainer, Tooltip, LabelList, Cell, Legend } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import axios from "axios";
import useUser from "../../../../Components/Hooks/useUser";
import usePayments from "../../../../Components/Hooks/usePayments";
import useAxiosSecure from "../../../../Components/Hooks/useAxiosSecure";

const COLORS = ["#8884d8", "#FF8042", "#ffc658"];
const barColors = ['#0088FE', '#FF8042', '#FFBB28'];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [payments] = usePayments()
  const axiosSecure = useAxiosSecure()
  const [User, refetch] = useUser()
  
  const totalSum = payments.reduce((acc, current) => acc + (current.price), 0);
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalSales: 0,
    totalOrders: 0,
    chartData: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axiosSecure.get("http://localhost:5000/api/dashboard");
        setDashboardData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="flex flex-row justify-center space-x-4">
      <div className="w-12 h-12 rounded-full animate-spin border border-dashed border-cyan-500 border-t-transparent"></div>

      <div className="w-12 h-12 rounded-full animate-spin border-2 border-dashed border-indigo-500 border-t-transparent"></div>

      <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent"></div>

      <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent">
      </div>
    </div>;
  }

  return (
    <div className=" ">
      {/* User Info */}
      <div className="lg:flex  lg:w-1/2 mx-auto border-yellow-100 border-2 mt-5 p-5 gap-5">
        <div className="mb-4 md:mr-6 md:mb-0">
          <img
            className="h-56 rounded-lg object-cover md:w-56"
            src={User?.photoURL}
            alt={User?.displayName}
          />
        </div>
        <div>
          <h1 className="text-xl text-white">Name: {User?.displayName}</h1>
          <h1 className="text-xl text-white">Email: {User?.email}</h1>
          <h1 className="text-4xl font-semibold text-center pt-5 text-[#703bf7]"> {User?.role} </h1>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:m-[100px]">
        <div className="bg-[#283350] p-5">
          <div className="text-xl flex justify-between">
            <h1 className="text-3xl font-semibold text-gray-400">Total Sales</h1>
            <TfiStatsUp className="text-2xl text-yellow-600" />
          </div>
          <h1 className="mt-5 text-2xl text-center font-semibold text-white">{dashboardData.totalSales}</h1>
          <h1 className="mt-5 text-2xl text-center font-medium text-white"> Amount : $ {totalSum}  </h1>


          <p className="text-center text-xl font-semibold text-blue-600 pt-5">increased by 60%</p>
        </div>

        <div className="bg-[#283350] p-5">
          <div className="text-xl flex justify-between">
            <h1 className="text-3xl font-semibold text-gray-400">Total Orders</h1>
            <FaBookmark className="text-2xl text-white" />
          </div>
          <h1 className="mt-5 text-2xl text-center font-semibold text-white">{dashboardData.totalOrders}</h1>
          <p className="text-center text-xl font-semibold text-blue-600 pt-5">increased by 60%</p>
        </div>

        <div className="bg-[#283350] p-5">
          <div className="text-xl flex justify-between">
            <h1 className="text-3xl font-semibold text-gray-400">Total Users</h1>
            <TfiUser className="text-2xl text-yellow-600" />
          </div>
          <h1 className="mt-5 text-2xl text-center font-semibold text-white">{dashboardData.totalUsers}</h1>
          <p className="text-center text-xl font-semibold text-blue-600 pt-5">increased by 60%</p>
        </div>
        <div className="bg-[#283350] p-5">
          <div className="text-xl flex justify-between">
            <h1 className="text-3xl font-semibold text-gray-400">Total Properties</h1>
            <TfiUser className="text-2xl text-yellow-600" />
          </div>
          <h1 className="mt-5 text-2xl text-center font-semibold text-white">{dashboardData.totalProperties}</h1>
          <p className="text-center text-xl font-semibold text-blue-600 pt-5">increased by 60%</p>
        </div>
      </div>

      {/* Recharts PieChart Section */}
      <div className="lg:flex justify-between   gap-9  lg:m-[100px]">
        <div className="mt-10 p-5 flex-1 bg-[#191919] rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-white">Overview of Total Users, Sales, Properties and Orders</h2>
          <div className="w-full h-[600px] mx-auto">
            {dashboardData?.chartData?.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dashboardData.chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={200}

                  >
                    {dashboardData.chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <LabelList dataKey="value" position="inside" fill="#fff" formatter={(value) => `${value}`} />
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-white text-center">No data available</div>
            )}
          </div>
        </div>

        {/* Recharts BarChart Section */}
        <div className="mt-10  flex-1 p-5 bg-[#191919] rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-white">Bar Chart for Total Users, Sales, Properties and Orders</h2>
          <div className="w-full h-[500px] mx-auto">
            {dashboardData.chartData.length > 0 ? (
              <ResponsiveContainer >
                <BarChart
                  width={500}
                  height={400}
                  data={dashboardData.chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="value" fill="#8884d8" shape={TriangleBar} label={{ position: 'top' }}>
                    {dashboardData.chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-white text-center">No data available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdminHome;
