import React from "react";

// Styled Components
import { useTheme } from "styled-components";

// Borderless Button Props for Typescript
import { BorderlessButtonProps } from "react-native-gesture-handler";

// Vector Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// CSS
import { Container } from "./styles";

// Interface for Props to extend BorderlessButtonProps and add color
interface Props extends BorderlessButtonProps {
  color?: string;
}

// BackButton with color props and default color from theme
export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
