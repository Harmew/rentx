import React from "react";

// React Native
import { TextInputProps } from "react-native";


// Feather Icons
import { Feather } from "@expo/vector-icons";

// Theme
import { useTheme } from "styled-components";

// CSS
import { Container, InputText, IconContainer } from "./styles";

// Interface
interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export function Input({ iconName, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText {...rest} />
    </Container>
  );
}
