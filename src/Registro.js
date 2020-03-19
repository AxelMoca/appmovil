import React,{Component} from 'react';
import {AppRegisrty,View, StyleSheet, Alert, TextInput} from 'react-native';
import { Container,Button,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class Registro extends Component {
  mensaje = ()=>{alert('Datos Registrados Exitosamente')};
    constructor(props){
     super(props);
    this.state = {
      TextInputNombre: '',
      TextInputPass: '',
      TextInputCorreo: ''
  }
}

  mensaje = ()=>{alert('Datos guardados')};
  userRegister = () =>{
		
		 const {TextInputNombre} = this.state;
    const {TextInputPass} = this.state;
    const {TextInputCorreo} = this.state;
		
		
		fetch('http://192.168.1.68/Base/user_register.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				pUsuario: TextInputNombre,
        pPass: TextInputPass,
        pCorreo: TextInputCorreo,
			})
			
		})
		.then((response) => response.text())
      .then((responseData) =>{
        //alert(responseData);
        if(responseData==1){
          Alert.alert("Registro exitoso");
        }else{
          Alert.alert("Ocurrió un error, asegurate de llenar correctamente todos los campos");
        }
      })
      .catch((error)=>{
          console.error(error);
      });
  }
  render(){
  const navegar = this.props.navigation;
    return(
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Llena los siguientes campos</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                  <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <TextInput placeholder= 'Username' onChangeText={TextInputNombre =>this.setState({TextInputNombre})}/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'MaterialCommunityIcons' name= 'email'></Icon>
                  <Input placeholder = 'Correo' onChangeText={TextInputCorreo =>this.setState({TextInputCorreo})}/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <TextInput placeholder = 'Constraseña' onChangeText={TextInputPass =>this.setState({TextInputPass})}/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Confirmar contraseña'/>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
             <Button  style= {misEstilos.container} onPress={() => navegar.navigate                   ('Login')}>
            <Text>Registrar</Text>
             </Button> 
             
            </CardItem>
          </Card>
          <Button full>
            <Icon type= 'AntDesign' name= 'facebook-square'></Icon>

          </Button>
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
  container: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
    },

});



export default Registro;