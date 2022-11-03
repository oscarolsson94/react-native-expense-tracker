import axios from "axios";

export const storeExpense = (expenseData) => {
  axios.post(
    "https://react-native-course-7ae38-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
};
