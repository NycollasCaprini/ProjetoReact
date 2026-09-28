import { StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";

function CartaoPerfil(props) {
    return (
        <Card style={styles.card}>
            <Card.Title
                title={props.titulo}
                subtitle={props.subtitulo}
                subtitleNumberOfLines={2}
                left={(propsAvatar) => (
                    <Avatar.Icon
                        {...propsAvatar}
                        icon={props.icone}
                        style={styles.avatar}
                    />
                )}
            />
            <Card.Content>
                {props.children}
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 16,
        backgroundColor: '#ffffff',
    },
    avatar: {
        backgroundColor: '#2e7d32',
    },
})

export default CartaoPerfil;
