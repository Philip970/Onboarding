import { StyleSheet, View } from "react-native";

import Onborading from "./src/screens/onborading";

export default function App() {
  return (
    <View style={styles.container}>
      <Onborading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
