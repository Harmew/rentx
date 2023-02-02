import React from "react";

// CSS
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

// Function to get accessory icon
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

// React Native Gesture Handler RectButton Props
import { RectButtonProps } from "react-native-gesture-handler";

// Interface
import { carDTO } from "../../dtos/CarDTO";

// Car Component with data and RectButtonPropsr
interface Props extends RectButtonProps {
  data: carDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
