import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Clock() {
  return (
    <View style={styles.main}>
      <Ionicons style={{flex: 1, alignSelf: "center", paddingLeft: 5}} name="stopwatch" size={40}/>
      <View style={styles.text}>
        <Text>3/01/23</Text>
        <Text>Clock In-hh:mm AM</Text>
        <Text>Clock Out-hh:mm PM</Text>
      </View>
      <Text
        style={{
            flex: 1,
          alignSelf: "center",
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 10,
          backgroundColor: "#0b5394",
          color: "#ffffff",
          paddingVertical: 5
        }}
      >
        Clock In
      </Text>
      <Ionicons
        style={{ alignSelf: "center" }}
        name="chevron-forward"
        size={20}
      />
    </View>
  );
}

export default Clock;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#cfe2f3",
  },
  text: {
    flexDirection: "column",
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5
  },
});
