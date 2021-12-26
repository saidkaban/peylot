import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { MainTabs } from "./navigation/Navigator";
import { Provider } from "react-redux";
import { store } from "./store/store";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "zen-antique": require("./assets/fonts/ZenAntique-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFondLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFondLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainTabs />
      </Provider>
    </NavigationContainer>
  );
}
