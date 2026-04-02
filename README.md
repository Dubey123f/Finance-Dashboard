# Finance Dashboard

A sleek, responsive finance dashboard for tracking transactions, visualizing cash flow, and getting a quick read on financial health. The app is built with React and Vite, uses Zustand for lightweight state management, and renders clean analytics with Recharts.
# Live Demo:
```bash
Link:https://finance-dashboard-mocha-two.vercel.app/
```
## What It Does

- Shows a transaction-driven dashboard with balance, income, and expense summaries.
- Visualizes financial trends with line and pie charts.
- Lets users browse transactions with search, filtering, and pagination.
- Supports a polished dark-mode interface with a responsive sidebar layout.
- Uses mock data out of the box, so it runs immediately after installation.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Zustand
- Recharts
- Material UI Icons
- React Router DOM

## Key Screens

- Dashboard: summary cards and visual analytics for balances, income, and expense.
- Transactions: searchable, filterable transaction list with pagination.
- Insights: category-level and income-vs-expense analysis.

## Project Structure

```text
src/
  components/
    cards/
    charts/
    layout/
  data/
  pages/
  store/
  utils/
```

## Getting Started
-Clone this Using:
```bash
git clone https://github.com/Dubey123f/Finance-Dashboard.git
```

### Prerequisites

- Node.js 18+ recommended
- npm

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - create an optimized production build
- `npm run preview` - preview the production build locally

## Data Model

The app uses mock transaction data from `src/data/mockData.js`. Each transaction includes:

- `id`
- `title`
- `amount`
- `type` (`income` or `expense`)
- `category`
- `date`

If you want to connect a real backend later, the current store and utility functions are already structured to make that transition straightforward.

## Notes

- The UI is responsive and includes a mobile-friendly sidebar.
- Theme switching is handled in app state.
- Transaction actions are powered by a small global store, keeping the app simple and easy to extend.

## License

No license has been specified yet.
