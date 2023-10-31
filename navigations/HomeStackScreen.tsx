import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { useContext } from "react";

import IconButton from "../components/Buttons/IconButton";
import { UserContext } from "../context/UserContext";
import { HomeScreen, LoginScreen, RegisterScreen } from "../screens";
import AuthScreen from "../screens/AuthScreen";
import { headerBgColor, headerTextColor } from "../theme/style";
import { ObjectValues } from "../types";
import { useIsFirstLaunch } from "../util/useIsFirstLaunch";

const HomeStack = createNativeStackNavigator();

const HOME_STACK_SCREENS = {
  HOME: "Home",
  AUTH: "Auth",
  LOGIN: "Login",
  REGISTER: "Register",
  ONBOARDING: "Onboarding",
} as const;

type HomeStackScreens = ObjectValues<typeof HOME_STACK_SCREENS>;

export type HomeStackParamList = {
  Home: undefined;
  Auth: undefined;
  Login: undefined | { next?: HomeStackScreens };
  Register: undefined | { next?: HomeStackScreens };
  Onboarding: undefined;
};

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Home">;

const HomeStackScreen = () => {
  const isFirstLaunch = useIsFirstLaunch();
  const { currentUser } = useContext(UserContext);
  const navigation = useNavigation<NavigationProp>();

  // clearAsyncStorage();

  return (
    <HomeStack.Navigator
      screenOptions={{
        // headerShown: false,
        headerTitleAlign: "left", // todo not working
        headerTintColor: headerTextColor,
        headerStyle: { backgroundColor: headerBgColor },
      }}
    >
      {/* {isFirstLaunch ? (
        <HomeStack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
      ) : null} */}

      {!currentUser ? (
        <HomeStack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
      ) : null}

      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "left",
          headerBackVisible: false,
        }}
      />

      <HomeStack.Screen
        name="Login"
        component={LoginScreen}
        options={() => ({
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.navigate("Auth")}
              icon={
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color={headerTextColor}
                />
              }
              variant="TEXT"
            />
          ),
        })}
      />
      <HomeStack.Screen
        name="Register"
        component={RegisterScreen}
        options={() => ({
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.navigate("Auth")}
              icon={
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color={headerTextColor}
                />
              }
              variant="TEXT"
            />
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
