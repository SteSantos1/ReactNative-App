import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {style} from './styles';
import Logo from "../../assets/logo.png";
import React from 'react';
 
export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text>Top</Text>
        <Image source={Logo}/>
      </View>
      <View style={style.boxMid}>
        <Text>Mid</Text>
        <Text>Bem vindo de Volta!</Text>
        <TextInput />
        <Text>Senha</Text>
        <TextInput />
        </View>
        <View style={style.boxBotton}>
          <Text>Botton</Text>
          <Text>Endereço de E-mail</Text>
        </View>
    </View>  
  );
}