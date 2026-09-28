import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigator from "./TabsNavigator";

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Início" component={TabsNavigator} />
        </Stack.Navigator>
    )

}

export default StackNavigator;
