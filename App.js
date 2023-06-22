import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import LoginScreen from './Screens/AuthPages/LoginScreen';
import RegistrationScreen from './Screens/AuthPages/RegistrationScreen';
import Home from './Screens/Home';
import CommentsScreen from './Screens/AttachedPages/CommentsScreen';
import MapScreen from './Screens/AttachedPages/MapScreen';
import SvgArrowLeft from './assets/svg/SvgArrowLeft';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Comments" screenOptions={{ headerShown: false }}>
          <MainStack.Screen name="Regestration" component={RegistrationScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{
              ...screenOptions,
              title: 'Коментарі',
              headerLeft: () => (
                <SvgArrowLeft
                  onPress={() => navigation.navigate('Posts')}
                  title="Return back"
                  color="#fff"
                  style={styles.arrowLeft}
                />
              ),
            }}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{
              ...screenOptions,
              title: 'Карта',
              headerLeft: () => (
                <SvgArrowLeft
                  onPress={() => navigation.navigate('Posts')}
                  title="Return back"
                  color="#fff"
                  style={{
                    ...styles.arrowLeft,
                    marginRight: 90,
                  }}
                />
              ),
            }}
          />
        </MainStack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  arrowLeft: {
    marginLeft: 16,
    marginRight: 76,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

const screenOptions = {
  headerShown: true,
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    boxShadow: '0px 0.5px 0px rgba(0, 0, 0, 0.3)',
  },
  headerTintColor: '#212121',
  headerTitleStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 22,

    textAlign: 'center',
  },
};
