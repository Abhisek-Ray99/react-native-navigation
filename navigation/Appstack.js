import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../screens/HomeScreen';
import Quotes from '../screens/QuoteScreen';
import User from '../screens/UserScreen';
import Counter from '../components/Counter';
import Facts from '../components/Facts';
import Palettes from '../screens/PaletteScreen';
import ColorPalette from '../screens/ColorPalette';
import Form from '../screens/Form';

const HomeStack = createStackNavigator();
const QuoteStack = createStackNavigator();
const FormStack = createStackNavigator();
const Tab = createBottomTabNavigator ();
const Drawer = createDrawerNavigator();


const HomeTab = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={Home}
            />
            <HomeStack.Screen
                name="counter"
                component={Counter}
            />
            <HomeStack.Screen
                name="Palettes"
                component={Palettes}
            />
            <HomeStack.Screen
                name="ColourPalette"
                component={ColorPalette}
            />
        </HomeStack.Navigator>
    )
}

const QuoteTab = () => {
    return (
        <QuoteStack.Navigator>
            <QuoteStack.Screen name="Quotes" component={Quotes} />
            <QuoteStack.Screen name="Facts" component={Facts} />
        </QuoteStack.Navigator>
    )
}

const UserTab = () => {
    return (
        <FormStack.Navigator>
            <FormStack.Screen name="User" component={User} />
            <QuoteStack.Screen name="Form" component={Form} />
        </FormStack.Navigator>
    )
}


const Notifications = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notifications</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Settings = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const AllDrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName='Home Screen'>
            <Drawer.Screen component={HomeTab} name='Home Screen' />
            <Drawer.Screen component={Notifications} name='Notifications' />
            <Drawer.Screen component={Settings} name='Settings' />
        </Drawer.Navigator>
    )
}



const Appstack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarStyle: {
                    // paddingVertical: 3
                },
                tabBarlabelStyle: {
                    // fontSize: 15
                },
                tabBarItemStyle: {
                    "height": 44,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={AllDrawerNavigation}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Quote"
                component={QuoteTab}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="wechat"
                            color={color}
                            size={size}
                        />
                    ),

                })}
            />
            <Tab.Screen
                name="User"
                component={UserTab}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="user"
                            color={color}
                            size={size}
                        />
                    ),

                })}
            />
        </Tab.Navigator>
    )
}

export default Appstack

const styles = StyleSheet.create({})
