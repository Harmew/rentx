import React from "react";

// Styled Components
import { useTheme } from "styled-components";

// CSS
import { Container, Title } from "./styles";

// Interface with title, color and onPress props
interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

// Button with color props and default color from theme and onPress function
export function Button({ title, color, onPress, ...rest }: Props) {
  // Theme from styled-components
  const theme = useTheme();

  // Return the button with title and color from props or default color from theme
  return (
    <Container
      {...rest}
      onPress={onPress}
      color={color ? color : theme.colors.main}>
      <Title>{title}</Title>
    </Container>
  );
}
