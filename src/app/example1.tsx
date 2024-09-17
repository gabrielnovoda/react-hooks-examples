import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

import NavHeader from "@/components/navigation/nav-header";
import { useCounter } from "@/hooks/use-counter";

const Button = React.memo(
  ({ title, onPress }: { title: string; onPress?: () => void }) => {
    console.log(`Render ${title} button`);

    return (
      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.6 : 1,
          backgroundColor: "grey",
          padding: 20,
        })}
        onPress={onPress}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}> {title}</Text>
      </Pressable>
    );
  }
);

const Example1 = () => {
  const { value, onIncrement, onDecrement } = useCounter();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavHeader title="Counter Example" onPressBack={() => router.back()} />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Button title="Decrement" onPress={onDecrement} />

          <Text>{value}</Text>

          <Button title="Increment" onPress={onIncrement} />
        </View>
      </View>
    </View>
  );
};

export default Example1;
