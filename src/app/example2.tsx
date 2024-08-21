import { router } from "expo-router";
import { useState } from "react";
import { FlatList, ListRenderItem, Pressable, Text, View } from "react-native";

import NavHeader from "@/components/navigation/nav-header";
import { Colors } from "@/constants/Colors";

type TItem = {
  id: string;
  name: string;
};

type ItemProps = {
  item: TItem;
  isSelected: boolean;
  onPress: (item: TItem) => void;
};

const ListItem: React.FC<ItemProps> = ({ item, isSelected, onPress }) => {
  console.log(`Render ListItem component: ${item.name}`);

  return (
    <Pressable onPress={() => onPress(item)}>
      <View
        style={{
          paddingVertical: 24,
          paddingHorizontal: 16,
          borderWidth: isSelected ? 2 : 1,
          borderRadius: 16,
          borderColor: isSelected ? "blue" : "black",
          backgroundColor: Colors.light.background,
        }}
      >
        <Text style={{ fontSize: 16 }}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

const List = ({
  data,
  selectedItem,
  onPressItem,
}: {
  data: TItem[];
  selectedItem?: TItem;
  onPressItem: (item: TItem) => void;
}) => {
  console.log("Render List component");

  const renderItem: ListRenderItem<TItem> = ({ item }) => {
    const isSelected = item.id === selectedItem?.id;
    return (
      <ListItem item={item} isSelected={isSelected} onPress={onPressItem} />
    );
  };

  const rendereSparator = () => <View style={{ height: 16 }} />;

  return (
    <FlatList
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 24,
      }}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={rendereSparator}
      keyExtractor={(item) => item.id}
      extraData={selectedItem?.id}
    />
  );
};

const Example2 = () => {
  const [selectedItem, setSelectedItem] = useState<TItem | undefined>();

  const data: TItem[] = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
    { id: "4", name: "Item 4" },
    { id: "5", name: "Item 5" },
    { id: "6", name: "Item 6" },
    { id: "7", name: "Item 7" },
    { id: "8", name: "Item 8" },
    { id: "9", name: "Item 9" },
    { id: "10", name: "Item 10" },
  ];

  const onPressItem = (item: TItem) => {
    setSelectedItem(item);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavHeader title="List Example" onPressBack={() => router.back()} />

      <View style={{ padding: 16 }}>
        <Text
          style={{ fontSize: 20, fontWeight: "bold" }}
        >{`Selected Item: ${selectedItem?.name}`}</Text>
      </View>

      <List data={data} onPressItem={onPressItem} />
    </View>
  );
};

export default Example2;
