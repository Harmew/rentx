import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define the type and properties for the Car
import { carDTO } from "../../dtos/carDTO";

// Define the type and properties for the NavigationStack to be used to navigate between screens
export type PropsNavigationStack = {
  Home: undefined;
  CarDetails: {
    car: carDTO;
  };
  Scheduling: undefined;
  SchedulingDetails: undefined;
  SchedulingComplete: undefined;
};

// Define the type and properties for the Stack to be used to navigate between screens
export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
