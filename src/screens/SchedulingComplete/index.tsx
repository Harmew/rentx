import React from "react";

// React Native to get the window dimensions and StatusBar
import { useWindowDimensions, StatusBar } from "react-native";

// SVGs
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

// Components
import { ConfirmButton } from "../../components/ConfirmButon";

// CSS
import { Container, Content, Title, Message, Footer } from "./styles";

// React Navigation
import { useNavigation } from "@react-navigation/native";

// PropsStack from Routes Models to useNavigation hook
import { PropsStack } from "../../routes/models";

export function SchedulingComplete() {
  // Use Window Dimensions hook to get the window width
  const { width } = useWindowDimensions();

  // Use Navigation hook to navigate to Home screen with handleConfirm function
  const navigation = useNavigation<PropsStack>();

  // Function to navigate to Home screen
  function handleConfirm() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <LogoSvg
        // LogoSvg width is 100% of the window width
        width={width}
      />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{"\n"}
          até a concessionária da RENTX{"\n"}
          pegar seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
