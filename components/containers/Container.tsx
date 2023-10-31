import clsx from "clsx";
import { ReactNode } from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";

interface Props {
  children: ReactNode;
  style?: string;
}

export const Container = ({ children, style }: Props) => {
  return <View style={tw`${clsx("px-1 py-4", style)}`}>{children}</View>;
};

export default Container;
