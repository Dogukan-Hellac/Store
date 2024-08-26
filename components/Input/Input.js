import React from "react";
import { TextInput, View } from "react-native";
import styles from './Input.style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Input = ({ placeholder, onChangeText, value, iconName, isSecure }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor='gray'
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={isSecure}
            />
            <MaterialCommunityIcons name={iconName} size={24} color="gray" />
        </View>
    )
}

export default Input