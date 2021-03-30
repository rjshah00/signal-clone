import React, {useState} from 'react'
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements';

const LoginScrreen = ( {navigation} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        
    const signIn = () =>{

    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="Light" />
            <Image source={{
                uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png",
            }} style={{ width: 200, height: 200 }} />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autofocus type="email" 
                    value={email}
                    onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" secureTextEntry type="password"
                value={password}
                onChangeText={(text) => setPassword(text)} />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
            <Button containerStyle={styles.button} onPress={() => navigation.navigate("Register")} type="outline" title="Register"/>
            <View style ={{height: 10}} />
        </KeyboardAvoidingView>

    )
}

export default LoginScrreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent : "center",
        backgroundColor : "white",
        padding : 10,

    },
    inputContainer: {
        width:300
    },
    button:{
        width:200,
        marginTop:10,

    }
})
