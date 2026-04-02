export const getTotals = (transactions) => {
  let income = 0;
  let expense = 0;

  transactions.forEach((tx) => {
    if (tx.type === "income") income += tx.amount;
    else expense += tx.amount;
  });

  return {
    balance: income - expense,
    income,
    expense,
  };
};