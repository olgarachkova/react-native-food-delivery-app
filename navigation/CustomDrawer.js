import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import { 
    constants,
    theme,
    COLORS,
    SIZES,
    FONTS,
    images,
    icons,
    dummyData
} from '../constants';
import Animated from 'react-native-reanimated';

const CustomDrawerItem = ({label, icon}) => {
    return(
        <TouchableOpacity 
            style={{
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
                marginBottom: SIZES.base,
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                //backgroundColor
            }}
            onPress={()=>({})}
        >
            <Image 
                source={icon}
                style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.white
                }}
            />
            <Text
                style={{
                    marginLeft: 15,
                    color: COLORS.white,
                    ...FONTS.h3
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}


const CustomDrawerContent = ({navigation}) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{flex: 1}}
        >
            <View style={styles.drawerContent}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={()=>navigation.closeDrawer()} 
                    >
                        <Image
                            source={icons.cross}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor: COLORS.white
                            }}  
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                        style={styles.profile}
                        onPress={()=>console.log('profile tap')}
                >
                    <Image
                        source={dummyData.myProfile.profile_image}
                        style={styles.profilePic}  
                    />
                    <View 
                        style={{marginLeft: SIZES.radius}}
                    >
                        <Text
                            style={{color: COLORS.white, ...FONTS.h3}}
                        >
                            {dummyData.myProfile.name}
                        </Text>
                        <Text
                            style={{color: COLORS.white, ...FONTS.body4}}
                        >
                            View your profile
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.drawerItemsContainer}>
                        <CustomDrawerItem
                            label={constants.screens.home}
                            icon={icons.home}
                        />
                        <CustomDrawerItem
                            label={constants.screens.my_wallet}
                            icon={icons.wallet}
                        />
                        <CustomDrawerItem
                            label={constants.screens.notification}
                            icon={icons.notification}
                        />
                        <CustomDrawerItem
                            label={constants.screens.favorite}
                            icon={icons.favorite}
                        />

                        <View style={styles.divider}></View>

                        <CustomDrawerItem
                            label='Track your order'
                            icon={icons.location}
                        />
                        <CustomDrawerItem
                            label='Coupons'
                            icon={icons.coupon}
                        />
                        <CustomDrawerItem
                            label='Settings'
                            icon={icons.setting}
                        />
                        <CustomDrawerItem
                            label='Invite friend'
                            icon={icons.profile}
                        />
                        <CustomDrawerItem
                            label='Help'
                            icon={icons.help}
                        />
                        <CustomDrawerItem
                            label='Logout'
                            icon={icons.logout}
                        />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

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
