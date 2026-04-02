// import { useStore } from "../store/useStore";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   ResponsiveContainer,
// } from "recharts";

// const COLORS = ["#6366f1", "#22c55e", "#ef4444", "#f59e0b"];

// const Insights = () => {
//   const { transactions } = useStore();

//   if (transactions.length === 0) {
//     return (
//       <div className="text-center text-gray-400 mt-10">
//         No data available
//       </div>
//     );
//   }

//   // Calculations
//   const highest = Math.max(...transactions.map((t) => t.amount));

//   const totalIncome = transactions
//     .filter((t) => t.type === "income")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const totalExpense = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const savings = totalIncome - totalExpense;

//   // Category wise
//   const categoryMap = {};
//   transactions.forEach((t) => {
//     if (!categoryMap[t.category]) categoryMap[t.category] = 0;
//     categoryMap[t.category] += t.amount;
//   });

//   const topCategory = Object.keys(categoryMap).reduce((a, b) =>
//     categoryMap[a] > categoryMap[b] ? a : b
//   );

//   // Chart Data
//   const pieData = Object.keys(categoryMap).map((key) => ({
//     name: key,
//     value: categoryMap[key],
//   }));

//   const barData = [
//     { name: "Income", value: totalIncome },
//     { name: "Expense", value: totalExpense },
//   ];

//   return (
//     <div className="space-y-6">
      
//       <h1 className="text-3xl font-bold">Insights & Analytics</h1>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
//         <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 rounded-2xl shadow-lg">
//           <h2 className="text-white/80 text-sm">Highest Transaction</h2>
//           <p className="text-3xl font-bold mt-2 text-white">
//             ₹{highest.toLocaleString()}
//           </p>
//         </div>

//         <div className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-2xl shadow-lg">
//           <h2 className="text-white/80 text-sm">Total Income</h2>
//           <p className="text-3xl font-bold mt-2 text-white">
//             ₹{totalIncome.toLocaleString()}
//           </p>
//         </div>

//         <div className="bg-gradient-to-br from-red-500 to-red-700 p-6 rounded-2xl shadow-lg">
//           <h2 className="text-white/80 text-sm">Total Expense</h2>
//           <p className="text-3xl font-bold mt-2 text-white">
//             ₹{totalExpense.toLocaleString()}
//           </p>
//         </div>

//       </div>

//       {/* Charts Section */}
//       <div className="grid md:grid-cols-2 gap-6">
        
//         {/* Pie Chart */}
//         <div className="bg-zinc-900/70 backdrop-blur-xl p-6 rounded-xl border border-zinc-800">
//           <h2 className="mb-4 text-lg font-semibold">Spending by Category</h2>

//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie data={pieData} dataKey="value" nameKey="name">
//                 {pieData.map((_, index) => (
//                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Bar Chart */}
//         <div className="bg-zinc-900/70 backdrop-blur-xl p-6 rounded-xl border border-zinc-800">
//           <h2 className="mb-4 text-lg font-semibold">Income vs Expense</h2>

//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={barData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="value" fill="#6366f1" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//       </div>

//       {/* Insights Box */}
//       <div className="bg-zinc-900/70 backdrop-blur-xl p-6 rounded-xl border border-zinc-800 space-y-3">
//         <h2 className="text-xl font-semibold mb-2">💡 Smart Insights</h2>

//         <p>
//           You are spending most on{" "}
//           <span className="text-indigo-400 font-semibold">{topCategory}</span>
//         </p>

//         <p>
//           💰 Your savings this month:{" "}
//           <span className="text-green-400 font-semibold">
//             ₹{savings.toLocaleString()}
//           </span>
//         </p>

//         <p>
//           {savings > 0
//             ? "Great! You are saving money."
//             : "Warning! Your expenses exceed income."}
//         </p>
//       </div>

//     </div>
//   );
// };

// export default Insights;


import { useStore } from "../store/useStore";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#ef4444", "#f59e0b"];

const Insights = () => {
  const { transactions } = useStore();

  if (transactions.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-10">
        No data available
      </div>
    );
  }

  // Calculations
  const highest = Math.max(...transactions.map((t) => t.amount));

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const savings = totalIncome - totalExpense;

  // Category wise
  const categoryMap = {};
  transactions.forEach((t) => {
    if (!categoryMap[t.category]) categoryMap[t.category] = 0;
    categoryMap[t.category] += t.amount;
  });

  const topCategory = Object.keys(categoryMap).reduce((a, b) =>
    categoryMap[a] > categoryMap[b] ? a : b
  );

  // Chart Data
  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  const barData = [
    { name: "Income", value: totalIncome },
    { name: "Expense", value: totalExpense },
  ];

  return (
    <div className="space-y-10 p-6 md:p-10 
    bg-gray-50 dark:bg-zinc-950 
    min-h-screen transition-all duration-300">
      
      {/* Header */}
      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
          Insights & Analytics
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          Understand your financial patterns and behavior
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Highest */}
        <div className="p-6 rounded-2xl shadow-md 
        bg-white dark:bg-zinc-900 
        border border-gray-200 dark:border-zinc-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Highest Transaction
          </p>
          <h2 className="text-2xl font-bold mt-2 text-gray-800 dark:text-gray-200">
            ₹{highest.toLocaleString()}
          </h2>
        </div>

        {/* Income */}
        <div className="p-6 rounded-2xl shadow-md 
        bg-white dark:bg-zinc-900 
        border border-gray-200 dark:border-zinc-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Income
          </p>
          <h2 className="text-2xl font-bold mt-2 text-green-500">
            ₹{totalIncome.toLocaleString()}
          </h2>
        </div>

        {/* Expense */}
        <div className="p-6 rounded-2xl shadow-md 
        bg-white dark:bg-zinc-900 
        border border-gray-200 dark:border-zinc-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Expense
          </p>
          <h2 className="text-2xl font-bold mt-2 text-red-500">
            ₹{totalExpense.toLocaleString()}
          </h2>
        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Pie */}
        <div className="p-6 rounded-2xl shadow-md 
        bg-white dark:bg-zinc-900 
        border border-gray-200 dark:border-zinc-800">
          
          <h2 className="mb-4 font-semibold text-gray-800 dark:text-gray-200">
            Spending by Category
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name">
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>

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

        {/* Bar */}
        <div className="p-6 rounded-2xl shadow-md 
        bg-white dark:bg-zinc-900 
        border border-gray-200 dark:border-zinc-800">
          
          <h2 className="mb-4 font-semibold text-gray-800 dark:text-gray-200">
             Income vs Expense
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#18181b",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                }}
              />
              <Bar dataKey="value" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Smart Insights */}
      <div className="p-6 rounded-2xl shadow-md 
      bg-white dark:bg-zinc-900 
      border border-gray-200 dark:border-zinc-800 space-y-3">
        
        <h2 className="text-xl text-gray-800 dark:text-gray-200 font-semibold"> Smart Insights</h2>

        <p className="text-gray-600 dark:text-gray-400">
          You are spending most on{" "}
          <span className="text-indigo-500 font-semibold">
            {topCategory}
          </span>
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          💰 Savings:{" "}
          <span className="text-green-500 font-semibold">
            ₹{savings.toLocaleString()}
          </span>
        </p>

        <p className="font-medium">
          {savings > 0
            ? "✅ Great! You are saving money."
            : "⚠️ Warning! Your expenses exceed income."}
        </p>
      </div>

    </div>
  );
};

export default Insights;