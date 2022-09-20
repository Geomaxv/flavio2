import { StyleSheet, View, Text, Image } from "react-native";
import Localizacao from "../componentes/Localizacao";
import Previdiaria from "../componentes/previdiaria"
const nuvem= require("../img/clouds.png")
const raio=require("../img/cloud-lightning.png")
const nublado= require("../img/cloudy.png")
const chuva = require("../img/heavy-rain.png")
const noite = require("../img/moon-and-stars.png")
const tempestade = require("../img/storm.png")
const stormy = require("../img/stormy-weather.png")
const sol = require("../img/sun.png")


export default function Login() {
  return (
    <View style={styles.container}>
      <View style={{marginLeft:"10%", marginRight:"10%", alignItems: "center"}}>
      <Localizacao></Localizacao>
      <View style={{width:"100%"}}>
      <Text style={{fontSize: 23, color: "white", fontWeight: "bold", marginTop: 30, marginBottom: 30, }}>Next 7 Days</Text>
      </View>

      <Previdiaria imagem={nublado}  dia="Domingo" data="3" tempmaior="31°" tempmenor="25°"></Previdiaria>
      <Previdiaria imagem={sol}  dia="Segunda" data="4" tempmaior="32°" tempmenor="28°"></Previdiaria>
      <Previdiaria imagem={nublado}  dia="Terça" data="5" tempmaior="29°" tempmenor="24°"></Previdiaria>
      <Previdiaria imagem={chuva}  dia="Quarta" data="6" tempmaior="28°" tempmenor="23°"></Previdiaria>
      <Previdiaria imagem={stormy}  dia="Quinta" data="7" tempmaior="26°" tempmenor="22°"></Previdiaria>
      <Previdiaria imagem={tempestade}  dia="Sexta" data="8" tempmaior="25°" tempmenor="20°"></Previdiaria>
      <Previdiaria imagem={nublado}  dia="Sabado" data="9" tempmaior="27°" tempmenor="23°"></Previdiaria>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#427BFF",
    flex: 1,
  },
});
