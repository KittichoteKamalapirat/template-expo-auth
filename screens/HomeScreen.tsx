import { ScrollView, Text } from "react-native";

import { Container } from "../components/containers/Container";
import ScreenLayout from "../components/layouts/ScreenLayout";
import tw from "../lib/tailwind";

const HomeScreen = () => {
  return (
    <ScreenLayout>
      <Container>
        <ScrollView style={tw`h-full`} showsVerticalScrollIndicator={false}>
          <Text>Home</Text>
        </ScrollView>
      </Container>
    </ScreenLayout>
  );
};

export default HomeScreen;
