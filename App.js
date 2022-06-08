import React, { useState, useEffect } from "react";
import { StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  StatusBar, 
  Button, } from 'react-native';
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";
import Result from "./src/components/Result";
import colors from './src/utils/colors';

export default function App(){
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {

    if (capital && interest && months && nombre) calculate(); 
    else reset();
    
  }, [capital, interest, months, nombre])

  const calculate = ()=>{
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    }else if (!interest) {
      setErrorMessage('Añade el interes del prestamo');
    }else if (!months) {
      setErrorMessage('Selecciona los meses a pagar');
    }
    else if (!nombre){
      setErrorMessage('Añade el nombre');
    }else{
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, - months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPay: (fee * months).toFixed(2).replace('.', ','),
      })

    }
  }

  const reset = () => {
    setErrorMessage("");
    setTotal(null);
  }

  return (
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}/>
      <Text style={styles.titleApp}>Cotizador de prestamos</Text>
      <Form setCapital={setCapital}
      setInterest={setInterest}
      setMonths={setMonths}
      setNombre={setNombre}
      />
    </SafeAreaView>

    <Result 
      nombre={nombre}
      capital={capital}
      interest={interest}
      months={months}
      total={total}
      errorMessage={errorMessage}
    />  

    <Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center",
  },
  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  }
});