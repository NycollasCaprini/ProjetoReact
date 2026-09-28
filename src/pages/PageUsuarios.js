import { useState, useEffect } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Text } from "react-native-paper";
import CartaoUsuario from "../components/CartaoUsuario";

function PageUsuarios() {
    const [carregando, setCarregando] = useState(false)
    const [usuarios, setUsuarios] = useState([])

    async function listarUsuarios() {
        setCarregando(true)
        fetch("https://dummyjson.com/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Resposta inválida do servidor")
                }
                return response.json()
            })
            .then(dados => {
                setUsuarios(dados.users)
                setCarregando(false)
            })
            .catch(err => {
                setCarregando(false)
                alert("Erro ao listar usuários!")
            })
    }

    useEffect(() => {
        listarUsuarios();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text variant="headlineMedium" style={styles.titulo}>
                Usuários
            </Text>

            {carregando && usuarios.length === 0 ? (
                <ActivityIndicator
                    size="large"
                    color="#2e7d32"
                    style={styles.carregando}
                />
            ) : (
                <FlatList
                    data={usuarios}
                    keyExtractor={(usuario) => usuario.id.toString()}
                    renderItem={({ item }) => (
                        <CartaoUsuario usuario={item} />
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={carregando}
                            onRefresh={listarUsuarios}
                        />
                    }
                />
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f8e9',
    },
    titulo: {
        margin: 16,
        fontWeight: 'bold',
    },
    carregando: {
        flex: 1,
    },
})

export default PageUsuarios;
