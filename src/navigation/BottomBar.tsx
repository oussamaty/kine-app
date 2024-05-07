import * as React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { SvgProps } from 'react-native-svg';
import HomeIcon from '@assets/icons/house.svg';
import FoodIcon from '@assets/icons/utensils.svg';
import ActivityIcon from '@assets/icons/dumbbell.svg';
import MealIcon from '@assets/icons/bowl-food.svg';
import ProfileIcon from '@assets/icons/user.svg';
import { Roboto } from '@theme/font';

type BottomBarItemProps = {
    name: string;
    active: boolean;
    label: string;
    Icon: React.FC<SvgProps>;
    onPress: (id: string, event: GestureResponderEvent) => void;
    style?: ViewStyle;
};


const BottomBarItem: React.FC<BottomBarItemProps> = ({ name, active, label, Icon, onPress, style }) => {

    return (
        <TouchableOpacity style={[styles.Item, active ? styles.ItemActive : styles.ItemInactive, style]} onPress={(event: GestureResponderEvent) => onPress(name, event)}>
            <Icon style={styles.Icon} fill={active ? "#F7A072" : "#fff"} />
            <Text style={[styles.Label, active ? styles.LabelActive : styles.LabelInactive]}> {label} </Text>
        </TouchableOpacity>
    )
};

const BottomBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {

    const items = [
        {
            name: "Home",
            label: "Home",
            icon: HomeIcon,
        },
        {
            name: "Food",
            label: "Food",
            icon: FoodIcon,
        },
        {
            name: "Activity",
            label: "Activity",
            icon: ActivityIcon,
        },
        {
            name: "Meal",
            label: "Meal",
            icon: MealIcon,
        },
        {
            name: "Profile",
            label: "Profile",
            icon: ProfileIcon,
        },

    ]

    const handleItemPress = (name: string, event: GestureResponderEvent) => {
        navigation.navigate(name);
    }

    return (
        <View style={styles.Container}>
            {
                items.map(({ name, label, icon }, index) => <BottomBarItem key={index} name={name} active={index === state.index} label={label} Icon={icon} onPress={handleItemPress} />)
            }
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#000',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 0,
        paddingVertical: 14,
    },

    Item: {
        height: 70,
        width: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    ItemActive: {

    },

    ItemInactive: {

    },

    Icon: {
        width: 30,
        height: 30,
    },

    Label: {
        fontFamily: Roboto.black,
        fontSize: 12,
        fontWeight: '300',
        color: "#fff",
    },

    LabelActive: {
        color: "#F7A072",
    },

    LabelInactive: {

    },

});

export default BottomBar;