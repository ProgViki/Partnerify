import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import tw from 'tailwind-react-native-classnames';

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={tw` ${otherStyles}`}>
      <Text style={tw`text-blue-400 font-bold`}>{title}</Text>

      <View style={tw`w-full h-10 p-2 rounded border flex flex-row items-center`}>
        <TextInput
          style={tw`flex-1 text-white font-bold text-base`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="white"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={tw`w-6 h-6`}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
