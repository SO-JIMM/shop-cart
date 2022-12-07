import { NativeBaseProvider, Text, Center, StatusBar } from "native-base"
import { Provider } from "react-redux"
import { SafeAreaBox } from "./src/components/safe-area-box/SafeAreaBox"
import { store } from "./src/store/store"
export default function App() {
  return (
    <>
      <Provider store={store}>
        <NativeBaseProvider>
          <SafeAreaBox>
            <Center>
              <Text>Open up App.js to start working on your app!</Text>
            </Center>
          </SafeAreaBox>
          <StatusBar style='auto' />
        </NativeBaseProvider>
      </Provider>
    </>
  )
}
