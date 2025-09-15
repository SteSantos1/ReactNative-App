import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "./styles";

export default ({state, navegation}: any) => {
    return (
        <Text>
            <TouchableOpacity>
                <Text>
                    Esquerda
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    Centro
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    Direita
                </Text>
            </TouchableOpacity>
        </Text>
    )
}