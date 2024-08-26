import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Products from './screens/Products';
import Detail from './screens/Detail';
import Login from './screens/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/Loading';


const Stack = createNativeStackNavigator();

export default function App() {
  const userSession = useSelector(s => s.user)
  const isLoading = useSelector(s => s.isAuthLoading)
  const dispatch = useDispatch()

  return (
    <NavigationContainer>
      {isLoading ? (<Loading />) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={Login} options={{
            title: "Login",
            headerShown: false
          }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="ProductsScreen" component={Products} options={{
            title: "Dükkan",
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' },
            headerRight: () => <MaterialCommunityIcons name="logout" size={30} color="black" onPress={() => dispatch({type:'REMOVE_USER'})}/>
          }} />
          <Stack.Screen name="DetailScreen" component={Detail} options={{
            title: "Detay",
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white'
          }} />
        </Stack.Navigator>
      )
      }
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
