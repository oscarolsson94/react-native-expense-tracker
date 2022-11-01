import { View, Text } from "react-native";
import { Input } from "./Input";

export const ExpenseForm = () => {
  const amountChangedHandler = () => {};

  /*   const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  }; */

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
};
