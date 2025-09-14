import { StyleSheet, Text, View,FlatList, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CategoryType, ProductType } from '@/types/type'
import { Stack } from 'expo-router'
import Header from '@/Components/Header'
import ProductItem from '@/Components/ProductItem'
import { Colors } from '@/constants/Colors'
import ProductList from '@/Components/ProductList'
import Categories from '@/Components/Categories'
import FlashSale from '@/Components/FlashSale'

type Props = {}

const HomeScreen = (props: Props) => {

  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [saleProducts, setSaleProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts();
    getCategories();
    getFlashSales();
  }, [])

  const getFlashSales = async() => {
    const URL = `http://localhost:8000/saleProducts`;
    const response = await axios.get(URL);

    setSaleProducts(response.data);
    setIsLoading(false);
  }

  const getCategories = async() => {
    const URL = `http://localhost:8000/categories`;
    const response = await axios.get(URL);

    setCategories(response.data);
    setIsLoading(false);
  }

  const getProducts = async() => {
    const URL = `http://localhost:8000/products`;
    const response = await axios.get(URL);

    setProducts(response.data);
    setIsLoading(false);
  }

  if(isLoading) {
    return (
      <View>
        <ActivityIndicator size={"large"}/>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
          options={{
            headerShown : true,
            header: () => <Header />
          }}
      />

      <ScrollView>
        <Categories categories={categories}/>
        <FlashSale produts={saleProducts}/>
        <View style={{marginHorizontal: 20, marginBottom: 10}}>
          <Image source={require("@/assets/images/sale-banner.jpg")} style={{width: "100%", height: 150, borderRadius: 15}}/>
        </View>
        <ProductList products={products} flatList={false}/>
      </ScrollView>


    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})