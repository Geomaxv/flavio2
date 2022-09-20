import React from 'react';
import { View, Text, Image } from 'react-native';

export default function previsao(props) {
 return (
   <View style={{display: "flex", flexDirection: 'row', justifyContent: "space-between", width: "100%", marginTop: 30}}>
    <Image source={(props.imagem)} style={{width:30, height:30}}/>
    <View style={{flexDirection: 'row', alignItems: "center"}}>
    <Text style={{fontSize: 22, color: "white", fontWeight: "bold"}}>{props.dia}</Text>
    <Text style={{fontSize: 22, color: "#D9E5FF", fontWeight: "bold"}}>, {props.data}</Text>
    </View>
    <View style={{flexDirection: 'row', alignItems: "center"}}>
    <Text style={{fontSize: 22, color: "white", fontWeight: "bold"}}>{props.tempmaior}</Text>
    <Text style={{fontSize: 22, color: "#D9E5FF", fontWeight: "bold"}}>, {props.tempmenor}</Text>
    </View>
    
   </View>
  );
}