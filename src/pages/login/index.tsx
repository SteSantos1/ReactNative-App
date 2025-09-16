import React, { useState } from "react";

import {
    Text, View, Image, TextInput, TouchableOpacity,
    Alert, ActivityIndicator
} from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { themas } from "../../global/themas"
import { Input } from "../../componentes/input";
import { Button } from "../../componentes/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native'

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('a');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true)
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            }

            navigation.reset({routes: [{name: "BottomRoutes"}]})

            console.log("Logado com sucesso! :)")

        } catch (error) {
            console.log(error);
        }
    }
    return (
        < View style={style.container} >
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input 
                value={email}
                onChangeText={setEmail}
                title="ENDEREÇO E-MAIL"
                IconRight={MaterialIcons}
                IconRightName="email"
                />
                <Input 
                value={password}
                onChangeText={setPassword}
                title="SENHA"
                IconRight={Octicons}
                IconRightName={showPassword ? "eye-closed" : "eye"} // Logica do olho aberto ao ver a senha
                secureTextEntry={showPassword}
                onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.boxBotton}>
                <Button text="Entrar" loading={loading} onPress={() => getLogin()} />
            </View>
            <Text style={style.textBotton}>Não tem conta?
                <Text style={{ color: themas.colors.primary }}> Crie agora!</Text></Text>
        </View >
    )
}