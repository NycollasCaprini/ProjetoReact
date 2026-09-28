import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/components/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <DrawerNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}