import { prisma } from "./database.server";

export type ExpenseData = {
  title: string;
  amount: number;
  date: string;
};

export async function addExpense(expenseData: ExpenseData) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    console.error(error);
  }
}
