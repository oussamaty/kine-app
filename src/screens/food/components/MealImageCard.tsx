import * as React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Roboto } from '@theme/font';

type MealImageCardProps = {
    image: ImageSourcePropType;
    meal: string;
    date: string;
    style?: ViewStyle;
}

const MealImageCard: React.FC<MealImageCardProps> = ({ image, meal, date, style }) => {
    return (
        <ImageBackground source={image} style={[styles.Container, style]} resizeMode='contain'>
            <View style={styles.Content}>
                <Text style={styles.Meal}>{meal}</Text>
                <Text style={styles.Date}>{date}</Text>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 240,
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },

    Content: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        gap: 10,
    },

    Meal: {
        fontFamily: Roboto.black,
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
        lineHeight: 24,
    },

    Date: {
        fontFamily: Roboto.black,
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        lineHeight: 16,
    },
});

export default MealImageCard;