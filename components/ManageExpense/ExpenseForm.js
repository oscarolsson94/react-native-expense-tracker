import { View, StyleSheet } from "react-native";
import { Input } from "./Input";

export const ExpenseForm = () => {
  const [inputValues, setInputvalues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputvalues((prev) => ({ ...prev, [inputIdentifier]: enteredValue }));
  };

  /*   const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  }; */

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: () => inputChangedHandler("amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => inputChangedHandler("date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: () => inputChangedHandler("description"),
          value: inputValues.description,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
