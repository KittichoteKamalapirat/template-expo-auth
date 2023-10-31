import { FlashList } from "@shopify/flash-list";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Action, useMyActionsQuery } from "../../graphql/generated/graphql";
import tw from "../../lib/tailwind";
import Loading from "../Loading/Loading";
import Error from "../layouts/Error";
import ActionItem from "./ActionItem";

interface Props {
  displayNum?: number;
  style?: string;
}
const Actions = ({ displayNum = 5, style = "" }: Props) => {
  const { data, loading, error } = useMyActionsQuery();

  const actions = displayNum
    ? data?.myActions
        .filter((action) => action.status === "complete")
        .filter((_, index) => {
          return index <= displayNum - 1;
        })
    : data?.myActions;

  const displayActions = actions
    ?.slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
    );

  if (loading) return <Loading />;
  if (error) return <Error message="Unknown Error" />;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw`${style}`}>
      <Text style={tw`text-xl font-bold mb-4`}>Activities</Text>
      {actions?.length === 0 ? (
        <Text style={tw`text-sm`}>You do not have any complete actions.</Text>
      ) : (
        <View style={tw`flex flex-col w-full h-full`}>
          <FlashList
            data={displayActions}
            estimatedItemSize={20} // TODO: what should this be
            renderItem={({ item: action, index }) => (
              <ActionItem
                key={`Action-${index}`}
                action={action as Action}
                style="mb-2"
              />
            )}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Actions;
