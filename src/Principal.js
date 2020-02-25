import React,{Component} from 'react';
import {View, StyleSheet, Alert, TextInput} from 'react-native';
import { Container,Text, Header,Button, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Principal({route,navegar}){
 React.useEffect(() => {
    if (route.params?.pass && route.params?.user){
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.pass],[route.params?.user]);


  return (
    <View>
      <Text >Hola usuario: {route.params?.pass}</Text>
      <Text >Tu password es: {route.params?.user}</Text>
    

    </View>

  
  );
 
}
 
export default Principal;