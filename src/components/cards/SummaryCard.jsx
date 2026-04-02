// import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

// const SummaryCard = ({ title, amount, type }) => {
//   const isIncome = type === "income";
//   const isExpense = type === "expense";

//   return (
//     <div
//       className={`
//         relative p-6 rounded-2xl shadow-lg 
//       bg-white dark:bg-zinc-900 text-black dark:text-white
//         ${isIncome && "from-green-500 to-green-700"}
//         ${isExpense && "from-red-500 to-red-700"}
//         ${!type && "from-indigo-500 to-indigo-700"}
//         hover:scale-105 transition duration-300
//       `}
//     >
//       {/* Glow effect */}
//       <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-xl"></div>

//       {/* Content */}
//       <div className="relative z-10 flex justify-between items-center">
//         <div>
//           <h2 className="text-sm text-white/80">{title}</h2>
//           <p className="text-3xl font-bold mt-2 text-white">
//             ₹{amount.toLocaleString()}
//           </p>
//         </div>

//         {/* Icon */}
//         <div className="bg-white/20 p-3 rounded-full">
//           {isIncome && <ArrowUpward />}
//           {isExpense && <ArrowDownward />}
//           {!type && <span className="text-lg">💰</span>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SummaryCard;


import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const SummaryCard = ({ title, amount, type }) => {
  const isIncome = type === "income";
  const isExpense = type === "expense";

  const accentColor = isIncome
    ? "bg-green-500"
    : isExpense
    ? "bg-red-500"
    : "bg-indigo-500";

  return (
    <div
      className="relative p-6 rounded-2xl shadow-md 
      bg-white dark:bg-zinc-900 
      text-black dark:text-white 
      border border-gray-200 dark:border-zinc-800 
      hover:scale-[1.02] transition-all duration-300"
    >
      {/* Accent Strip */}
      <div className={`absolute top-0 left-0 w-full h-1 ${accentColor} rounded-t-2xl`} />

      {/* Content */}
      <div className="flex justify-between items-center mt-2">
        
        {/* Text */}
        <div>
          <h2 className="text-sm text-gray-600 dark:text-gray-400">
            {title}
          </h2>
          <p className="text-3xl font-bold mt-2">
            ₹{amount.toLocaleString()}
          </p>
        </div>

        {/* Icon */}
        <div
          className={`p-3 rounded-full 
          ${accentColor} 
          text-white shadow`}
        >
          {isIncome && <ArrowUpward />}
          {isExpense && <ArrowDownward />}
          {!type && <span className="text-lg">💰</span>}
        </div>

      </div>
    </div>
  );
};

export default SummaryCard;