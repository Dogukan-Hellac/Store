import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { API_PRODUCT_URL } from '@env';

import ProductCard from '../../components/ProductCard'
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useDispatch } from "react-redux";

const Products = ({ navigation }) => {
    const dispatch = useDispatch()
    const { loading, data, error } = useFetch(API_PRODUCT_URL)
    const handleProductSelect = (id) => { navigation.navigate('DetailScreen', { id }) }

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />

    if (loading)
        return <Loading />

    if (error)
        return <Error />

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderProduct}
            />
        </View>
    )
}

export default Products