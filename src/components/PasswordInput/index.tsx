import React, { useState } from "react";

// React Native
import { TextInputProps } from "react-native";

// Feather Icons
import { Feather } from "@expo/vector-icons";

// Theme
import { useTheme } from "styled-components";

// Gesture Handler is a library that helps to get the height of the status bar
import { BorderlessButton } from "react-native-gesture-handler";

// CSS
import { Container, InputText, IconContainer } from "./styles";

// Interface
interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export function PasswordInput({ iconName, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const theme = useTheme();

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText {...rest} secureTextEntry={isPasswordVisible} />

      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconContainer>
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}
