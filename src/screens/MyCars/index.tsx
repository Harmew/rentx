import React, { useState, useEffect } from "react";

// React Native
import { StatusBar, FlatList } from "react-native";

// Icons
import { AntDesign } from "@expo/vector-icons";

// React Navigation hook
import { useNavigation } from "@react-navigation/native";

// UseTheme
import { useTheme } from "styled-components";

// CSS
import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from "./styles";

// Components
import { BackButton } from "../../components/BackButton";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";

// Interface
import { PropsStack } from "../../routes/models";

// CarDTO
import { carDTO } from "../../dtos/carDTO";

// API
import { api } from "../../services/api";

// Interface
interface CarProps {
  id: string;
  user_id: string;
  car: carDTO;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  // Use Navigation hook to navigate to SchedulingDetails screen with handleConfirmRental function
  const navigation = useNavigation<PropsStack>();

  // Theme
  const theme = useTheme();

  useEffect(() => {
    async function fetchCars() {
      try {
        setLoading(true);
        const response = await api.get("/schedules_byuser?user_id=1");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <Title>
          Escolha uma{"\n"}
          data de início e{"\n"}
          fim do aluguel
        </Title>
        <Subtitle>Conforto, segurança e praticidade.</Subtitle>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              padding: 24,
            }}
          />
        </Content>
      )}
    </Container>
  );
}
