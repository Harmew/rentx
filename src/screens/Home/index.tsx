import React from "react";

// Status Bar
import { StatusBar } from "react-native";

// React Native Responsive Font Size
import { RFValue } from "react-native-responsive-fontsize";

// CSS
import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";

// SVG Logo
import Logo from "../../assets/logo.svg";

// Components
import { Car } from "../../components/Car";

// React Navigation
import { useNavigation } from "@react-navigation/native";

// PropsStack from Routes Models to useNavigation hook
import { PropsStack } from "../../routes/models";

export function Home() {
  // Use Navigation hook to navigate to CarDetails screen with handleCarDetails function
  const navigation = useNavigation<PropsStack>();

  // Local for Now (Refactor Later to use API)
  const carDataOne = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
  };

  // Function to navigate to CarDetails screen
  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar
        // Status Bar Light
        barStyle="light-content"
        // Status Bar Transparent
        backgroundColor="transparent"
        // Status Bar
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carDataOne} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
