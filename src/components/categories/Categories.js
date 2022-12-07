import { Text, View } from "native-base"
import React from "react"
import { useGetProductsQuery } from "../../store/api/apiSlice"

const CategoriesList = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery()

  let content

  if (isLoading) {
    content = <Text>Loading ...</Text>
  } else if (isSuccess) {
    content = products.map((product) => (
      <Text key={product.id}>{product.title}</Text>
    ))
  } else if (isError) {
    content = <Text>{error.toString()}</Text>
  }
  return content
}

export const Categories = () => {
  return (
    <View flex={1} flexDirection='column'>
      <CategoriesList />
    </View>
  )
}
