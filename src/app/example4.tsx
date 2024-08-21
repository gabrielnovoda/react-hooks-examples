import { router } from "expo-router";
import { View } from "react-native";

import Counter from "@/components/common/counter";
import NavHeader from "@/components/navigation/nav-header";

const Example4 = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavHeader
        title="Separation of Concerns / Testing"
        onPressBack={() => router.back()}
      />

      <Counter />
    </View>
  );
};

export default Example4;
