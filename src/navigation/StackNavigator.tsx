import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../styles/appStyles";
import { RootStackParamList } from "./typesNavigation";
import { ListScreen } from "../screens/ListScreen";
import { AddBookScreen } from '../screens/AddBookScreen';
import DetailScreen from '../screens/DetailScreen';
const Stack = createStackNavigator<RootStackParamList>();
 
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ title: "Mi Librería" }}
      />
      <Stack.Screen
        name="AddBook"
        component={AddBookScreen}
        options={{ title: "Nuevo Libro" }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Detalle del Libro" }}
      />
    </Stack.Navigator>
  );
};
