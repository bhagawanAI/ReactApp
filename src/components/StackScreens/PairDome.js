import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { material } from "react-native-typography";

import { FONT_BACK_LABEL, FONT_HEADING } from "../Common/DynamicFonts";

export default function PairDome({ navigation }) {
  return (
    <View style={style.container}>
      {/* <View style={style.heading}>
        <Text style={[material.display1,{color:"black"}]}>PAIR YOUR DOME</Text>
      </View> */}
      <View style={style.para1}>
        <Text style={[material.subheading, style.margin]}>
          It appears this is your first seassion in this
        </Text>
        <Text style={[material.subheading, style.margin]}>
          dome, so let's pair your phone.
        </Text>
      </View>
      <View style={style.para2}>
        <Text style={[material.subheading, style.margin]}>
          Please stand near the dome, select your
        </Text>
        <Text style={[material.subheading, style.margin]}>
          dome, and click "connect".
        </Text>
      </View>
      <View style={style.para3}>
        <Text style={[material.subheading, style.marginTop]}>Select Dome:</Text>
        <Text style={[material.button, style.marginTop]}>MODRN SANCTUARY </Text>
      </View>
      <View style={style.para3}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            backgroundColor: "#85D0DA",
            marginTop: "0%",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              fontSize: 17,
              color: "white",
              textAlign: "center",
              paddingTop: 12,
            }}
          >
            CONNECT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  heading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  para1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  para2: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  para3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  para4: {},
  margin: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: FONT_BACK_LABEL,
    color: "grey",
  },
  marginTop: {
    marginTop: 10,
    letterSpacing: 1,
    color: "grey",
  },
});
