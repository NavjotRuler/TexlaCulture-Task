import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MyTeam() {
  const [employee, setEmployee] = React.useState([
    {
      photo: require("../assets/iphone_emoji_6-removebg-preview.png"),
      name: "Rashmi",
      position: "Trainee",
      status: "Present",
      iconName: "radio-button-on",
      color: "#cc0000",
    },
    {
      photo: require("../assets/iphone_emoji_7-removebg-preview.png"),
      name: "Manisha",
      position: "HR",
      status: "Present",
      iconName: "radio-button-on",
      color: "#8e7cc3",
    },
    {
      photo: require("../assets/a9abcdd90c1815c8c205343d1aec7442-removebg-preview.png"),
      name: "Abhishek",
      position: "Developer",
      status: "Present",
      iconName: "radio-button-on",
      color: "#93c47d",
    },
    {
      photo: require("../assets/iphone_emoji_3-removebg-preview.png"),
      name: "Aditya",
      position: "Trainee",
      status: "Absent",
      iconName: "radio-button-on",
      color: "#b4a7d6",
    },
    {
      photo: require("../assets/iphone_emoji_4-removebg-preview.png") ,
      name: "Nerraj",
      position: "HR",
      status: "Absent",
      iconName: "radio-button-on",
      color: "#f6b26b",
    },
  ]);
  return (
    <View>
      <Text style={styles.textMain}> My Teams</Text>
      <View>
        {employee.map((val, index) => {
          return (
            <View
              key={index}
              style={[
                {
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  borderWidth: 1,
                  justifyContent: 'flex-start',
                },
                styles.text,
              ]}
            >
              <View
                style={{
                  height: 60,
                  width: 60,
                  alignSelf: "center",
                  backgroundColor: val.color,
                  borderRadius: 30,
                }}
              >
                <Image
                  style={{ height: 60, width: 60, borderRadius: 30 }}
                  source={val.photo}
                />
              </View>
              <View style={{flex: 1 }}>
                <Text style={{ paddingHorizontal: 15, alignSelf: "flex-start" }}>{val.name}</Text>
              </View>
              <View style={{flex: 1 }}>
                <Text>{val.position}</Text>
              </View>
              <View>
                <Text>{val.status}</Text>
                <Ionicons
                  name={val.iconName}
                  style={{
                    position: "absolute",
                    end: 45,
                    paddingHorizontal: 2,
                    paddingVertical: 4,
                    color: "#67dd10",
                  }}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default MyTeam;

const styles = StyleSheet.create({
  textMain: {
    padding: 8,
    fontWeight: "bold",
    alignItems: "center",
  },
  text: {
    margin: 2,
    padding: 5,
    borderColor: "#6fa8dc",
    borderWidth: 0,
    borderRadius: 10,
  },
});
