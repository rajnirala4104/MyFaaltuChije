import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const About = () => {
   return (
      <View
         style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <Text>About</Text>
         <Link
            href={"/"}
            style={{
               fontSize: 20,
            }}
         >
            Go To Home
         </Link>
      </View>
   );
};

export default About;
