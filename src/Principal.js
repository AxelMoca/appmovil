import React,{Component,useState,useEffect} from 'react';
import {View, StyleSheet, Alert, TextInput} from 'react-native';
import { Container,Text, Header,Button,ActivityIndicator, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Indicator from './Indicator';

function Principal({route,navegar}){
  const [isVisible, setIsVisible] = useState(true);
    const toggleVisible = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        setTimeout(() => {
            toggleVisible();
        }, 1000);
    }, []);
 React.useEffect(() => {
    if (route.params?.pass && route.params?.user){
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.pass],[route.params?.user]);


  return (
    <View>
      <Indicator isVisible={isVisible}/>
      <Text >Hola usuario: {route.params?.pass}</Text>
      <Text >Tu password es: {route.params?.user}</Text>
    

    </View>

  
  );
 
}
 
export default Principal;