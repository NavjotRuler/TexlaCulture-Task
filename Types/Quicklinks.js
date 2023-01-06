import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function QuickLinks() {
  return (
    <View>
      <Text style={styles.textMain}>Quick Links</Text>
      <View style={styles.main}>
        <View style={styles.text}>
          <Text>Holiday</Text>
          <Text>Calender</Text>
          <Ionicons
            style={{ position: "absolute", end: 1, padding: 2 }}
            name="navigate-sharp"
            color= 'gray'
            size={15}
          />
        </View>
        <View style={styles.text}>
          <Text>Leave</Text>
          <Text>Policy</Text>
          <Ionicons
            style={{ position: "absolute", end: 1, padding: 2 }}
            name="navigate-sharp"
            color= 'gray'
            size={15}
          />
        </View>
        <View style={styles.text}>
          <Text>Payroll</Text>
          <Text>Manual</Text>
          <Ionicons
            style={{ position: "absolute", end: 1, padding: 2,  }}
            color= 'gray'
            name="navigate-sharp"
            size={15}
          />
        </View>
      </View>
    </View>
  );
}

export default QuickLinks;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
  },
  text: {
    margin: 2,
    marginHorizontal: 15,
    padding: 15,
    borderColor: "#6fa8dc",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#9fc5e8",
  },
  icon: {
    flexDirection: "row",
  },
  textMain: {
    padding: 8,
    fontWeight: "bold",
  },
});
