import { Box } from "native-base"

import React from "react"

export const SafeAreaBox = ({ children }) => {
  return (
    <Box borderWidth={8} borderColor='blue.600' flex={1} safeArea>
      {children}
    </Box>
  )
}
