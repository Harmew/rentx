import React, { useEffect, useState } from "react";

// React Native
import { StatusBar } from "react-native";

// React Native Responsive Font Size
import { RFValue } from "react-native-responsive-fontsize";

// CSS
import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";

// SVG Logo
import Logo from "../../assets/logo.svg";

// API
import { api } from "../../services/api";

// DTO
import { carDTO } from "../../dtos/CarDTO";

// Components
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";

// React Navigation
import { useNavigation } from "@react-navigation/native";

// PropsStack from Routes Models to useNavigation hook
import { PropsStack } from "../../routes/models";

export function Home() {
  // States
  const [cars, setCars] = useState<carDTO[]>([]);
  const [loading, setLoading] = useState(true);

  // Use Navigation hook to navigate to CarDetails screen with handleCarDetails function
  const navigation = useNavigation<PropsStack>();

  // Function to navigate to CarDetails screen
  function handleCarDetails(car: carDTO) {
    navigation.navigate("CarDetails", { car });
  }

  // Fetch cars from API
  useEffect(() => {
    async function fetchCars() {
      try {
        setLoading(true);
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

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

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
}
