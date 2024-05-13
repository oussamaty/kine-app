import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import CardHeader from '@screens/activity/components/CardHeader';
import ShoePrints from '@assets/icons/shoe-prints.svg';
import StepsProgress from '@screens/activity/components/StepsProgress';
import { Roboto } from '@theme/font';

type StepsCardProps = {
    short?: boolean;
    style?: ViewStyle;
};

const StepsCard: React.FC<StepsCardProps> = ({ short, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <CardHeader label='Steps' icon={ShoePrints} />
            { !short &&  <StepsProgress steps={7500} progress={75} /> }
            { short &&  <Text style={styles.Steps}>7500</Text> }
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

    Steps: {
        color: "#211951",
        fontFamily: Roboto.black,
        fontSize: 26,
        fontWeight: '900',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        marginTop: 10,
    },

});

export default StepsCard;