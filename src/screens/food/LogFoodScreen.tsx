import * as React from 'react';
import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import ScreenHeader from '@components/ScreenHeader';
import { LogFoodScreenProp } from '@navigation/types';
import Input from '@components/Input';
import SearchIcon from '@assets/icons/magnifying-glass.svg';
import FixedScreen from '@components/FixedScreen';
import TabList from '@screens/food/components/TabList';
import EmptyFoodResults from '@screens/food/components/EmptyFoodResults';

const LogFoodScreen: React.FC<LogFoodScreenProp> = ({ navigation }) => {

    const tabs = [
        {
            id: 'recent',
            label: 'Recent'
        },
        {
            id: 'food',
            label: 'Food'
        },
        {
            id: 'Meal',
            label: 'Meal'
        },
    ];

    const initialTab = 0;
    const active = useRef<string>(tabs[initialTab].id);

    const handleBackPress = () => {
        navigation.goBack();
    }

    const switchTab = (id: string) => {
        active.current = id;
    }

    const renderTab = () => {
        
        return (
            <View>

            </View>
        )
    }

    const createNew = () => {
        navigation.navigate("CreateFood");
    }

    return (
        <FixedScreen style={styles.Container}>
            <ScreenHeader title={'Log Food'} onPress={handleBackPress} />
            <Input placeholder='Search food or brand...' iconLeft={SearchIcon} />
            <TabList tabs={tabs} initialTab={initialTab} onPress={switchTab} />
            <EmptyFoodResults title='Meal' onPress={createNew}/>
        </FixedScreen>
    )
};

const styles = StyleSheet.create({
    Container: {
        gap: 25,
    },
});

export default LogFoodScreen;