import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { purple } from "../utils/colors";

export default function TextBtn({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[{ color: purple, textAlign: "center" }, style]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
