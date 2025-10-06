import React, { useContext } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { Input } from "../../componentes/input";
import { MaterialIcons } from '@expo/vector-icons';
import { Ball } from "../../componentes/Ball";
import { Flag } from "../../componentes/Flag";
import { themas } from "../../global/themas";
import { AuthContextList } from "../../context/authContext_list";

type PropCard = {
    item: number,
    title: string,
    description: string,
    flag: 'urgente' | 'opcional'
}

export default function List() {

    const { taskList } = useContext<AuthContextType>(AuthContextList)

    const _renderCard = (item: PropCard) => {
        return (
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                    <View style={style.rowCardLeft}>
                        <Ball color="red" />
                        <View>
                            <Text style={style.titleCard}>{item.title}</Text>
                            <Text style={style.descriptionCard}>{item.description}</Text>
                        </View>
                    </View>
                    <Flag caption="Urgente" color={themas.colors.red} />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia,
                    <Text style={{ fontWeight: 'bold' }}> Stéphanie Santos!</Text></Text>
                <View style={style.boxInput}>
                    <Input
                        IconLeft={MaterialIcons}
                        IconLeftName="search"
                    />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={taskList}
                    style={{ marginTop: 40, paddingHorizontal: 30 }}
                    keyExtractor={(item, index) => item.item.toString()}
                    renderItem={({ item, index }) => { return (_renderCard(item)) }}
                />
            </View>
        </View>
    )
}