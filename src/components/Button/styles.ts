import styled from "styled-components/native";

// Button native component and its properties from the react-native-gesture-handler library
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

// Responsive font size for different screen sizes (e.g. iPhone 5, 6, 7, 8, X, etc.)
import { RFValue } from "react-native-responsive-fontsize";

// Interface to define the ButtonProps properties and the RectButtonProps properties (from the react-native-gesture-handler library)
interface ButtonProps extends RectButtonProps {
  color?: string;
}

// Allow the Button component to be styled using the styled-components library and the RectButton component from the React Native Gesture Handler library. with the ButtonProps interface.
export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: 19px;
  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => color};
`;

// Allow the Title component to be styled using the styled-components library.
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
