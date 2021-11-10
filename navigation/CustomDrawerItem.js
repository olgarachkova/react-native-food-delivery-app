import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native';
import { 
    COLORS,
    SIZES,
    FONTS
} from '../constants';

const CustomDrawerItem = ({label, icon, isSelected, onPress}) => {
    return(
        <TouchableOpacity 
            style={{
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
                marginBottom: SIZES.base,
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isSelected ? COLORS.transparentBlack1 : 'transparent'
            }}
            onPress={onPress}
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

export default CustomDrawerItem;
