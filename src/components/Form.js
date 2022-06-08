import React from "react";
import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from "../utils/colors";

export default function Form(props){
    const {setCapital, setInterest, setMonths, setNombre} = props;
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                placeholder="Nombre"
                style={[styles.input, styles.nombre]}
                onChange={(e)=> setNombre(e.nativeEvent.text)}
                />
                <TextInput 
                placeholder="cantidad a pedir"
                keyboardType="numeric"
                style={styles.input}
                onChange={(e)=> setCapital(e.nativeEvent.text)}
                />
                <TextInput 
                placeholder="Interes %"
                keyboardType="numeric"
                style={[styles.input, styles.inputPorcentaje]}
                onChange={(e)=> setInterest(e.nativeEvent.text)}
                />
            </View>
            <RNPickerSelect
                style={picker}
                onValueChange={(value) => setMonths(value)}
                placeholder={{
                    label: 'Seleccione un mes',
                    value: null,
                }}
                    items={[
                        { label: '3 meses', value: 3 },
                        { label: '6 meses', value: 6 },
                        { label: '12 meses', value: 12 },
                        { label: '24 meses', value: 24 },
                    ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: -40,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 280,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'column',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "100%",
        marginRight: 5,
        marginLeft: 0,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPorcentaje: {
        width: "100%",
        marginLeft: 0,
    },
    nombre:{
        width: "100%",
    },
});

const picker = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff'
    }
})