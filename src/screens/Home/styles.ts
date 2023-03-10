import styled from "styled-components/native";

// React Native FlatList
import { FlatList } from "react-native";

// DTO
import { carDTO } from "../../dtos/CarDTO";

// React Button
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

// React Native Responsive Font Size
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showVerticalScrollbar: false,
})`` as React.ComponentType as new <carDTO>() => FlatList<carDTO>;

export const MyCarsButton = styled(RectButton)`
  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.main};

  justify-content: center;
  align-items: center;

  border-radius: 30px;

  position: absolute;
  bottom: 13px;
  right: 22px;

  z-index: 10;
`;
