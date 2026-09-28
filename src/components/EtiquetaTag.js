import { StyleSheet } from "react-native";
import { Chip } from "react-native-paper";

function EtiquetaTag(props) {
    return (
        <Chip
            icon={props.icone}
            style={styles.chip}
            textStyle={styles.texto}>
            {props.children}
        </Chip>
    )
}

const styles = StyleSheet.create({
    chip: {
        backgroundColor: '#e8f5e9',
        marginRight: 8,
        marginBottom: 8,
    },
    texto: {
        color: '#1b5e20',
    },
})

export default EtiquetaTag;
