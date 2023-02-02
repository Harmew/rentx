import React from "react";

// AppLoading
import AppLoading from "expo-app-loading";

// React Navigation
import "react-native-gesture-handler";

// Fonts
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

// Routes
import { Routes } from "./src/routes";

// ThemeProvider and Theme from styles
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

export default function App() {
  // Fonts Loaded hook
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  // If fonts are not loaded, return AppLoading component
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // If fonts are loaded, return ThemeProvider and Routes
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
