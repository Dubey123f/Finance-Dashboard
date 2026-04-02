// import { PieChart, Pie, Tooltip, Cell } from "recharts";

// const COLORS = ["#6366f1", "#22c55e", "#ef4444"];

// const PieChartComponent = ({ data }) => {
//   return (
//     <div className="bg-zinc-900 p-5 rounded-xl">
//       <h2 className="mb-4">Spending Breakdown</h2>
//       <PieChart width={300} height={300}>
//         <Pie data={data} dataKey="value" nameKey="name">
//           {data.map((entry, index) => (
//             <Cell key={index} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </div>
//   );
// };

// export default PieChartComponent;

import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#ef4444", "#f59e0b"];

const PieChartComponent = ({ data }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 
    text-black dark:text-white 
    p-5 rounded-2xl shadow-md 
    border border-gray-200 dark:border-zinc-800 
    transition-all duration-300">
      
      {/* Heading */}
      {/* <h2 className="mb-4 text-lg font-semibold">
        🥧 Spending Breakdown
      </h2> */}

      {/* Chart */}
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}   // 🔥 donut style (premium look)
              outerRadius={100}
              paddingAngle={3}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#18181b",
                border: "none",
                borderRadius: "8px",
                color: "white",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;