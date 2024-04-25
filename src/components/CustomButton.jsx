import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import tw from 'tailwind-react-native-classnames';

const CustomButton = ({
  title,
  handlePress,
 containerStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={{ backgroundColor: '#369FFF', borderRadius: 5, paddingVertical: 10, paddingHorizontal: 20, ...tw`justify-center items-center`
      }}
      disabled={isLoading}
    >
      <Text style={{ color: '#F8F4FF', fontWeight: 'light', fontSize: 12, }}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={tw`ml-2 ${containerStyles}`}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
