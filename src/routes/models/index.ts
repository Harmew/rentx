import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define the type and properties for the Car
import { carDTO } from "../../dtos/carDTO";

// Define the type and properties for the NavigationStack to be used to navigate between screens
export type PropsNavigationStack = {
  Home: undefined;
  SignIn: undefined;
  CarDetails: {
    car: carDTO;
  };
  Scheduling: {
    car: carDTO;
  };
  SchedulingDetails: {
    car: carDTO;
    dates: string[];
  };
  SchedulingComplete: undefined;
  MyCars: undefined;
};

// Define the type and properties for the Stack to be used to navigate between screens
export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
