import React,{Component} from 'react';
import {View, StyleSheet, Alert, TextInput,ActivityIndicator,Keyboard} from 'react-native';
import { Container,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon,Button} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



class Login extends Component{
   constructor(props){
        super(props);
        this.state = {
          name:'',
          pass:'' };
    }
  login = () =>{
		const {name,pass} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(name==""){
		  this.setState({name:'Ingresa tu nombre de usuario'})
			
		}
		
		else if(reg.test(name) === false)
		{
		this.setState({name:'El nombre de usuario no es correcto'})
		return false;
		  }

		else if(pass==""){
		this.setState({pass:'Ingresa tu contraseña'})
		}
		else{
		
		fetch('http://192.168.1.101/Base/user_login.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				name: name,
				pass: pass
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
				 alert("Inicio exitoso");
				 this.props.navigation.navigate("Principal");
			 }else{
				 alert("Los datos no son correctos");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
		Keyboard.dismiss();
	}
    render(){
  const navigation = this.props.navigation;
  return (
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Iniciar  sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuario'
                             value={this.state.name}
                             onChangeText={(name)=>this.setState({name})}/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'
                  type='text'
                   value={this.state.pass}
                   onChangeText={(pass)=>this.setState({pass})}/>
                </Item>
                
              
                    
                
                
              </Body>
            </CardItem>
            <CardItem>
            <Button primary style = {misEstilos.boton}
                    onPress ={() =>
                        navigation.navigate('Registro')}>
                    <Text>Registrarse</Text>
                    </Button>
                   <Button primary style = {misEstilos.boton1}
                    onPress ={this.login}>
                    <Text>Logearse</Text>
                    </Button>
                      
            </CardItem>
            <CardItem>
                    <Button primary style = {misEstilos.boton1} 
                    onPress ={() =>
                        navigation.navigate('Movies')}>
                    <Text>Peliculas</Text>
                    </Button>
                     <Button primary style = {misEstilos.boton1} 
                    onPress ={() =>
                        navigation.navigate('Planetas')}>
                    <Text>Planetas</Text>
                    </Button>
                      
            </CardItem>
          </Card>
          
        </Content>
      </Container>
   );
  }
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  body: {
    paddingVertical: 35,
  },
    boton1: {
    marginLeft: '10%',
  },
     boton: {
    marginRight: '0%',
  }
});

export default Login;