import React from 'react';
import { Text, View,ScrollView,TouchableOpacity,StyleSheet,FlatList, TextInput, Alert} from 'react-native';
import {SearchBar,Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    SignIN = async(email,password)=>{
         if(email,password){
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(()=>{
              return Alert.alert("User succesfully Logged IN");
            }).catch((error)=>{
              var errorCode = error.Code;
              var errorMessage = error.message;
              return Alert.alert(errorMessage);
            })
          }else {
              Alert.alert("Enter Email and Password");
            }    
        
    }
    
    SignUP = async(email,password)=>{
      if(email,password){
          firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(()=>{
            return Alert.alert("User succesfully created");
          }).catch((error)=>{
            var errorCode = error.Code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
          })
      }else {
            Alert.alert("Enter Email and Password");
          }    
      
  }
    
    render() {
        return (
          <View>
              <SafeAreaProvider>
           <Header 
            backgroundColor={'pink'}
            centerComponent={{
            text:'Login,SigNUP',
            style:{fontSize:25,color:'black'}
            }}/>

            <TextInput 
            styles={[styles.input,{marginTop:60}]}
            onChangeText={(text)=>{this.setState({email:text})}}
            placeholder={"Enter email here"}
            keyboardType={'email-address'}/>
            
            <TextInput 
            styles={[styles.input,{marginTop:60}]}
            onChangeText={(text)=>{this.setState({password:text})}}
            placeholder={"Enter password here"}
            secureTextEntry={true}/>

            <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.SignIN(this.state.email,this.state.password)}}><Text>Submit</Text></TouchableOpacity>
            
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.SignUP(this.state.email,this.state.password)}}><Text>Sign UP</Text></TouchableOpacity>

            </SafeAreaProvider>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    input:{
        width:200,
        height:20,
        borderColor:'black',
        color:'black',
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        borderWidth:1,
        marginTop:15
    },
    button:{
        marginTop:15,
        alignSelf:'center',
        width:70,
        height:30,
        backgroundColor:'red',
        color:'green'
      }
})