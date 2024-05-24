// import { useState } from "react";
import { Link, router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
// import { FormField, CustomButton} from "../../components";
// import { FontAwesome5 } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
import { Formik } from "formik";
import { sendPasswordResetEmail } from "firebase/auth";

import { passwordResetSchema } from "../utils";


const ForgotPassword = () => {

  const navigation = useNavigation();
  const [errorState, setErrorState] = useState("");

  const handleSendPasswordResetEmail = (values) => {
    const { email } = values;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Success: Password Reset Email sent.");
        navigation.navigate("Login");
      })
      .catch((error) => setErrorState(error.message));
  };
  
  return (
    <View isSafe style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.screenTitle}>Reset your password</Text>
      </View>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={passwordResetSchema}
        onSubmit={(values) => handleSendPasswordResetEmail(values)}
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
            {/* Email input field */}
            <TextInput
              name="email"
              leftIconName="email"
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <FormErrorMessage error={errors.email} visible={touched.email} />
            {/* Display Screen Error Mesages */}
            {errorState !== "" ? (
              <FormErrorMessage error={errorState} visible={true} />
            ) : null}
            {/* Password Reset Send Email  button */}
            <Button style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Send Reset Email</Text>
            </Button>
          </>
        )}
      </Formik>
      {/* Button to navigate to Login screen */}
      <Button
        className="w-full mt-2 rounded-md"
        borderless
        title={"Go back to Login"}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default ForgotPassword;
