import { View, Text, StyleSheet } from "react-native";

import { GlobalStyle } from "../constants/constant";

function MyTask() {
    return (
        <View style={styles.main}>
            <Text style={styles.textMain}>My tasks</Text>
            <View> 
                <View style= {styles.text}>
                    <Text style={styles.text1}>Attendance</Text>
                    <Text style={styles.text2}>17</Text>
                    <Text style={styles.text3}>View</Text>
                </View>
                <View style= {styles.text}>
                    <Text style={styles.text1}>Leave</Text>
                    <Text style={styles.text2}>8</Text>
                    <Text style={styles.text3}>View</Text>
                </View>
                <View style= {styles.text}>
                    <Text style={styles.text1}>Job Offers</Text>
                    <Text style={styles.text2}>11</Text>
                    <Text style={styles.text3}>View</Text>
                </View>
                <View style= {styles.text}>
                    <Text style={styles.text1}>Interview Schdule</Text>
                    <Text style={styles.text2}>4</Text>
                    <Text style={styles.text3}>View</Text>
                </View>
            </View>
        </View>
    )
}

export default MyTask;

const styles = StyleSheet.create({
    textMain:{
        padding: 8,
        fontWeight: 'bold'
    },
    text: {
        margin: 5,
        padding: 15,
        borderColor: '#6fa8dc',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row'
    },
    text1: {
        flex: 1

    },
    text2: {
        marginEnd: "25%"
    },
    text3: {
        color: '#6aa84f'
    }

})