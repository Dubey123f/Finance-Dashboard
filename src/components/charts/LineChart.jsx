// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const LineChartComponent = ({ data }) => {
//   return (
//     <div className="bg-zinc-900 p-5 rounded-xl">
//       <h2 className="mb-4">Balance Trend</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey="amount" stroke="#6366f1" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default LineChartComponent;


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const LineChartComponent = ({ data }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 
    text-black dark:text-white 
    p-5 rounded-2xl shadow-md 
    border border-gray-200 dark:border-zinc-800 
    transition-all duration-300">
      
      {/* Heading */}
      {/* <h2 className="mb-4 text-lg font-semibold">
        📈 Balance Trend
      </h2> */}

      {/* Chart */}
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <LineChart data={data}>
            
            {/* Grid */}
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#e5e7eb" 
              className="dark:stroke-zinc-700"
            />

            {/* X Axis */}
            <XAxis 
              dataKey="date" 
              stroke="#6b7280"
            />

            {/* Y Axis */}
            <YAxis 
              stroke="#6b7280"
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#18181b",
                border: "none",
                borderRadius: "8px",
                color: "white",
              }}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComponent;