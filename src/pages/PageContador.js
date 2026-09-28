import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BotaoContador from "../components/BotaoContador";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function PageContador() {
    const navigation = useNavigation()
    const [contador, setContador] = useState(0)

    function aumentarContador() {
        setContador(contador + 1)
    }

    function aumentarContador1000() {
        setContador(contador + 1000)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>CONTADOR:</Text>
            <Text>{contador}</Text>
            <BotaoContador
                onPress={aumentarContador}
                onLongPress={aumentarContador1000}>
                Aumentar Contador
            </BotaoContador>
            <Button
                onPress={() => navigation.navigate("Tarefas")} >
                Tarefas
            </Button>
            <Button onPress={() => navigation.goBack()}>Voltar</Button>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default PageContador;