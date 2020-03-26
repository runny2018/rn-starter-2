import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'


//ColorSquareScreen_Reducer is connected to this component (ColorCounter_Reducer)

const ColorCounter_Reducer = (props) => {
    return (
        <View>
            <Text>{props.color} </Text>
            <Button 
                title={`More ${props.color}`}
                onPress={()=>{
                    props.onIncrease()
                }}
            />
            <Button 
                title={`Less ${props.color}`}
                onPress={()=>{
                    props.onDecrease()
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default ColorCounter_Reducer