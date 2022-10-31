import { View, Text, FlatList } from "react-native";

const renderExpenseItem = (item) => {
  return <Text>{item.description}</Text>;
};

export const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => renderExpenseItem(item)}
      keyExtractor={(item) => item.id}
    />
  );
};
