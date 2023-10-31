import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";
import { Text, View } from "react-native";
import { Action } from "../../graphql/generated/graphql";
import tw from "../../lib/tailwind";
dayjs.extend(relativeTime);

import clsx from "clsx";
import dayjs from "dayjs";
import { black } from "../../theme/style";

interface Props {
  action: Action;
  style?: string;
}

export type ActionType = "tutor" | "scene" | "pronounce";

const actionTypeToEmojiMapper: Record<ActionType, string> = {
  pronounce: "Pronunciation Practice",
  scene: "Scene",
  tutor: "Tutor",
};
const ActionItem = ({ action, style = "" }: Props) => {
  const { createdAt, scene, type } = action;
  const { title, emoji, level } = scene || {};

  const text = (() => {
    switch (type) {
      case "scene":
        return `${emoji} ${title}`;
      case "tutor":
        return "";
      case "pronounce":
        return level;
    }
  })();
  return (
    <View
      style={tw`${clsx("relative pt-2 w-full bg-white rounded-md", style)}`}
    >
      <View style={tw`flex flex-row gap-4 items-center`}>
        <View
          style={tw`p-2 flex items-center justify-center bg-blue-100 rounded-full`}
        >
          {type === "scene" && (
            <Ionicons name="chatbox-ellipses-outline" size={20} color={black} />
          )}
          {type === "tutor" && (
            <MaterialIcons name="school" size={24} color={black} />
          )}
          {type === "pronounce" && (
            <MaterialCommunityIcons
              name="square-wave"
              size={24}
              color={black}
            />
          )}
        </View>
        <View>
          <Text style={tw`text-sm text-center`}>
            {actionTypeToEmojiMapper[type as ActionType]}: {text}
          </Text>
          <Text style={tw`font-semibold text-xs text-grey-300`}>
            {dayjs().to(dayjs(createdAt))}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ActionItem;
