// import { useState } from "react";
import { Link, router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { FormField, CustomButton} from "../../components";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Formik } from "formik";
import { useTogglePasswordVisibility } from "../../hooks";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginValidationSchema } from "../utils";
import { FormErrorMessage } from "../../components/FormErrorMessage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";




const Login = () => {

  const navigation = useNavigation();
  const [errorState, setErrorState] = useState("");
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  const handleLogin = (values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      setErrorState(error.message)
    );
  };

  return (
    <SafeAreaView style={tw`flex-1 w-full h-full`}>
      <KeyboardAwareScrollView>
        <View
          style={tw`w-full flex justify-center h-full px-4 my-6 mx-auto`}
        >
         <Text sty className="text-2xl font-medium text-[#369FFF] font-[Poppins]">
            Welcome Back!
          </Text>
          <Text className="text-2xl font-bold text-[#369FFF] font-[Poppins]">
            Enter Your Details
          </Text>

          <Text  className="text-2xl font-thin text-[#369FFF] font-[Poppins]">
            Log in to continue your MPS
          </Text>

          <Formik
            initialValues={{email: "", password: "",
            }}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => handleLogin(values)}
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
            title="Email"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            // value={password}
            // handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
              <FormErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />
                 {/* Display Screen Error Messages */}
                 {errorState !== "" ? (
                  <FormErrorMessage error={errorState} visible={true} />
                ) : null}
                {/* Login button */}
          <CustomButton
            title="Log In"
            onPress={handleSubmit}
            containerStyles="mt-7"
            // isLoading={isSubmitting}
            className="font-thin text-center"
          />
          {/* <TouchableOpacity className="bg-primary mt-7">
            <Link href="/Home">
              <Text className="font-thin text-center">Log In</Text>
            </Link>
          </TouchableOpacity> */}
          </>
            )}
          </Formik>

          <View style={{ marginTop: 20}}>
            <Text style={{ fontSize: 14, fontWeight: 'thin', color: 'black', paddingBottom: 10}}>
              Don't have an account?
            </Text>
            <CustomButton
            title="Create Account"
            // handlePress={submit}
            onPress={() => navigation.navigate("Signup")}
            containerStyles="mt-7"
            // isLoading={isSubmitting}
          />
          
          </View>
          <Text style={{ fontSize: 14, fontWeight: 'thin', color: '#A90116'}}>Forget Password?</Text>
          <View style={{ marginTop: 20}}>
          </View>
          
          <View className="flex justify-around items-center bg-gray-700">
            <View style={{width: '60px', height: '60px', backgroundColor: '#A90116', borderRadius: 10,}}><FontAwesome5 name="facebook" size={24} color="black" /></View>
          <View><AntDesign name="wechat" size={24} color="black" /></View>
          <View className="bg-slate-400"><FontAwesome name="google" size={24} color="black" /></View>
        </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
