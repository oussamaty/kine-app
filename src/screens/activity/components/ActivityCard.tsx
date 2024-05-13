import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import CardHeader from '@screens/activity/components/CardHeader';
import Bolt from '@assets/icons/bolt.svg';
import { Roboto } from '@theme/font';
import AreaGraph from '@components/AreaChart';

type ActivityCardProps = {
    style?: ViewStyle;
};

const ActivityCard: React.FC<ActivityCardProps> = ({ style }) => {

    return (
        <View style={[styles.Container, style]}>
            <CardHeader label='Activity' icon={Bolt} />
            <View style={styles.Content}>
                <AreaGraph style={styles.Graph} data={[40, 70, 120, 90, 80, 50, 20, 100, 60]} />
                <Text style={styles.Title}>5h 36m</Text>
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

export default ActivityCard;