import { useNavigate } from "@remix-run/react";
import React from "react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function ExpensesDetailPage() {
  const navigate = useNavigate();
  const handleOnClose = () => {
    navigate("..");
  };
  return (
    <Modal onClose={handleOnClose}>
      <ExpenseForm />
    </Modal>
  );
}
