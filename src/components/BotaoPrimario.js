import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function BotaoPrimario(props) {
    return (
        <Button
            mode="contained"
            icon={props.icone}
            onPress={props.onPress}
            style={styles.botao}
            labelStyle={styles.label}>
            {props.children}
        </Button>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#2e7d32',
        borderRadius: 8,
        marginTop: 8,
    },
    label: {
        fontSize: 16,
    },
})

export default BotaoPrimario;
