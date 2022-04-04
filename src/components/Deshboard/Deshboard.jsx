import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Deshboard = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mx-10">
      <div style={{ width: "100%", height: "70%" }}>
        <h1 className="text-4xl text-blue-500 py-8 text-center">
          Investment vs sell width Line Chart
        </h1>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="investment" stroke="#06B6D4" />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis dataKey="investment" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: "100%", height: "70%" }}>
        <h1 className="text-4xl text-orange-500	 py-8 text-center">
          Sell vs revenue width Area Chart
        </h1>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis dataKey="investment" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sell"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: "100%", height: "70%" }}>
        <h1 className="text-4xl text-blue-500 py-8 text-center">
          Investment vs sell vs revenue width Composed Chart
        </h1>
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <XAxis dataKey="month" />
            <YAxis dataKey="investment" />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="investment"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="sell" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: "100%", height: "70%" }}>
        <h1 className="text-4xl text-orange-500 py-8 text-center">
          Investment vs Revenue width BarChart.
        </h1>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Deshboard;
