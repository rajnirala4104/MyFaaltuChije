import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
   return (
      <Tabs>
         <Tabs.Screen name="index" />
         <Tabs.Screen name="about" />
         <Tabs.Screen name="profile" />
      </Tabs>
   );
};

export default TabLayout;
