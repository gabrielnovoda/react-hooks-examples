import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useCounter } from "@/hooks/use-counter";

type CounterProps = {};

const Counter: React.FC<CounterProps> = () => {
  const { value, onIncrement, onDecrement } = useCounter();

  return (
    <View style={styles.base}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={onDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={onIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  valueContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
  },
  button: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 26,
    color: "black",
  },
});

export default Counter;
