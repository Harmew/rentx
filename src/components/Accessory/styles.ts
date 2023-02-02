import styled from "styled-components/native";

// Responsive font size for different screen sizes (e.g. iPhone 5, 6, 7, 8, X, etc.)
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 109px;
  height: 92px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: 16px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(13)}px;

  margin-top: 12px;
`;
