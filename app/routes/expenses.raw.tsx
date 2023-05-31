import { json } from "@remix-run/node";

export const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Exp",
    amount: 12.99,
    date: new Date().toISOString(),
  },
];
export function loader() {
  return json(DUMMY_EXPENSES);
}
