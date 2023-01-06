import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import React from "react";

import MyTask from "../Types/Mytasks";
import Celebration from "../Types/Celebration";
import QuickLinks from "../Types/Quicklinks";
import MyTeam from "../Types/Myteam";
import Welcome from "../Types/Welcome";
import Announcements from "../Types/announcements";
import Clock from "../Types/Clock";

function Home() {
  return (
    <ScrollView>
      <View>
        <View style={styles.bar}>
          <View style={styles.searchSection}>
            <Ionicons
              style={{ marginHorizontal: 10 }}
              name="ios-search"
              size={20}
              color="#000"
            />
            <TextInput
              style={styles.textinput}
              keyboardType="default"
              placeholder="search"
            />
          </View>
          <View style={{ paddingRight: 10 }}>
            <Ionicons name="chatbox" size={25} color="#67dd10" />
          </View>
        </View>
        <View style={styles.bar}>
          <Text style={styles.text}>Announcements</Text>
          <Text style={styles.ann}>View all</Text>
        </View>
        <View>
          <Announcements />
        </View>
        <View style={{ paddingTop: 5 }}>
          <Welcome />
        </View>
        <View style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Clock />
        </View>
        <View style={styles.main}>
          <MyTeam />
        </View>
        <View style={styles.main}>
          <QuickLinks />
        </View>
        <View style={styles.main}>
          <Celebration />
        </View>
        <View style={styles.main}>
          <MyTask />
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  bar: {
    paddingTop: 50,
    flexDirection: "row",
    backgroundColor: "#c0cccc",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
  ann: {
    color: "#67dd10",
  },
  textinput: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 0,
  },
  main: {
    margin: 8,
    padding: 10,
    borderColor: "#08140c",
    borderWidth: 1,
    borderRadius: 10,
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    backgroundColor: "#f8f8ff",
    borderRadius: 10,
    marginLeft: 10,
    padding: 2,
    paddingHorizontal: 10,
  },
});
