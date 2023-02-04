import React from "react";

// React Native
import { ActivityIndicator } from "react-native";

// Styled Components
import { useTheme } from "styled-components";

// CSS
import { Container, Title } from "./styles";

// Interface with title, color and onPress props
interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

// Button with color props and default color from theme and onPress function
export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  ...rest
}: Props) {
  // Theme from styled-components
  const theme = useTheme();

  // Return the button with title and color from props or default color from theme
  return (
    <Container
      {...rest}
      onPress={onPress}
      color={color ? color : theme.colors.main}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}>
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} size="small" />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
