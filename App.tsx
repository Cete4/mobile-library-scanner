import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
    View
} from 'react-native';
import {Button, NativeBaseProvider} from "native-base";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


function App(): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <NativeBaseProvider>
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Button>
                        Find a Library
                    </Button>
                </View>
            </NativeBaseProvider>
        </SafeAreaView>
    );
}

export default App;
