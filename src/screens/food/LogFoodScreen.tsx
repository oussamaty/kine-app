import * as React from 'react';
import { useRef, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import ScreenHeader from '@components/ScreenHeader';
import { LogFoodScreenProp } from '@navigation/types';
import Input from '@components/Input';
import SearchIcon from '@assets/icons/magnifying-glass.svg';
import FixedScreen from '@components/FixedScreen';
import TabList from '@screens/food/components/TabList';
import EmptyFoodResults from '@screens/food/components/EmptyFoodResults';
import { getOrCreateFood, searchFood, searchFoodLocal } from '@services/food';
import Food from '@models/Food';
import Toast from 'react-native-toast-message';
import Loading from '@components/Loading';
import FoodListItem from '@screens/food/components/FoodListItem';
import { SearchFoodResult } from '@services/food/types';

const LogFoodScreen: React.FC<LogFoodScreenProp> = ({ route, navigation }) => {

    const mealId = route.params.mealId;

    const tabs = [
        {
            id: 'local',
            label: 'Local'
        },
        {
            id: 'food',
            label: 'Food'
        },
    ];

    const initialTab = 0;

    const textRef = useRef<string>("");
    const [foodList, setFoodList] = useState<SearchFoodResult[]>([]);
    const [localFoodList, setLocalFoodList] = useState<Food[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [active, setActive] = useState<string>(tabs[initialTab].id);


    const handleBackPress = () => {
        navigation.goBack();
    };

    const switchTab = (id: string) => {
        setActive(id);
    };

    const createNew = () => {
        navigation.navigate("CreateFood", {
            mealId: mealId
        });
    };

    const handleSearchPress = () => {
        setLoading(true);
        searchFood(textRef.current).then(data => {
            setFoodList(data);
            setLoading(false);
        }).catch(e => {
            Toast.show({
                type: 'error',
                text1: 'Error Searching for Food'
            });
            console.log('Error:', e.message);
            setLoading(false);
        });
        searchFoodLocal(textRef.current).then(data => {
            setLocalFoodList(data);
            setLoading(false);
        }).catch(e => {
            Toast.show({
                type: 'error',
                text1: 'Error Searching for Local Food'
            });
            console.log('Error:', e.message);
            setLoading(false);
        });
    };

    const handleFoodItemPress = (selected: Food) => {
        navigation.navigate('DetailsFood',  {
            foodId: selected.id,
            mealId: mealId
        });
    };

    const handleFoodSearchItemPress = (selected: SearchFoodResult) => {
        getOrCreateFood(selected)
            .then(food => {
                navigation.navigate('DetailsFood',  {
                    foodId: food.id,
                    mealId: mealId
                });
            })
            .catch(e => {
                Toast.show({
                    type: 'error',
                    text1: 'Error Loading Item'
                });
                console.log('Error:', e.message);
            })
    };

    const renderFoodItem: ListRenderItem<Food> = ({ item }) => {
        return (
            <FoodListItem item={item} onItemPress={handleFoodItemPress} />
        )
    };

    const renderFoodSearchItem: ListRenderItem<SearchFoodResult> = ({ item }) => {
        return (
            <FoodListItem item={item} onItemPress={handleFoodSearchItemPress} />
        )
    };

    const renderList = () => {
        switch (active) {
            case 'food':
                return  foodList.length === 0 ? 
                    <EmptyFoodResults title='Food' onPress={createNew}/> : 
                    <FlatList
                        data={foodList}
                        renderItem={renderFoodSearchItem}
                        keyExtractor={item => "" + item.id}
                        showsHorizontalScrollIndicator={false}
                        onEndReached={() => {}}
                        onEndReachedThreshold={0.5}
                        initialNumToRender={10}
                        windowSize={5}
                        style={styles.List}/>;
            case 'local':
                return localFoodList.length === 0 ? 
                    <EmptyFoodResults title='Food' onPress={createNew}/> : 
                    <FlatList
                        data={localFoodList}
                        renderItem={renderFoodItem}
                        keyExtractor={item => "" + item.id}
                        showsHorizontalScrollIndicator={false}
                        onEndReached={() => {}}
                        onEndReachedThreshold={0.5}
                        initialNumToRender={10}
                        windowSize={5}
                        style={styles.List}/>;
        }
        
    }

    return (
        <FixedScreen style={styles.Container}>
            <ScreenHeader title={'Log Food'} onPress={handleBackPress} />
            <Input placeholder='Search food or brand...'  valueRef={textRef} iconRight={SearchIcon} onIconRightPress={handleSearchPress} />
            <TabList tabs={tabs} initialTab={initialTab} onPress={switchTab} />
            { isLoading && <Loading /> }
            { !isLoading && renderList() }
        </FixedScreen>
    )
};

const styles = StyleSheet.create({
    Container: {
        gap: 25,
        alignItems: 'center',
    },

    List: {
        width: '100%',
        padding: 0,
    },
});

export default LogFoodScreen;