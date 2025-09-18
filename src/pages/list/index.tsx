import React from "react";
import { Text, View } from "react-native";
import { style } from "./styles";
import { Input } from "../../componentes/input";
import { MaterialIcons } from '@expo/vector-icons'

export default function List() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.greeting}>Bom dia, <Text style={{ fontWeight: 'bold' }}>Stéphanie Santos!</Text></Text>
        <View style={style.boxInput}>
          <Input
            IconLeft={MaterialIcons}
            IconLeftName="search"
          />
        </View>
      </View>
    </View>
  )
}
