import React from "react";

// React Navigation Stack
import { createStackNavigator } from "@react-navigation/stack";

// Import Models from models file
import { PropsNavigationStack } from "./models";

// Create Stack Navigator with PropsNavigationStack interface imported from models file
const { Navigator, Screen } = createStackNavigator<PropsNavigationStack>();

// Import Screens from screens file
import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { SchedulingComplete } from "../screens/SchedulingComplete";

// Component with Navigator and Screen imported from React Navigation Stack
export function StackRoutes() {
  return (
    <Navigator
      // Hide Header
      screenOptions={{ headerShown: false }}
      // Initial Route
      initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  );
}
