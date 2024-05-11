import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { COLORS, FONTSTYLES, SIZES } from '../Constraints/Colors';


const CustomTextInput = ({value, onChangeText, placeholder, type}) => {
  return (
    <View
      style={{
        margin: 30,
        bottom: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#DADADA',
        height: 60,
        paddingLeft: 10,
        fontSize: 20,
      }}>
      <TextInput  style= {{fontFamily: FONTSTYLES.fontstying, fontSize: SIZES.h2,}}
      placeholderTextColor={COLORS.placeholderTextColor}
      placeholder={placeholder}></TextInput>
     
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
