import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import InsightsIcon from "@mui/icons-material/Insights";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ open, setOpen }) => {
  const baseClass =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200";

  const activeClass = "bg-indigo-600 text-white shadow-md";

  const inactiveClass =
    "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white";

  return (
    <>
      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
<div
  className={`
  fixed top-0 left-0 
  h-screen w-64
  bg-white dark:bg-zinc-900
  text-black dark:text-white
  p-6 flex flex-col
  border-r border-gray-200 dark:border-zinc-800
  z-50 transform transition-transform duration-300

  ${open ? "translate-x-0" : "-translate-x-full"}
  lg:translate-x-0
`}
>
        {/* ================= HEADER ================= */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Finance
          </h1>

          {/* Close Button (mobile + tablet) */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <DashboardIcon fontSize="small" />
            Dashboard
          </NavLink>

          <NavLink
            to="/transactions"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <ReceiptIcon fontSize="small" />
            Transactions
          </NavLink>

          <NavLink
            to="/insights"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <InsightsIcon fontSize="small" />
            Insights
          </NavLink>
        </nav>

        {/* ================= FOOTER ================= */}
        <div className=" pt-8 border-t border-gray-200 dark:border-zinc-800 mt-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Finance Dashboard
          </p>
          <p className="text-xs text-gray-500 mt-1">
            v1.0
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import InsightsIcon from "@mui/icons-material/Insights";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);

//   const baseClass =
//     "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200";

//   const activeClass =
//     "bg-indigo-600 text-white shadow-md";

//   const inactiveClass =
//     "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white";

//   return (
//     <>
//       {/* ================= MOBILE BUTTON ================= */}
//       <button
//         onClick={() => setOpen(true)}
//         className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg 
//         bg-white dark:bg-zinc-900 
//         border border-gray-200 dark:border-zinc-800 shadow"
//       >
//         <MenuIcon />
//       </button>

//       {/* ================= OVERLAY ================= */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* ================= SIDEBAR ================= */}
//       <div
//         className={`fixed md:static top-0 left-0 h-full w-64 
//         bg-white dark:bg-zinc-900 
//         text-black dark:text-white 
//         p-6 flex flex-col 
//         border-r border-gray-200 dark:border-zinc-800 
//         transform transition-transform duration-300 z-50
//         ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
//       >
        
//         {/* Top */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
//             Finance
//           </h1>

//           {/* Close btn mobile */}
//           <button
//             className="md:hidden"
//             onClick={() => setOpen(false)}
//           >
//             <CloseIcon />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex flex-col gap-2">

//           <NavLink
//             to="/"
//             onClick={() => setOpen(false)}
//             className={({ isActive }) =>
//               `${baseClass} ${isActive ? activeClass : inactiveClass}`
//             }
//           >
//             <DashboardIcon fontSize="small" />
//             Dashboard
//           </NavLink>

//           <NavLink
//             to="/transactions"
//             onClick={() => setOpen(false)}
//             className={({ isActive }) =>
//               `${baseClass} ${isActive ? activeClass : inactiveClass}`
//             }
//           >
//             <ReceiptIcon fontSize="small" />
//             Transactions
//           </NavLink>

//           <NavLink
//             to="/insights"
//             onClick={() => setOpen(false)}
//             className={({ isActive }) =>
//               `${baseClass} ${isActive ? activeClass : inactiveClass}`
//             }
//           >
//             <InsightsIcon fontSize="small" />
//             Insights
//           </NavLink>

//         </nav>

//         {/* Bottom */}
//         <div className="mt-auto pt-8 border-t border-gray-200 dark:border-zinc-800">
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             Finance Dashboard
//           </p>
//           <p className="text-xs text-gray-500 mt-1">
//             v1.0
//           </p>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Sidebar;