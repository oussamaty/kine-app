import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import NutrientProgress from '@screens/food/components/NutrientProgress';
import CaloriesBar from '@screens/food/components/CaloriesBar';
import { Roboto } from '@theme/font';

type CaloriesCardProps = {
    style?: ViewStyle;
};

const CaloriesCard: React.FC<CaloriesCardProps> = ({ style }) => {

    return (
        <View style={[styles.Container, style]}>
            <View style={styles.Calories}>
                <View style={styles.SideText}>
                    <Text style={styles.SideLabel}>🍎 Left</Text>
                    <Text style={styles.SideAmount}>328 Kcal</Text>
                </View>
                <CaloriesBar calories={2750} progress={86} />
                <View style={styles.SideText}>
                    <Text style={styles.SideLabel}>🔥 Burned</Text>
                    <Text style={styles.SideAmount}>572 Kcal</Text>
                </View>
            </View>
            <View style={styles.Nutrients}>
                <NutrientProgress 
                    label='Protein'
                    progress={75}
                    amount={75}
                    unit='mg' />
                <NutrientProgress 
                    label='Carbs'
                    progress={60}
                    amount={94}
                    unit='mg' />
                <NutrientProgress 
                    label='Fat'
                    progress={80}
                    amount={103}
                    unit='mg' />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderWidth: 1,
        borderColor: '#211951',
        borderRadius: 10,
        padding: 20,
    },

    Calories: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 20,
    },

    Nutrients: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 20,
    },

    SideText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    SideLabel: {
        color: '#211951',
        fontFamily: Roboto.black,
        fontWeight: '600',
        fontSize: 16,
    },

    SideAmount: {
        color: '#211951',
        fontFamily: Roboto.black,
        fontWeight: '800',
        fontSize: 16,
    },

});

export default CaloriesCard;