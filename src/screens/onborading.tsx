import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import Items from "../components/items";
import { data } from "../../constants";

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
  Dimensions.get("window");

const Onborading = () => {
  return (
    <View style={styles.container}>
      <Items data={data} />
      <LinearGradient
        colors={["#FFFFFF01", "#FFFFFFFA", "white", "white"]}
        style={styles.bottomContainer}
      >
        <View style={styles.separator} />
        <View style={{ alignItems: "center" }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Your Appearance</Text>
            <Text style={styles.title}>Shows Your Quality</Text>
          </View>

          <Text style={styles.description}>Change the Quality of your</Text>
          <Text style={styles.description}>
            Appearance with MNIML Fashoin now.
          </Text>

          <Pressable style={styles.button}>
            <Text style={styles.buttonTitle}>Sign Up with Email</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Onborading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 26,
    fontWeight: 600,
    color: "#0c0c0c",
  },
  description: {
    color: "#6e6969",
  },
  titleContainer: {
    marginBottom: 12,
    alignItems: "center",
  },
  separator: {
    width: 32,
    height: 2,
    borderRadius: 2,
    backgroundColor: "white",
  },
  button: {
    width: WINDOW_WIDTH - 2 * 24,
    backgroundColor: "#0c0c0c",
    marginTop: 32,
    padding: 16,
    borderRadius: 24,
    alignItems: "center",
  },
  buttonTitle: {
    color: "white",
  },
  bottomContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    bottom: 0,
    left: 0,
    right: 0,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT / 2,
  },
});
