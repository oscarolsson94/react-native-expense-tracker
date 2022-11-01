import { View, Text } from "react-native";
import { Input } from "./Input";

export const ExpenseForm = () => {
  return (
    <View>
      <Input label="Amount" />
      <Input label="Date" />
      <Input label="Description" />
    </View>
  );
};
