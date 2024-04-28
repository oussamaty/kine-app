import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Roboto } from '@theme/font';

type StepBarProps = {
    steps: Array<number>;
    active: number;
}

type StepNodeProps = {
    number: number;
    active: boolean;
}

type StepLineProps = {

}

const StepNode = ({ number, active }: StepNodeProps) => {
    return (
        <View style={[styles.StepNode, active ? styles.StepNodeActive: styles.StepNodeInActive]}>
            <Text style={styles.StepNodeText}>
                { number }
            </Text>
        </View>
    )
}

const StepLine = ({ }: StepLineProps) => {
    return (
        <View style={styles.StepLine}>
        </View>
    )
}

const StepBar = ({ steps, active }:  StepBarProps) => {

    return (
        <View style={styles.StepBar}>
            {
                steps.map((number, index) => (
                    <React.Fragment key={index}>
                        <StepNode key={index} number={number} active={number === active} />
                        { index !== steps.length - 1 && <StepLine key={-index-1}/>}
                    </React.Fragment>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    StepBar: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        height: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
    }, 

    StepNode: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: 30,
        height: 30,
        borderColor: '#ecedf3',
        borderWidth: 1,
        borderRadius: 30,
        shadowRadius: 5,
    },

    StepNodeActive: {
        backgroundColor: '#f7a072',
    },

    StepNodeInActive: {

    },

    StepNodeText: {
        textAlign: 'center',
        fontFamily: Roboto.black,
        fontWeight: '700',
        fontSize: 16,
    },

    StepLine: {
        flex: 1,
        height: 0,
        borderColor: '#ecedf3',
        borderWidth: 1,

    },

})

export default StepBar;