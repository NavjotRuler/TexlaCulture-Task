import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Celebration() {
  const [celebrations, setCelebrations] = React.useState([
    {
      event: "Birthday",
      second: "",
      photo: require("../assets/a9abcdd90c1815c8c205343d1aec7442-removebg-preview.png"),
      name: "Shubham",
      iconName: "chevron-forward",
      color: "#d9ead3",
    },
    {
      event: "Marriage",
      second: "Anniversary",
      photo: require("../assets/iphone_emoji-removebg-preview.png"),
      name: "Yash",
      iconName: "chevron-forward",
      color: "#9fc5e8",
    },
    {
      event: "Work",
      second: "Anniversary",
      photo: require("../assets/iphone_emoji_2-removebg-preview.png"),
      name: "Riku",
      iconName: "chevron-forward",
      color: "#b4a7d6",
    },
    {
      event: "Kid's",
      second: "Birthday",
      photo: require("../assets/12c4bf4dc71f33d6e2b5670f18b92480-removebg-preview.png"),
      name: "Priyank",
      iconName: "chevron-forward",
      color: "#f9cb9c",
    },
  ]);
  return (
    <View>
      <Text style={styles.textMain}> Celebrations</Text>
      <View>
        {celebrations.map((val, index) => {
          return (
            <View
              key={index}
              style={[
                {
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  borderWidth: 1, 
                  marginBottom: 20,
                  backgroundColor: val.color
                },
                styles.text,
              ]}
            >
              <View style={styles.text1}>
                <Text>{val.event}</Text>
                <Text>{val.second}</Text> 
              </View>
              <View
                style={{
                  height: 80,
                  width: 80,
                  zIndex: 1000,
                  position: "absolute",
                  alignSelf: "center",
                  start: "35%",
                  backgroundColor: val.color,
                  borderRadius: 40,
                }}
              >
                <Image
                  style={{ height: 80, width: 80, borderRadius: 40 }}
                  source={val.photo}
                />
              </View>

              <Text style={{ paddingHorizontal: 10 }}>{val.name}</Text>
              <Ionicons
                name={val.iconName} size={20}
                style={{ position: "absolute", end: 1, paddingHorizontal: 2 }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default Celebration;

const styles = StyleSheet.create({
  textMain: {
    padding: 8,
    fontWeight: "bold",
    alignItems: "center",
  },
  text: {
    margin: 7,
    padding: 15,
    borderColor: "#6fa8dc",
    borderWidth: 0,
    borderRadius: 10,
  },
  text1: {
    // flex: 1,
    // alignItems: "flex-start",
  },
  clr1: {
    backgroundColor: "#49e675",
  },
  clr2: {
    backgroundColor: "#97ccf0",
  },
  clr3: {
    backgroundColor: "#b4a7d6",
  },
  clr4: {
    backgroundColor: "#f6b26b",
  },
});
