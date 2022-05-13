import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { NativeBaseProvider } from "native-base";
import theme from "./src/theme/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { IS_WEB } from "./src/utils/Constants";

if (__DEV__ && !IS_WEB) {
  import("./src/ReactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NativeBaseProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </GestureHandlerRootView>
    );
  }
}
