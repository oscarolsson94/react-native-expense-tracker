import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

export const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  });

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  );
};
