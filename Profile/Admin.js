import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, BackHandler, ImageBackground, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { Avatar } from 'react-native-elements';
import Elevations from 'react-native-elevation';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function Admin({ route , navigation }){
    const [dataUser, setdataUser] = useState([]);
    const [DarkMode, setDarkMode] = useState(true);
    const [Alerting, setAlerting] = useState(false);
    const { id, email, nom, prenom, password, image, type } = route.params;
    const [Img, setImg] = useState({numb:{
        "1": require("../Users/jan.jpg"),
        "2": require("../Users/hil.jpg"),
        "3": require("../Users/me1.jpg"),
    }});
    const onBackPress = () => {
        setAlerting(true);
    }
    useEffect( () => {
        // BackHandler.addEventListener("hardwareBackPress", onBackPress );
        // return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress );
    }, []);    
    return(
        // <View style={Styles.Body}>
        //     <View style={Styles.Body2}>
        //     </View>
        // </View>
        // <ImageBackground
        //     source={ 
        //         DarkMode ? require('../bgBaj.jpg') : require('../bgDark3.jpg')
        //     }
        //     style={Styles.imag}
        // >
        // <View style={{backgroundColor:( DarkMode ? '#F1EADF' : '#504F4D' ), flex: 1}}>
        <View style={{backgroundColor:( DarkMode ? '#F1EADF' : '#3F3F3A' ), flex: 1}}>
            <View style={Styles.ViewChang}>
                { DarkMode ?
                    <Feather
                        name="moon"
                        size={28}
                        color="black"
                        onPress={ () => {
                            setDarkMode(!DarkMode)
                        }}
                    />
                    :
                    <Feather
                        name="sun"
                        size={28}
                        color="white"
                        onPress={ () => {
                            setDarkMode(!DarkMode)
                        }}
                    />
                }
            </View>
            <View style={[Styles.img,{backgroundColor: DarkMode? '#DAD7D4' : '#3F4042'}]}>
                <Avatar
                    rounded
                    size="xlarge"
                    source={{uri:image}}
                    containerStyle ={{ marginHorizontal: '10%'}}
                >
                    <Avatar.Accessory
                        size={26}
                        color='black'
                        style={{backgroundColor:'silver',}}
                        onLongPress={ () => console.log('h')}
                    />
                </Avatar>
                <Text style={Styles.Title}>{nom+" "+prenom}</Text>
                <Text style={[Styles.Title,{color: '#FF5105', fontSize: 20,}]}>{type}</Text>
            </View>
            <View style={Styles.elem}>
                {/* ,{backgroundColor: DarkMode? '#F0E3CE' : 'white'}]}> */}
                <View style={{height: 90, marginVertical: -7, marginTop: 3,}}>
                <TouchableOpacity style={[Styles.elem1, {backgroundColor:( DarkMode ? '#F9F8F2' : '#504F4D' )}]} onPress={ () => navigation.navigate('profile',{id: id})}>
                    <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
                    <Avatar
                        size="medium"
                        icon={{name: 'user', color:( DarkMode ? 'black' : 'white' ), type: 'font-awesome'}}
                        containerStyle={{ marginTop: "-10%"}}
                    />
                    <Text
                        style={[ Styles.text , {color:( DarkMode ? 'black' : 'white' )} ]}
                    >Profile</Text>
                    </View>
                    <Feather
                        style={ {color:( DarkMode ? 'black' : 'white' )}}
                        name="chevron-right"
                        size={22}
                    />
                </TouchableOpacity>
                </View>
                <View style={{height: 90, marginVertical: -7,}}>
                <TouchableOpacity style={[Styles.elem1, {backgroundColor:( DarkMode ? '#F9F8F2' : '#504F4D' )}]} onPress={ () => navigation.navigate('str_Rech')}>
                    <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
                    <Avatar
                        size="medium"
                        icon={{name: 'lab-flask', color:( DarkMode ? 'black' : 'white' ), type: 'entypo'}}
                        containerStyle={{ marginTop: "-5%"}}
                    />
                    <Text
                        style={[ Styles.text , {color:( DarkMode ? 'black' : 'white' )} ]}
                    >Structures de recherches</Text>
                    </View>
                    <Feather
                        style={ {color:( DarkMode ? 'black' : 'white' )}}
                        name="chevron-right"
                        size={22}
                    />
                </TouchableOpacity>
                </View>
                <View style={{height: 90, marginVertical: -7,}}>
                <TouchableOpacity style={[Styles.elem1, {backgroundColor:( DarkMode ? '#F9F8F2' : '#504F4D' )}]} onPress={ () => navigation.navigate('Gestion_Comptes', {type: type})}>
                    <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
                    <Avatar
                        size="medium"
                        icon={{name: 'user-cog', color:( DarkMode ? 'black' : 'white' ), type: 'font-awesome-5'}}
                        containerStyle={{ marginTop: "-5%"}}
                    />
                    <Text
                        style={[ Styles.text , {color:( DarkMode ? 'black' : 'white' )} ]}
                    >Gestion des comptes</Text>
                    </View>
                    <Feather
                        style={ {color:( DarkMode ? 'black' : 'white' )}}
                        name="chevron-right"
                        size={22}
                    />
                </TouchableOpacity>
                </View>
                <View style={{height: 90, marginVertical: -7, marginBottom: 3,}}>
                <TouchableOpacity style={[Styles.elem1, {justifyContent: 'flex-start', backgroundColor:( DarkMode ? '#F9F8F2' : '#504F4D' )}]} onPress={ () => setAlerting(true) } >
                    <Avatar
                        size="medium"
                        icon={{name: 'sign-out', color:( DarkMode ? 'black' : 'white' ), type: 'font-awesome'}}
                        containerStyle={{ marginTop: "-5%" }}
                    />
                    <Text
                        style={[ Styles.text , {color:( DarkMode ? 'black' : 'white' )} ]}
                    >Log out</Text>
                </TouchableOpacity>
                <AwesomeAlert
                    show={Alerting}
                    showProgress={false}
                    progressColor="#DD6B55"
                    progressSize={50}
                    title="D??connexion"
                    message="??tes-vous s??r de vouloir vous d??connecter ?"
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No"
                    confirmText="Oui"
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        setAlerting(false);
                    }}
                    onConfirmPressed={() => {
                        setAlerting(false);
                        navigation.goBack();
                    }}
                />
                {/* <AwesomeAlert
                    show={progressing}
                    showProgress={true}
                    progressColor="#DD6B55"
                    progressSize={50}
                /> */}
                </View>
            </View>
        </View>
        /* </ImageBackground> */
    );
}

