import { useState } from "react";
import { Link, router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity } from "react-native";
import { FormField, CustomButton} from "../../components";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signupValidationSchema } from "../../util";
import { useTogglePasswordVisibility } from "../../hooks";
import { FormErrorMessage } from "../../components/FormErrorMessage";

const SignUp = ( ) => {
  const navigation = useNavigation();

  const [errorState, setErrorState] = useState("");

  const {
    passwordVisibility,
    handlePasswordVisibility,
    rightIcon,
   
  } = useTogglePasswordVisibility();

  const handleSignup = async (values) => {
    const { email, password } = values;

    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      setErrorState(error.message)
    );
  };

  return (
    <SafeAreaView style={tw`flex-1 w-full h-full`}>
      <KeyboardAwareScrollView>
        <View
          style={tw`w-full flex justify-center h-full px-4 my-6 mx-auto`}
        >
         <Text className="text-2xl text-[#369FFF]">
            Create 
          </Text>
          <Text className="font-extrabold text-2xl text-[#369FFF]">
          An Account
          </Text>

          <Text className="text-xs ">
            Create an account to begin your MPS
          </Text>
          {/* Formik Wrapper */}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={signupValidationSchema}
          onSubmit={(values) => handleSignup(values)}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <>
              {/* Input fields */}
          <FormField
            title="Full Name"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="name"
          />
          <FormField
            title="Email"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            otherStyles="mt-7"
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            secureTextEntry={passwordVisibility}
            handlePasswordVisibility={handlePasswordVisibility}
          />
          <FormErrorMessage
                error={errors.password}
                visible={touched.password}
                className="text-red-400"
              />
              {/* Display Screen Error Messages */}
              {errorState !== "" ? (
                <FormErrorMessage error={errorState} visible={true} />
              ) : null}
              <CustomButton
            title="Create Account"
            // handlePress={submit}
            containerStyles="mt-7"
            onPress={handleSubmit}
          />
        </>
          )}
        </Formik>
        <View className="mt-10">
         
            <Text style={{ fontSize: 14, fontWeight: 'thin', color: 'black', paddingBottom: 10}}>
              Don't have an account?
            </Text>
            
          
              {/* Signup button */}
              <CustomButton
            title="Log In"
            containerStyles="mt-7"
            // isLoading={isSubmitting}
            className="font-thin text-center"
            onPress={() => navigation.navigate("LogIn")}
          />

         

          <Text className=" mt-12 text-center">Already have an account?</Text>
          <Text className="text-center mb-10 underline text-primary" ><Link href="/Home">sign in</Link>
          </Text>
          </View>
          
          <View className="mt flex flex-row justify-center gap-6 items-center">
            <View className="w-12 h-12 rounded-md pl-2 pt-2 mb-3"><FontAwesome5 name="facebook" size={24} color="black" /></View>
          <View className="w-12 h-12 rounded-md pl-2 pt-2 mb-3"><AntDesign name="wechat" size={24} color="black" /></View>
          <View className="w-12 h-12 rounded-md pl-2 pt-2 mb-3 "><FontAwesome name="google" size={24} color="black" /></View>
        </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
