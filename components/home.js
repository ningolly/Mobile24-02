import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

export default function Home(props) {
    return (
        <SafeAreaView style={style.container}>
            <View style={style.all}>

                <View style={style.box}>
                    <Text style={style.title}>
                        Mundo do Programador
                    </Text>
                    <Text style={style.subtitle}>
                        Mercado de Trabalho
                    </Text>
                </View>

                <View>
                    <TouchableOpacity style={style.box2} onPress={()=>{props.navigation.navigate('Dica1')}}>
                        <Text style={style.buttons}>
                            Dica 1 - Repertório de Conhecimento sobre o assunto
                        </Text>
                    </TouchableOpacity >

                    <TouchableOpacity>
                        <Text style={style.buttons}>
                            Dica 2 - Conhecimento da Empresa
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    all: {
        borderWidth: 4,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 800,
    },
    subtitle: {
        fontSize: 25,
        textAlign: 'center',
    },
    box2: {
        marginTop: 10,
    },
    buttons: {
        padding: 8,
        margin: 10,
        borderColor: 'pink',
        borderWidth: 2,
        backgroundColor: 'pink',
        fontWeight: 800,
    },
});