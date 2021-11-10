import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import CustomDrawerContent from './CustomDrawerContent';
import { 
    COLORS,
    SIZES
} from '../constants';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
    const [progress, setProgress] = useState(new Animated.Value(0));
    
    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    });
    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 26]
    });
    const animatedStyle = {borderRadius: borderRadius, transform: [{scale: scale}] };

    return (
        <View style={styles.drawerContainer}>
            <Drawer.Navigator
                screenOptions={{
                    headerTitle: '',
                    headerShown: true,
                    headerTransparent: true,
                    drawerType: 'slide',
                    drawerStyle: styles.drawer,
                    overlayColor: 'transparent',
                    sceneContainerStyle: {
                        backgroundColor: 'transparent'
                    },
                    
                }}
                initialRouteName = 'MainLayout'
                drawerContent={props=>{
                    setTimeout(() => {
                        setProgress(props.progress);
                    }, 0);
                    return <CustomDrawerContent 
                        navigation={props.navigation}
                    />
                }}
            >
                <Drawer.Screen name='MainLayout' >
                    {props => <MainLayout {...props} drawerAnimationStyle={animatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    drawer: {
        flex: 1,
        width: '65%',
        backgroundColor: 'transparent',
        paddingRight: 20
    },
    drawerContent: {
        flex: 1,
        paddingHorizontal: SIZES.radius
    },
    closeContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    closeButton: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: SIZES.radius
    },
    drawerItemsContainer: {
        flex: 1,
        marginTop: SIZES.padding,
        width: '100%'
    },
    divider: {
        height: 1,
        marginVertical: SIZES.radius,
        marginLeft: SIZES.radius,
        backgroundColor: COLORS.lightGray1,
    }
});
