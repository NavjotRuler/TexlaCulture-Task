import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

function Welcome() {
  const [employee, setEmployee] = React.useState([
    {
      photo: require("../assets/iphone_emoji_7-removebg-preview.png"),
      name: "Megha",
      post: "UX Designer",
      status: "Joined today",
      color: "#cfe2f3",
      bgcolor: "#6fa8dc"
    },
    {
      photo: require("../assets/iphone_emoji_4-removebg-preview.png"),
      name: "Sahil",
      post: "UX Designer",
      status: "Joined today",
      color: "#fff2cc",
      bgcolor: "#f9cb9c"
    },
    {
      photo: require("../assets/iphone_emoji_3-removebg-preview.png"),
      name: "Ravi",
      post: "UX Designer",
      status: "Joined today",
      color: "#ead1dc",
      bgcolor: "#c27ba0"
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#c0cccc",
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
      }}
    >
      <Text style={styles.textMain}> Welcome</Text>
      <View style={{}}>
        <ScrollView horizontal>
          {employee.map((val, index) => {
            return (
              <View
                key={index}
                style={[
                  {
                    alignItems: "center",
                    borderWidth: 1,
                    backgroundColor: val.color,
                    marginRight: 30,
                    marginBottom: 30,
                    borderBottomEndRadius: 10,
                    borderColor: val.bgcolor
                  
                  },
                  styles.text,
                ]}
              >
                <View
                  style={{
                    height: 60,
                    width: 60,
                    alignSelf: "center",
                    backgroundColor: val.bgcolor,
                    borderRadius: 30,
                  }}
                >
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={val.photo}
                  />
                </View>
                <View style={{}}>
                  <Text
                    style={{ paddingHorizontal: 15, alignSelf: "flex-start", }}
                  >
                    {val.name}
                  </Text>
                </View>
                <View style={{}}>
                  <Text>{val.post}</Text>
                </View>
                <View>
                  <Text>{val.status}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  textMain: {
    padding: 8,
    fontWeight: "bold",
    color: "#f6b26b",
    fontSize: 25,
    alignSelf: "center",
    backgroundColor: "#c0cccc",
  },
  text: {
    margin: 5,
    padding: 15,
    // borderColor: "#6fa8dc",
    borderWidth: 1,
    borderRadius: 10,
  },
});
