import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import CardHeader from '@screens/activity/components/CardHeader';
import Moon from '@assets/icons/moon.svg';
import ProgressBar from '@components/ProgressBar';
import { Roboto } from '@theme/font';

type SleepCardProps = {
    short?: boolean;
    style?: ViewStyle;
};

const SleepCard: React.FC<SleepCardProps> = ({ short, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <CardHeader label='Sleep' icon={Moon} />
            <Text style={styles.Hours}>8h 13m</Text>
            { !short && 
                <View style={styles.Bars}>
                    <ProgressBar progress={75} horizental={true} style={styles.Bar} />
                    <ProgressBar progress={90} horizental={true} style={styles.Bar} />
                    <ProgressBar progress={80} horizental={true} style={styles.Bar} />
                    <ProgressBar progress={99} horizental={true} style={styles.Bar} />
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 33,
        borderWidth: 1,
        borderColor: '#211951',
        width: '100%',
    },
    
    Hours: {
        fontFamily: Roboto.black,
        fontSize: 24,
        color: '#211951',
        fontWeight: '900',
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    Bars: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        flex: 1,
        padding: 20,
    },

    Bar: {
        height: '100%',
        width: 0,
        flex: 1,
    },

});

export default SleepCard;