// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout/Layout";
// import Dashboard from "./pages/Dashboard";
// import Transactions from "./pages/Transactions";
// import Insights from "./pages/Insights";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white transition-all duration-300">
        
//         <Layout>
//           <div className="max-w-7xl mx-auto w-full">
            
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/transactions" element={<Transactions />} />
//               <Route path="/insights" element={<Insights />} />
//             </Routes>

//           </div>
//         </Layout>

//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "./store/useStore";

import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";

function App() {
  const { theme } = useStore();

  // 🔥 Apply dark class to HTML
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Router>
      <div
        className="min-h-screen 
        bg-gray-50 dark:bg-zinc-950 
        text-black dark:text-white 
        transition-all duration-300"
      >
        <Layout>
          <div className="max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/insights" element={<Insights />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
}

export default App;