import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// On RN we have Button(normal button, simple component)
// TouchableOpacity(highly customizable component that can detect a press(click) on any kind of element )
// Button has no styles unlike touchableopacity

/*
  <TouchableOpacity onPress={() => console.log('Pressed')}>
  <Text>Go To List Demo<Text>
  <TouchableOpacity />
*/

const HomeScreen = ({ navigation }) => {
  // We have access to navigation since our component is shown by the stack navigator

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        // OnPress === OnClick
        // We pass the NAME of the key we used in the stack navigator for the component
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Box Demo"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
