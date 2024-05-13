import * as React from 'react';
import { useState } from 'react';
import { MainActivityScreenProp } from '@navigation/types';
import HelloUser from '@components/HelloUser';
import { useAppSelector } from '@hooks/index';
import Loading from '@components/Loading';
import { StyleSheet, View } from 'react-native';
import StepsCard from '@screens/activity/components/StepsCard';
import HeartCard from '@screens/activity/components/HeartCard';
import ActivityCard from '@screens/activity/components/ActivityCard';
import SleepCard from '@screens/activity/components/SleepCard';
import FixedScreen from '@components/FixedScreen';

const MainActivityScreen: React.FC<MainActivityScreenProp> = ({ navigation }) => {

    const userName = useAppSelector(state => state.user.firstName);

    const [isLoading, setLoading] = useState<boolean>(false);

    return (
        <FixedScreen style={styles.Screen}>
            <HelloUser name={userName ?? 'User'} />
            { isLoading && <Loading /> }
            
            { !isLoading && 
                <View style={styles.Container}>
                    <View style={styles.Column}>
                        <StepsCard style={styles.Short} />
                        <HeartCard style={styles.Long} />
                    </View>
                    <View style={styles.Column}>
                        <ActivityCard style={styles.Long} />
                        <SleepCard style={styles.Short} />
                    </View>
                </View>
            }
        </FixedScreen>
    );
};

const styles = StyleSheet.create({
    Screen: {
        paddingTop: 50,
        gap: 16,
    },

    Container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        width: '100%',
        flex: 1,
    },

    Column: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },

    Short: {
        flex: 2
    },

    Long: {
        flex: 3
    },

});

export default MainActivityScreen;