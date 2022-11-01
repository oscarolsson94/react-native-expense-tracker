import { View, Text, TextInput } from "react-native";

export const Input = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput />
    </View>
  );
};
