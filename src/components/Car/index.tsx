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

// SVG Logo
import GasolineSvg from "../../assets/gasoline.svg";

// React Native Gesture Handler RectButton Props
import { RectButtonProps } from "react-native-gesture-handler";

// Interface
interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

// Car Component with data and RectButtonProps
interface Props extends RectButtonProps {
  data: CarData;
}

export function Car({ data, ...rest }: Props) {
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
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
