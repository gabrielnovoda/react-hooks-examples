import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";

import NavHeader from "@/components/navigation/nav-header";

const Button = ({
  title,
  onPress,
}: {
  title: string;
  onPress?: () => void;
}) => {
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
};

const Example3 = () => {
  const [count, setCount] = useState(0);
  const intervalIdRef = useRef<NodeJS.Timeout>();

  const onPressStart = () => {
    intervalIdRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const onPressStop = () => {
    clearInterval(intervalIdRef.current);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavHeader title="Timer Example" onPressBack={() => router.back()} />

      <View style={{ padding: 16 }}>
        <Text
          style={{ fontSize: 20, fontWeight: "bold" }}
        >{`Count: ${count}`}</Text>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
        <Button title="Start" onPress={onPressStart} />
        <Button title="Stop" onPress={onPressStop} />
      </View>
    </View>
  );
};

export default Example3;
