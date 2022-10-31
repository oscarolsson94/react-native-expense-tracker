import { View, Text } from "react-native";

export const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>$177.95</Text>
    </View>
  );
};
