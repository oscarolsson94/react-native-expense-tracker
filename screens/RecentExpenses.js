import { useContext, useEffect } from "react";
import { ExpensesOutput } from "../components/ExpensesOutput";
import { LoadingOverlay } from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";

export const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);

  const { expenses, setExpenses } = useContext(ExpensesContext);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      setExpenses(expenses);
    };

    getExpenses();
  }, []);

  if (isFetching) return <LoadingOverlay />;

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={"Last 7 Days"}
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};
