import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

export default function dica2() {
    return (
        <SafeAreaView style={style.container}>
            <View>
                <Text style={style.title}>Conhecimento da Empresa</Text>
            </View>
            <View>
                <Text style={style.content}>
                    Conhecer a empresa durante a procura de emprego é essencial para alinhar seus valores com os da organização, garantindo um ambiente de trabalho mais satisfatório. Além disso, permite personalizar sua candidatura, destacando as habilidades mais relevantes para a vaga, o que aumenta suas chances de sucesso no processo seletivo. Ter esse conhecimento também ajuda nas entrevistas, pois você poderá demonstrar um interesse genuíno e uma compreensão clara de como pode contribuir para a empresa, tornando-se um candidato mais preparado e assertivo.
                </Text>
            </View>
            <View style={style.imgDiv}>
                <Image resizeMode='contain' style={style.img} source={require('../assets/imgdica1.jpg')} />
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 28
    },

    title: {
        fontSize: 26,
        fontWeight: 800,
        marginBottom: '5%',
        backgroundColor: 'pink',
        padding: 8,
        width: '100%',
        borderRadius: 15,
        borderColor: 'pink',
    },

    content: {
        textAlign: 'justify',
        fontSize: 20,
        marginLeft: '4%',
        marginRight: '4%',
    },
    imgDiv: {

    },
    img: {
        height: 300,
        width: 300,
    },
});