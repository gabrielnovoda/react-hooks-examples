import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

import NavHeader from "@/components/navigation/nav-header";

const Example3 = () => {
  const [count, setCount] = useState(0);

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
    </View>
  );
};

export default Example3;
