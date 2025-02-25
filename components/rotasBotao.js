import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';
import dica1 from '../components/dica1';
import dica2 from '../components/dica2';

const Stack = createStackNavigator();

export default function rotasBotao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="dica1" component={dica1} />
                <Stack.Screen name="dica2" component={dica2} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}