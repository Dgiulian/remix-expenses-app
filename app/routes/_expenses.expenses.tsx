import { Link, Outlet } from "@remix-run/react";

import ExpensesList from "~/components/expenses/ExpensesList";
import { DUMMY_EXPENSES } from "./_expenses.expenses.analysis";
import { FaDownload, FaPlus } from "react-icons/fa";

export default function ExpensesPage() {
  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw" target="_blank">
            <FaDownload />
            <span>Load raw data</span>
          </a>
        </section>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
      ;
    </>
  );
}
