import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 21 },
    { name: "Friend #3", age: 22 },
    { name: "Friend #4", age: 23 },
    { name: "Friend #5", age: 24 },
    { name: "Friend #6", age: 25 },
    { name: "Friend #7", age: 26 },
    { name: "Friend #8", age: 27 },
    { name: "Friend #9", age: 28 },
  ];

  return (
    <FlatList
      // horizontal is to make the list go horizontal
      // showsHorizontalScrollIndicator={false} hide scrollbar

      // This is the way we pass the key to every item, the argument is every item on each instance
      keyExtractor={(friend) => friend.name}
      // data is the array we'll iterate or we want to render
      data={friends}
      // in RN we don't use MAP like in the web, we use renderItem FN which every element can be used by destructuring { item: { name: ' Friend #1 ', age: 20 }}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  // Margin style is a prop to add space on every item in the list
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
