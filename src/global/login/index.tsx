import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { style } from './styles';
import Logo from "../../assets/logo.png";
import { MaterialIcons } from '@expo/vector-icons'
import { themas } from "../../global/themes"
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
        <Text style={style.text}>Bem-Vindo de Volta!</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
          />
          <MaterialIcons 
          name = "email"
          size={20}
          color={themas.colors.gray}
          />
        </View>
        <Text style={style.titleInput}>SENHA</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
          />
          <MaterialIcons 
          name="remove-red-eye"
          size={20}
          color={themas.colors.gray}
          />
        </View>
        <TextInput />
      </View>
      <View style={style.boxBotton}>
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.textBotton}>Não possui conta?<Text style={{color: themas.colors.primary}}> Crie uma!</Text></Text>
    </View>
  );
}