import React from "react";
import { Text, View } from "react-native";

import tw from "../../lib/tailwind";

interface Props {
  message: string;
}
const Error = ({ message }: Props) => {
  return (
    <View style={tw`flex h-full w-full`}>
      <Text style={tw`items-center justify-center `}>{message}</Text>
    </View>
  );
};

export default Error;
