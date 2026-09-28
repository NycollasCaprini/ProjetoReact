import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Text } from "react-native-paper";
import CartaoPerfil from "../components/CartaoPerfil";
import EtiquetaTag from "../components/EtiquetaTag";
import BotaoPrimario from "../components/BotaoPrimario";

function PageSobre() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.conteudo}>
                <Text variant="headlineMedium" style={styles.titulo}>
                    Sobre mim
                </Text>

                <CartaoPerfil
                    titulo="Nycollas Caprini"
                    subtitulo="Sistemas de Informação - IFPR Campus Palmas"
                    icone="account">
                    <Text variant="bodyMedium">nada a declarar</Text>
                    <Divider style={styles.divisor} />
                    <View style={styles.tags}>
                        <EtiquetaTag icone="language-javascript">JavaScript</EtiquetaTag>
                        <EtiquetaTag icone="language-python">Python</EtiquetaTag>
                        <EtiquetaTag icone="language-typescript">TypeScript</EtiquetaTag>
                    </View>
                </CartaoPerfil>

                <BotaoPrimario icone="github">GitHub: NycollasCaprini</BotaoPrimario>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f8e9',
    },
    conteudo: {
        padding: 16,
    },
    titulo: {
        marginBottom: 16,
        fontWeight: 'bold',
    },
    divisor: {
        marginVertical: 12,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

export default PageSobre;
