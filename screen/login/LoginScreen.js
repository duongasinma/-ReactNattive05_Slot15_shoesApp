import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles/styles';
export default function LoginScreen() {
 
    const bg_login = require('../../assets/images/bg_login.webp')
    const icon_user = require('../../assets/images/icon_user.png')
    const icon_password = require('../../assets/images/ic_password.png')
    return (
    // <LinearGradient
    //   start={{x: 0, y: 2}}
    //   end={{x: 0, y: 0}}
    //   colors={['#4c669f', '#3b5998', '#192f6a']}
    //   style={styles.linearGradient}
    //   >
    //   <Text style={styles.buttonText}>Sign in with Facebook</Text>
    // </LinearGradient>
    <View style={styles.container}>
        <View style={{flex: 2}}>
            <Image style={{width:'100%',height: '100%'}} 
            resizeMode='cover' source={bg_login}/>
        </View>
        <View style={{flex: 1}}>     
        </View>
        <LinearGradient
            style={styles.gradient_container}
            colors={['transparent', '#FFF', '#FFF']}
        >
            {/* form login */}
            <View style={styles.linear_container}>
                <View style={styles.form_container}>
                    <View style={styles.form_container_flex}>
                        <Text style={styles.form_container_flex_title} >Login</Text>
                        <View style={styles.form_input_container}>
                            <View style={styles.input_container}>
                                <View style={styles.input_with_icon}>
                                    <Image source={icon_user} style={styles.input_with_icon_container__icon}/>
                                    <TextInput placeholder='Email' style={styles.input_with_icon_container__input}></TextInput>
                                </View>
                                <View style={{height: 1,backgroundColor:'#DFDFDF'}}></View>
                                <View style={styles.input_with_icon}>
                                    <Image source={icon_password} style={styles.input_with_icon_container__icon}/>
                                    <TextInput placeholder='Password' style={styles.input_with_icon_container__input}></TextInput>
                                </View>
                            </View>
                        <TouchableOpacity
                            style={{backgroundColor: "black",
                            borderRadius: 5,
                            padding: 16,
                            marginTop: 24
                        }}
                        >
                            <Text style={{color: 'white', alignSelf: 'center'}}>Login</Text>
                        </TouchableOpacity>
                        <Text style={{
                            color: 'black',
                            alignSelf: 'center',
                            marginTop: 16
                        }}>Don't have an account? Signup</Text>
                        </View>
                    </View>              
                </View>
            </View>
        </LinearGradient>
    </View>
  );
}
