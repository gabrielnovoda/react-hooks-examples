import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

import NavHeader from "@/components/navigation/nav-header";

const Button = ({
  title,
  onPress,
}: {
  title: string;
  onPress?: () => void;
}) => {
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
};

const Example1 = () => {
  const count = 0;

  const onDecrement = () => {
    //
  };

  const onIncrement = () => {
    //
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavHeader title="Counter Example" onPressBack={() => router.back()} />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          gap: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
            }}
          >
            <Button title="Decrement" onPress={onDecrement} />

            <Text>{count}</Text>

            <Button title="Increment" onPress={onIncrement} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Example1;
