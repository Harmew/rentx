import React from "react";

// React Native Gesture Handler
import { RectButtonProps } from "react-native-gesture-handler";

// Styled Components
import { Container, Title } from "./styles";

// Interface for Props to extend RectButtonProps and add title prop
interface Props extends RectButtonProps {
  title: string;
}

// Component with title prop and return the title / A Simple Button
export function ConfirmButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
