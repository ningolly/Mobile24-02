import {SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

export default function dica1() {
    return(
        <View style={style.container}>
            <Text style={style.title}>
                Repertório de Conhecimento
            </Text>
            <Text style={style.text}>
                O repertório de conhecimento de um programador no mercado de trabalho vai além de dominar linguagens de programação. É essencial ter compreensão de estruturas de dados e algoritmos, diferentes paradigmas de programação, e desenvolvimento web e mobile. O conhecimento de bancos de dados, controle de versão (Git), e metodologias ágeis também é crucial. Soft skills, como comunicação e colaboração, são igualmente importantes, além de práticas de segurança e testes no desenvolvimento. A capacidade de aprender continuamente e se adaptar às novas tecnologias também é fundamental para o sucesso. Em resumo, um programador de sucesso deve ter um conjunto equilibrado de habilidades técnicas e interpessoais.
            </Text>
            <View style={style.imgDiv}>
                <Image resizeMode='contain' style={style.img} source={require('../assets/imgdica1.jpg')} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        top: '4%',
        margin: '4%'
    },
    title: {
        fontSize: 26,
        fontWeight: 800,
        marginBottom: '3%',
        backgroundColor: 'pink',    
        padding: 8,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'pink'
    },
    text: {
        fontSize: 17,
        textAlign: 'justify',
        margin: '1%',
    },
    imgDiv: {

    },
    img: {
        height: 300,
        width: 300,
    },
});