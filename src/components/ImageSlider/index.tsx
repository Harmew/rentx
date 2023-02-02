import React from "react";

// CSS
import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

// Interface for Props to add imagesUrl prop with string array
interface Props {
  imagesUrl: string[];
}

// Component with imagesUrl prop and return the imagesUrl array // need a list of images
export function ImageSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
}
