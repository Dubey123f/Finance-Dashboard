import { create } from "zustand";
import { transactions as mockData } from "../data/mockData";

export const useStore = create((set) => ({
  
  transactions: mockData,
  role: "viewer",
  theme: "dark",
  setRole: (role) => set({ role }),

  addTransaction: (tx) =>
    set((state) => ({
      transactions: [...state.transactions, tx],
    })),
    deleteTransaction: (id) =>
  set((state) => ({
    transactions: state.transactions.filter((tx) => tx.id !== id),
  })),
  theme: "dark",

 toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";

      // 🔥 DIRECT APPLY (MOST IMPORTANT FIX)
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return { theme: newTheme };
    }),
}));