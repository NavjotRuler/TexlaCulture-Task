import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

function Announcements() {
  const [announce, setAnnounce] = React.useState([
    {
      title: "Employees are expected to clock...",
      time: "1 hour ago",
      icon: "time-outline",
      color: "#ffe599",
      bgcolor: "#f44336",
      txt: "#fce5cd"
    },
    {
      title: "Holidays date are changed..",
      time: "1 hour ago",
      icon: "notifications",
      color: "#ea9999",
      bgcolor: "#f44336",
      txt: "#e06666"
    },
  ]);

  return (
    <View style={{ backgroundColor: "#c0cccc" }}>
      <ScrollView horizontal>
        {announce.map((val, index) => {
          return (
            <View
              key={index}
              style={[
                {
                  alignItems: "center",
                  justifyContent: "space-between",
                  // borderWidth: 1,
                  backgroundColor: val.txt,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 10,
                  marginHorizontal: 10,
                  flexDirection: 'row',
                  opacity: 0.8
                },
                styles.text,
              ]}
            >
              <View style={{
                backgroundColor: val.color,
                padding: 5,
                borderRadius: 5,
                marginHorizontal: 5
              }}>
              <Ionicons name={val.icon} size={20} color= {val.bgcolor}/>
              </View>
              
              <View style={{padding: 5}}>
                <Text>{val.title}</Text>
                <Text>{val.time}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Announcements;

const styles = StyleSheet.create({
  text: {
    margin: 4,
    padding: 5,
    // borderColor: "#ffd966",
    // borderWidth: 1,
    borderRadius: 10,
  },
});
