import { useContext } from "react";
import { ExpensesOutput } from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export const AllExpenses = () => {
  const { expenses } = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" />;
};
