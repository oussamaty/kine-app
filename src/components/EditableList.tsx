import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LabelInput from '@components/LabelInput';
import Icon from '@components/Icon';
import Minus from '@assets/icons/minus.svg';
import Plus from '@assets/icons/plus.svg';

type EditableListProps = {

};

const EditableList: React.FC<EditableListProps> = ({  }) => {

    return (
        <View style={styles.Container}>
            <View style={styles.Items}>
                <EditableItem key={0} />
                <EditableItem key={1} />
            </View>
            <TouchableOpacity style={styles.AddButton}>
                <Icon Source={Plus} fill='#211951' style={styles.AddIcon} />
            </TouchableOpacity>
        </View>
    )
};

type EditableItemProps = {

};

const EditableItem: React.FC<EditableItemProps> = ({  }) => {

    return (
        <View style={styles.Item}>
            <TouchableOpacity style={styles.ItemButton}>
                <Icon Source={Minus} fill='#fff' style={styles.ItemIcon} />
            </TouchableOpacity>
            <LabelInput label='Serving' style={styles.ItemServing} />
            <LabelInput label='Weight (g)' style={styles.ItemAmount}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Items: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    AddButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#15F5BA',
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    AddIcon: {
        width: 25,
        height: 25,
    },

    Item: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    ItemButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 30,
    },

    ItemIcon: {
        width: 16,
        height: 16,
    },

    ItemServing: {
        flex: 3
    },

    ItemAmount: {
        flex: 2
    }
});

export default EditableList;