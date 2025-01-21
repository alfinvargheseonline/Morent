import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/Home";
import CarView from "./screen/CarView";
import Payment from "./screen/Payment";
import Final from "./screen/Final";
import DetailsCard from "./screen/DetailsCard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Hide the header for the Homepage screen
        />

        <Stack.Screen
          name="CarView"
          component={CarView}
          options={{ headerShown: false }} // Hide the header for the Homepage screen
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }} // Hide the header for the Homepage screen
        />

        <Stack.Screen
          name="Final"
          component={Final}
          options={{ headerShown: false }} // Hide the header for the Homepage screen
        />
        <Stack.Screen
          name="DetailsCard"
          component={DetailsCard}
          options={{ headerShown: false }} // Hide the header for the Homepage screen
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
