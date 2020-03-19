import { Alert } from 'react-native';

const URL_DATA = 'http://192.168.1.68/Base';

class API {
    async validarLog(usuario, pass){
const query = await fetch(`${URL_DATA}login.php?user=${usuario}&pass=${pass}`);
const data = await query.json();
return data;
    }


    registerData(usuario, pass){
        fetch(`${URL_DATA}registrar.php`,{
            method: 'POST',
            body: JSON.stringify({
                pUsuario : usuario,
                pPass : pass
            }),
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }).then(response => response.json())
        .catch(error => console.error('Error: ',error))
        .then(response =>{
            if(response.status == 1){
                Alert.alert('Registro exitoso');
            }
            else{
                Alert.alert('Ocurrio un error')
            }
        });
    }
}

export default new API()