import React, {useState} from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const TextScreen = () => {
    const [name, setName]=useState('')
    return (
        <View>
            <TextInput 
                style={styles.inputBox} 
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newValue=>{
                    setName(newValue)
                }}
            />
            {name.length<5 ? <Text>Password length should be more than 5 characters.</Text>:null}
            
        </View>
    );
}

const styles = StyleSheet.create({
    inputBox:{
        margin:10,
        borderWidth:1,
        borderColor:"black"
    }
})

export default TextScreen