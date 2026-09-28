import { StyleSheet, View } from "react-native";
import { Avatar, Card, Chip, Text } from "react-native-paper";

function CartaoUsuario(props) {
    const usuario = props.usuario
    const nomeCompleto = `${usuario.firstName} ${usuario.lastName}`

    return (
        <Card style={styles.card}>
            <Card.Title
                title={nomeCompleto}
                subtitle={usuario.email}
                left={(propsAvatar) => (
                    <Avatar.Image
                        {...propsAvatar}
                        source={{ uri: usuario.image }}
                    />
                )}
            />
            <Card.Content>
                <Text variant="bodyMedium">
                    {usuario.company?.title} - {usuario.company?.name}
                </Text>
                <View style={styles.tags}>
                    <Chip icon="cake-variant" style={styles.chip}>
                        {usuario.age} anos
                    </Chip>
                    <Chip icon="map-marker" style={styles.chip}>
                        {usuario.address?.city}
                    </Chip>
                    <Chip icon="shield-account" style={styles.chip}>
                        {usuario.role}
                    </Chip>
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 16,
        marginBottom: 12,
        backgroundColor: '#ffffff',
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 12,
    },
    chip: {
        marginRight: 8,
        marginBottom: 8,
        backgroundColor: '#e8f5e9',
    },
})

export default CartaoUsuario;
