import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Pressable, ScrollView } from "react-native";
import myImage from "./assets/favicon.png";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';


function Home({navigation}) {
  const [btnColor, setBtnColor] = useState("green");

  return (
    <ScrollView style={styles.container}>
      <Image source={myImage} />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/en/3/38/Habib_University.jpg",
          width: 100,
          height: 100,
        }}
      />
      {/* <Button style={style.button} title="About Page!" color="#0000ff" 
        onPress={()=>{navigation.navigate("About", {previousPage: "Home"})}}
      /> */}

      <Pressable
        onPress={()=>{navigation.navigate("About", {previousPage: "Home"})}}
      ><Text style={{color: "white", fontSize: 30}}>About me </Text></Pressable>

      {/* <Button title="Click me!"
        color="black"
      /> */}
      <Pressable
        style={styles.myBtn}
        onPress={() => {
          // btnColor === "green" ? setBtnColor("red" ): setBtnColor("green");
          setBtnColor(btnColor === "green" ? "red" : "green")
        }}
      >
        <Text
          style={[
            styles.myBtnText,
            {
              backgroundColor: btnColor,
            },
          ]}
        >
          Click me!
        </Text>
      </Pressable>

      {/* <Text >Open up App.js toj start working on your app!</Text> */}
      {/* <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View> */}

      <Text style={{
        fontSize: 40,
        color: "white",
      }}> Hello </Text>
          <Text style={{
        color: "white",
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        color: "white",
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        color: "white",
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        color: "white",
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        color: "white",
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        color: "white",
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        color: "white",
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        color: "white",
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        color: "white",
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        color: "white",
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        color: "white",
        fontSize: 40
      }}> Hello </Text>
            <Text style={{
        color: "white",
        fontSize: 40
      }}> World </Text>

    </ScrollView>
   
  );
}


const styles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: "green",
  },
  box2: {
    flex: 2,
    backgroundColor: "red",
  },
  box3: {
    flex: 3,
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#444444",
  },
  myBtn: {
    padding: 30,
  },
  myBtnText: {
    color: "white",
    padding: 30,
    fontSize: 30,
  },
});

const Stack = createNativeStackNavigator()

const About = ({route}) => {
  return (
    <View>
      <Text> 
        This is the about page.
      </Text>
      <Text>I came from the {route.params.previousPage} page</Text>
    </View>
  )
}

export default Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}