

import { useStore } from "../../store/useStore";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ setSidebarOpen }) => {
  const { role, setRole, addTransaction, theme, toggleTheme } = useStore();

  const handleAdd = () => {
    const newTx = {
      id: Date.now(),
      title: "New Transaction",
      amount: Math.floor(Math.random() * 5000),
      type: "expense",
      category: "Misc",
      date: new Date().toISOString().split("T")[0],
    };

    addTransaction(newTx);
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 py-4 
    bg-white dark:bg-zinc-900 
    text-black dark:text-white 
    border-b border-gray-200 dark:border-zinc-800 
    backdrop-blur-xl">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        
        {/* 🔥 HAMBURGER (ONLY MOBILE) */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden p-2 rounded-lg 
          bg-gray-100 dark:bg-zinc-800 
          border border-gray-200 dark:border-zinc-700"
        >
          <MenuIcon />
        </button>

        <h2 className="text-lg sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400">
          Finance Dashboard
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* Role */}
        {/* <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="hidden sm:block px-3 py-2 rounded-lg 
          bg-gray-100 dark:bg-zinc-800 
          text-black dark:text-white 
          border border-gray-300 dark:border-zinc-700"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select> */}


        {/* Desktop */}
<select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="hidden sm:block px-3 py-2 rounded-lg 
  bg-gray-100 dark:bg-zinc-800 
  text-black dark:text-white 
  border border-gray-300 dark:border-zinc-700"
>
  <option value="viewer">Viewer</option>
  <option value="admin">Admin</option>
</select>

{/* Mobile (icon style compact) */}
<select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="sm:hidden px-2 py-2 rounded-lg 
  bg-gray-100 dark:bg-zinc-800 
  text-black dark:text-white 
  border border-gray-300 dark:border-zinc-700 text-sm"
>
  <option value="viewer">V</option>
  <option value="admin">A</option>
</select>

        {/* Add */}
        {/* {role === "admin" && (
          <button
            onClick={handleAdd}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg 
            bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <AddIcon fontSize="small" />
            Add
          </button>
        )} */}

        {/* Desktop Add */}
{role === "admin" && (
  <button
    onClick={handleAdd}
    className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg 
    bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition"
  >
    <AddIcon fontSize="small" />
    Add
  </button>
)}

{/* Mobile Add (icon only) */}
{role === "admin" && (
  <button
    onClick={handleAdd}
    className="sm:hidden p-2 rounded-full 
    bg-indigo-600 hover:bg-indigo-700 text-white shadow"
  >
    <AddIcon fontSize="small" />
  </button>
)}

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full 
          bg-gray-100 dark:bg-zinc-800 
          hover:bg-gray-200 dark:hover:bg-zinc-700"
        >
          {theme === "dark" ? (
            <LightModeIcon fontSize="small" />
          ) : (
            <DarkModeIcon fontSize="small" />
          )}
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 px-2 sm:px-3 py-2 rounded-full 
        bg-gray-100 dark:bg-zinc-800">
          <PersonIcon fontSize="small" />
          <span className="hidden sm:block text-sm">User</span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
