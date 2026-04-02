
import SummaryCard from "../components/cards/SummaryCard";
import LineChartComponent from "../components/charts/LineChart";
import PieChartComponent from "../components/charts/PieChart";
import { useStore } from "../store/useStore";
import { getTotals } from "../utils/helpers";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const { transactions } = useStore();
  const { balance, income, expense } = getTotals(transactions);

  const chartData = transactions.map((tx) => ({
    date: tx.date,
    amount: tx.amount,
  }));

  const pieData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  // Category data
  const categoryMap = {};
  transactions.forEach((t) => {
    if (!categoryMap[t.category]) categoryMap[t.category] = 0;
    categoryMap[t.category] += t.amount;
  });

  const barData = Object.keys(categoryMap).map((key) => ({
    category: key,
    amount: categoryMap[key],
  }));

  return (
    <div className="space-y-12 px-4 sm:px-6 lg:px-10 py-6
    bg-gray-50 dark:bg-zinc-950 
    text-gray-900 dark:text-gray-100 
    min-h-screen">

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Financial Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Overview of your financial activity
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SummaryCard title="Total Balance" amount={balance} />
        <SummaryCard title="Total Income" amount={income} type="income" />
        <SummaryCard title="Total Expense" amount={expense} type="expense" />
      </div>

      {/* ===================== */}
      {/* CHART ROW 1 */}
      {/* ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Line Chart */}
        <div className="p-6 rounded-2xl 
        bg-white dark:bg-zinc-900 
        border border-gray-200 dark:border-zinc-800 
        shadow-md">
          
          <h2 className="text-lg font-semibold mb-4 text-center">
            Balance Trend
          </h2>

          <LineChartComponent data={chartData} />
        </div>

        {/* Pie Chart */}
        <div className="p-6 rounded-2xl 
        bg-white dark:bg-zinc-900 
        border border-gray-200 dark:border-zinc-800 
        shadow-md">
          
          <h2 className="text-lg font-semibold mb-4 text-center">
            Income vs Expense
          </h2>

          <PieChartComponent data={pieData} />
        </div>
      </div>

      {/* ===================== */}
      {/* CHART ROW 2 */}
      {/* ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Category Bar */}
        <div className="p-6 rounded-2xl 
        bg-white dark:bg-zinc-900 
        border border-gray-200 dark:border-zinc-800 
        shadow-md">
          
          <h2 className="text-lg font-semibold mb-4 text-center">
            Category Distribution
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="category" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="amount" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Transaction Distribution */}
        <div className="p-6 rounded-2xl 
        bg-white dark:bg-zinc-900 
        border border-gray-200 dark:border-zinc-800 
        shadow-md">
          
          <h2 className="text-lg font-semibold mb-4 text-center">
            Transaction Distribution
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="amount" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
