


import { useState, useEffect } from "react";
import { useStore } from "../store/useStore";
import DeleteIcon from "@mui/icons-material/Delete";

const Transactions = () => {
  const { transactions, role, deleteTransaction } = useStore();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredData = transactions.filter((tx) => {
    const matchesSearch = tx.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : tx.type === filter;

    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 
    bg-gray-50 dark:bg-zinc-950 min-h-screen">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Transactions
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Track your financial activity
          </p>
        </div>

        <div className="px-3 py-1 rounded-lg text-sm 
        bg-gray-100 dark:bg-zinc-800">
          {filteredData.length} Results
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg 
          bg-white dark:bg-zinc-900 
          border border-gray-200 dark:border-zinc-800"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-lg 
          bg-white dark:bg-zinc-900 
          border border-gray-200 dark:border-zinc-800"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* ================= TABLE VIEW (DESKTOP) ================= */}
      <div className="hidden md:block rounded-xl overflow-hidden 
      bg-white dark:bg-zinc-900 border">

        {/* Header */}
        <div className="grid grid-cols-5 p-4 text-sm font-semibold border-b">
          <p>Title</p>
          <p>Category</p>
          <p>Date</p>
          <p>Amount</p>
          <p className="text-center">Action</p>
        </div>

        {/* Data */}
        {currentData.map((tx) => (
          <div
            key={tx.id}
            className="grid grid-cols-5 p-4 items-center border-b hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <p>{tx.title}</p>
            <p>{tx.category}</p>
            <p>{tx.date}</p>

            <p className={tx.type === "income" ? "text-green-500" : "text-red-500"}>
              ₹{tx.amount}
            </p>

            <div className="flex justify-center">
              {role === "admin" && (
                <button onClick={() => deleteTransaction(tx.id)}>
                  <DeleteIcon />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ================= CARD VIEW (MOBILE) ================= */}
      <div className="md:hidden space-y-3">
        {currentData.map((tx) => (
          <div
            key={tx.id}
            className="p-4 rounded-xl bg-white dark:bg-zinc-900 border"
          >
            <div className="flex justify-between">
              <p className="font-semibold">{tx.title}</p>
              <p className={tx.type === "income" ? "text-green-500" : "text-red-500"}>
                ₹{tx.amount}
              </p>
            </div>

            <p className="text-sm text-gray-500">{tx.category}</p>
            <p className="text-xs text-gray-400">{tx.date}</p>

            {role === "admin" && (
              <button
                onClick={() => deleteTransaction(tx.id)}
                className="mt-2 text-red-500"
              >
                <DeleteIcon fontSize="small" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 dark:bg-zinc-800 rounded"
          >
            Prev
          </button>

          <p className="text-sm">
            {currentPage} / {totalPages}
          </p>

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Transactions;
