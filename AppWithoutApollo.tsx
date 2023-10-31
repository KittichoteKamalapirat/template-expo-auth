import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { Asset } from "expo-asset";
import Toast from "react-native-toast-message";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { UserContext } from "./context/UserContext";
import { User } from "./graphql/generated/graphql";
import TabNavigator from "./navigations/TabNavigator";
import { useIsFirstLaunch } from "./util/useIsFirstLaunch";
import useSetUserContext from "./util/useSetUserContext";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const AppWithoutApollo = () => {
  // HOOKS
  const [appIsReady, setAppIsReady] = useState(false);
  const isFirstLaunch = useIsFirstLaunch();
  useSetUserContext();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const userProviderValue = useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser, setCurrentUser]
  );
  // for hiding tab in onboarding screen
  const [routeName, setRouteName] = useState("");
  const ref = createNavigationContainerRef() as any; // TODO

  // HANDLERS
  const cacheResources = async () => {
    const audios = [require("./assets/audio/success.mp3")];
    const cacheAudios = audios.map((audio) => {
      return Asset.fromModule(audio).downloadAsync();
    });

    return Promise.all(cacheAudios);
  };

  const onLayoutRootView = useCallback(async () => {
    // ref: https://docs.expo.dev/versions/latest/sdk/splash-screen/
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // USE_EFFECTS
  // load and cache resources
  useEffect(() => {
    async function prepare() {
      try {
        // load dictioanry database
        if (isFirstLaunch) console.log("is first launch");

        // load success sound and images
        await cacheResources();
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null; // Splashscreen is shown
  }

  return (
    <UserContext.Provider value={userProviderValue}>
      <NavigationContainer
        ref={ref}
        onReady={() => {
          setRouteName(ref.getCurrentRoute().name);
        }}
        onStateChange={async () => {
          // const previousRouteName = routeName;
          const currentRouteName = ref.getCurrentRoute().name;
          setRouteName(currentRouteName);
        }}
      >
        <View onLayout={onLayoutRootView}></View>

        <TabNavigator routeName={routeName} />
        <StatusBar style="dark" />
      </NavigationContainer>
      <Toast />
    </UserContext.Provider>
  );
};

export default AppWithoutApollo;
