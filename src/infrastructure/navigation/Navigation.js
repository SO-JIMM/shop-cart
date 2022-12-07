import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { HomeScreen } from "../../features/home/HomeScreen"

const Drawer = createDrawerNavigator()

export const Navigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#14b8a6",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "700",
          letterSpacing: 0.5,
        },
      }}
      initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeScreen} />
    </Drawer.Navigator>
  )
}
