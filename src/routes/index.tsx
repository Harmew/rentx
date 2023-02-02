import React from "react";

// React Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Routes
import { StackRoutes } from "./stack.routes";

// Component with NavigationContainer and StackRoutes imported
export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
