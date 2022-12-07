import { NativeBaseProvider, Text, Center, StatusBar } from "native-base"
import { NavigationContainer } from "@react-navigation/native"

import { Provider } from "react-redux"
import { SafeAreaBox } from "./src/components/safe-area-box/SafeAreaBox"
import { Navigation } from "./src/infrastructure/navigation/Navigation"
import { store } from "./src/store/store"

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaBox>
            <Navigation />
          </SafeAreaBox>
        </NavigationContainer>
      </Provider>
      <StatusBar style='auto' />
    </NativeBaseProvider>
  )
}
