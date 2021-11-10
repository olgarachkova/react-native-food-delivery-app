import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import CustomDrawerItem from './CustomDrawerItem';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { 
    constants,
    COLORS,
    SIZES,
    FONTS,
    icons,
    dummyData
} from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTab } from '../store/actions/tabActions';

const CustomDrawerContent = ({navigation}) => {
    const dispatch = useDispatch();
    const selectedTab = useSelector(state => state.tab.selectedTab);

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
                            onPress={()=>{
                                dispatch(setSelectedTab(constants.screens.home));
                                navigation.navigate('MainLayout');
                            }}
                            isSelected={selectedTab===constants.screens.home}
                        />
                        <CustomDrawerItem
                            label={constants.screens.my_wallet}
                            icon={icons.wallet}
                            onPress={()=>dispatch(setSelectedTab(constants.screens.my_wallet))}
                            isSelected={selectedTab===constants.screens.my_wallet}
                        />
                        <CustomDrawerItem
                            label={constants.screens.notification}
                            icon={icons.notification}
                            onPress={()=>dispatch(setSelectedTab(constants.screens.notification))}
                            isSelected={selectedTab===constants.screens.notification}
                        />
                        <CustomDrawerItem
                            label={constants.screens.favorite}
                            icon={icons.favorite}
                            onPress={()=>dispatch(setSelectedTab(constants.screens.favorite))}
                            isSelected={selectedTab===constants.screens.favorite}
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

export default CustomDrawerContent

const styles = StyleSheet.create({
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

