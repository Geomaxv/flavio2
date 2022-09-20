import React from 'react';
import { View, Text } from 'react-native';

export default function local() {
 return (
   <View style={{display: "flex", flexDirection: "row", marginTop:20}}>
    <Text></Text>
    <Text style={{fontSize: 21, color: "white", fontWeight: "bold"}}>Maceió</Text>
    <Text style={{fontSize: 20, color: "#D9E5FF", fontWeight: "bold"}}>, Brazil</Text>
   </View>
  );
}

