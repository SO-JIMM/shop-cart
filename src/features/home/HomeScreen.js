import { Box, Heading, Text, Container } from "native-base"
import React from "react"

export const HomeScreen = () => {
  return (
    <Box flex={1} p={2} bgColor='teal.50'>
      <Container>
        <Heading>
          <Text>Home</Text>
        </Heading>
      </Container>
    </Box>
  )
}
