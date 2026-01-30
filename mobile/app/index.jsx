import {COLORS} from "@/constants/colors";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={[styles.container]}
    >
      <Text style={[styles.text]}>Hello World</Text>
      <Link style={[styles.text]} href={"/(auth)"}>
        SignIn
      </Link>
      <Link style={[styles.text]} href={"/(auth)/signup"}>
        SignUp
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
});
