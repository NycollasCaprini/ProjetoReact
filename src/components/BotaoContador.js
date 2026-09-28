import { Button } from "react-native-paper";

function BotaoContador(props) {
    return (
        <Button onPress={props.onPress}
            onLongPress={props.onLongPress}>
            {props.children}
        </Button>
    )
}

export default BotaoContador;