import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Result(props) {
    const{errorMessage, capital, interest, months, total, nombre} = props;
    return (
        <View style={styles.content}> 
            {total && (
                <View style={styles.boxResult}>
                   <Text style={styles.title}>Resumen</Text> 
                   <DataResult title="Nombre: " value={`${nombre}`}/>
                   <DataResult title="Cantidad solicitada: " value={`${capital} $`}/>
                   <DataResult title="Interes %: " value={`${interest} %`}/>
                   <DataResult title="Plazos: " value={`${months} meses`}/>
                   <DataResult title="Pago mensual: " value={`${total.monthlyFee} $`}/>
                   <DataResult title="Total a pagar: " value={`${total.totalPay} $`}/>
                </View>
            )}
            <View>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
        </View>
    )
}
function DataResult(props) {
    const {title, value } = props;

    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        marginTop: 5,
        marginHorizontal: 40,
    },
    errorMessage: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        fontSize: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    }
})
