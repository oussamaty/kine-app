import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import CardHeader from '@screens/activity/components/CardHeader';
import Heart from '@assets/icons/heart.svg';
import AreaGraph from '@components/AreaChart';
import { Roboto } from '@theme/font';

type HeartCardProps = {
    style?: ViewStyle;
};

const HeartCard: React.FC<HeartCardProps> = ({ style }) => {

    return (
        <View style={[styles.Container, style]}>
            <CardHeader label='Heart Rate' icon={Heart} />
            <View style={styles.Content}>
                <AreaGraph style={styles.Graph} data={[150, 120, 60, 90, 30, 35, 80, 150, 190]} />
                <Text style={styles.Title}>69bps</Text>
            </View>
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

    Content: {
        flex: 1,
    },

    Title: {
        fontFamily: Roboto.black,
        fontSize: 28,
        marginTop: 40,
        color: '#211951',
        fontWeight: '900',
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    
    Graph: {
        width: '100%',
        height: '100%',
        borderRadius: 33,
        overflow: 'hidden',
        position: 'absolute',
    },
});

export default HeartCard;