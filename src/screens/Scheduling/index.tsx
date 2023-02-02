import React from "react";

// Components
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

// UseTheme hook from styled-components
import { useTheme } from "styled-components";

// CSS
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";

// SVGs
import ArrowSvg from "../../assets/arrow.svg";

// Status Bar
import { StatusBar } from "react-native";

// React Navigation hook
import { useNavigation } from "@react-navigation/native";

// PropsStack from Routes Models to useNavigation hook
import { PropsStack } from "../../routes/models";

export function Scheduling() {
  // Use Navigation hook to navigate to SchedulingDetails screen with handleConfirmRental function
  const navigation = useNavigation<PropsStack>();

  // Theme
  const theme = useTheme();

  // Function to navigate to SchedulingDetails screen
  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails");
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma{"\n"}
          data de início e{"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>19/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
