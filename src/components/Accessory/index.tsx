import React from "react";

// SVG Props
import { SvgProps } from "react-native-svg";

// CSS
import { Container, Name } from "./styles";

// Interface for Props to extend SvgProps and add name and icon props
interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

// Component with name and icon props and return the icon with name and size
export function Accessory({ name, icon: Icon }: Props) {
  // Return the icon with name and size
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
}
