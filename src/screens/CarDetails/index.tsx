import React from "react";

// CSS
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";

// Components
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

// Function to get accessory icon
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

// React Navigation
import { useNavigation, useRoute } from "@react-navigation/native";

// PropsStack from Routes Models to useNavigation hook
import { PropsStack } from "../../routes/models";

// Interfaces
import { carDTO } from "../../dtos/CarDTO";

interface Params {
  car: carDTO;
}

export function CarDetails() {
  // Use Navigation hook to navigate to Scheduling screen with handleConfirmRental function
  const navigation = useNavigation<PropsStack>();
  const route = useRoute();
  const { car } = route.params as Params;

  // Function to navigate to Scheduling screen
  function handleConfirmRental() {
    navigation.navigate("Scheduling");
  }

  // Function to navigate to previous screen
  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => {
            handleBack();
          }}
        />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
