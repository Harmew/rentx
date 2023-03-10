import styled from "styled-components/native";

// React Native
import { TextInput } from "react-native";

// Responsive Font Size is a library that helps to get the height of the status bar
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;

  margin-bottom: 8px;
`;

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-right: 2px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const InputText = styled(TextInput)`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};

  font-size: ${RFValue(15)}px;

  padding: 0 23px;
`;
