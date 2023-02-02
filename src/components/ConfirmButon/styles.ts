import styled from "styled-components/native";

// React Native Gesture Handler
import { RectButton } from "react-native-gesture-handler";

// React Native Responsive Font Size
import { RFValue } from "react-native-responsive-fontsize";

// Allow the ConfirmButton component to be styled using the styled-components library and the RectButton component from the React Native Gesture Handler library.
export const Container = styled(RectButton)`
  width: 80px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.shape_dark};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
