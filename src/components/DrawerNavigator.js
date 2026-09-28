import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import { Ionicons } from "@expo/vector-icons";
import PageIFPR from "../pages/PageIFPR";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Início" component={StackNavigator}
                options={{
                    drawerIcon: () => <Ionicons name="home" size={24} color="blue" />
                }} />
            <Drawer.Screen name="IFPR" component={PageIFPR} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;