const Styles = StyleSheet.create({
    ViewChang: {
        marginTop: "10%",
        marginLeft: "88%",
    },
    Body: {
        flex: 1,
        backgroundColor: '#ff6701',
    },
    Body2: {
        flex: 1,
        marginTop: "40%",
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        backgroundColor: '#383733',
    },
    elem: {
        borderRadius: 10,
        flex: 1,
        flexDirection: 'column',
        marginTop: "0%",
        marginHorizontal: 12,
        marginBottom: "4%",
        ...Elevations[6],
    },
    elem1: {
        borderRadius: 10,
        width: "85%",
        marginVertical: "5%",
        paddingVertical: "3.5%",
        marginHorizontal: "7.5%",
        paddingHorizontal: "4%",
        paddingLeft: "3%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...Elevations[4]
    },
    img: {
        backgroundColor: "#DAD7D4",
        marginTop: "-12%",
        width: '68%',
        borderRadius: 5,
        paddingHorizontal: '10%',
        paddingVertical: '2.5%',
        marginBottom: '4%',
        marginHorizontal: "16%",
        ...Elevations[10],
    },
    imag: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    Title: {
        marginTop: "6%",
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        marginHorizontal: 0,
        color: '#ff6701',
    },
    text: {
        fontSize: 18,
    }

})