import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import type { ExpenseData } from "~/data/expenses.server";
import { addExpense } from "~/data/expenses.server";

export default function ExpensesAddPage() {
  const navigate = useNavigate();
  const handleOnClose = () => {
    navigate("/expenses");
  };
  return (
    <Modal onClose={handleOnClose}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const data: ExpenseData = {
    title: formData.get("title") as string,
    amount: parseInt(formData.get("amount") as string),
    date: formData.get("date") as string,
  };
  await addExpense(data);
  return redirect(`/expenses`);
}
