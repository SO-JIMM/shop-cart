import { Box, Heading, Text, Container } from "native-base"
import React from "react"
import { Categories } from "../../components/categories/Categories"

export const HomeScreen = () => {
  return (
    <Box flex={1} p={2} bgColor='teal.50'>
      <Container>
        <Heading>
          <Text>Cats</Text>
        </Heading>
      </Container>
      <Categories />
    </Box>
  )
}
