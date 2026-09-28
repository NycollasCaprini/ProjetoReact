import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PageContador from "../pages/PageContador"
import PageTarefas from "../pages/PageTarefas"
import PageSobre from "../pages/PageSobre"
import PageUsuarios from "../pages/PageUsuarios"

const Tabs = createBottomTabNavigator()

function TabsNavigator() {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                animation: "fade",
            }}>
            <Tabs.Screen name="Contador" component={PageContador}
                options={{
                    tabBarIcon: () => <Ionicons name="calculator" size={24} />
                }}
            />
            <Tabs.Screen name="Tarefas" component={PageTarefas}
                options={{
                    tabBarIcon: () => <Ionicons name="list" size={24} />
                }}
            />
            <Tabs.Screen name="Sobre" component={PageSobre}
                options={{
                    tabBarIcon: () => <Ionicons name="person-circle" size={24} />
                }}
            />
            <Tabs.Screen name="Usuários" component={PageUsuarios}
                options={{
                    tabBarIcon: () => <Ionicons name="people" size={24} />
                }}
            />
        </Tabs.Navigator>
    )
}

export default TabsNavigator;