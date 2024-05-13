import * as React from 'react';
import { memo, useState, useEffect, useRef, useCallback } from 'react';
import { Dimensions, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formatDay, weekDay } from '@utils/index';
import { Roboto } from '@theme/font';
import { getDayRange } from 'src/services/food';

type WeekDatesProps = {
    currentDay: Date;
    setCurrentDay: React.Dispatch<React.SetStateAction<Date>>;
};

const WeekDates: React.FC<WeekDatesProps> = ({ currentDay, setCurrentDay }) => {

    const windowWidth = Dimensions.get('window').width;
    const loadingRef = useRef(false);
    const [dates, setDates] = useState<Array<{ key: string, day: number, date: number, fullDate: string, status: number }>>([]);

    useEffect(() => {
        loadInitialData();
    }, []);
    
    const loadInitialData = () => {
        loadingRef.current = true;
        setDates([]);
        const maxDate = new Date();
        maxDate.setDate(currentDay.getDate() + 3)
        generateDates(maxDate, 14);
    };

    const loadMoreDates = () => {
        if (loadingRef.current) return;
        loadingRef.current = true;
        const lastDate = new Date(dates[dates.length - 1].key);
        lastDate.setDate(lastDate.getDate() - 1);
        generateDates(lastDate, 14);
    };

    const generateStaleDates = (startDate: Date, numDays: number) => {
        const dates = [];
        const date = new Date(startDate);
        for (let i = 0; i < numDays; i++) {
            dates.push({
                key: date.toISOString(),
                fullDate: date.toDateString(),
                day: date.getDay(),
                date: date.getDate(),
                status: 0,
            });
          
            date.setDate(date.getDate() - 1);
        }
        return dates;
    }

    const generateDates = async (startDate: Date, numDays: number) => {
        const staleDates = generateStaleDates(startDate, numDays);
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() - numDays);
        getDayRange(endDate, startDate)
            .then(dayRange => {
                const activeDates = staleDates.map((d, index) => {
                    const idx = dayRange.findIndex(r => formatDay(new Date(d.key)) === r.date);
                    if (idx > -1) {
                        const ratio = dayRange[idx].totalCalories / dayRange[idx].targetCalories;
                        return {
                            ...d,
                            status: ratio >= 1 ? 2: ratio !== 0? 1: 0,
                        }
                    }
                    return d;
                });
                setDates(dates.concat(activeDates));
                loadingRef.current = false;
            }).catch(e => {
                loadingRef.current = false;
                console.log('Error:', e.message);
            })
        
    };

    const handleItemPress = (id: string) => {
        setCurrentDay(new Date(id));
    }

    const renderItem: ListRenderItem< { key: string, day: number, date: number, fullDate: string, status: number }> = ({ item }) => {
        return (
            <ListItem id={item.key} width={windowWidth} active={currentDay.toDateString() === item.fullDate} day={item.day} date={item.date} status={item.status} onPress={handleItemPress} />
        );
    }

    return (
        <FlatList
            data={dates}
            renderItem={renderItem}
            horizontal={true}
            inverted={true}
            keyExtractor={item => item.key.toString()}
            showsHorizontalScrollIndicator={false}
            onEndReached={loadMoreDates}
            onEndReachedThreshold={0.5}
            initialNumToRender={7}
            windowSize={5}
            style={styles.List} />
    )
};

type ListItemProps = {
    id: string,
    width: number,
    active: boolean,
    day: number,
    date: number,
    status: number,
    onPress: (key: string) => void
};

const ListItem = ({ id, width, active, day, date, status, onPress }: ListItemProps) => {
    return (
        <TouchableOpacity style={[styles.Item, active ? styles.ActiveItem: styles.InactiveItem, { width: width / 8 }]} onPress={() => onPress(id)}>
            <Text style={[styles.ItemDay, active ? styles.ActiveItemText: styles.InactiveItemText]}>{ `${weekDay(day)}` }</Text>
            <Text style={[styles.ItemDate, active ? styles.ActiveItemText: styles.InactiveItemText]}>{ `${date}` }</Text>
            <View style={[styles.ItemStatus, { backgroundColor: status === 1? "yellow": status === 0? "gray": "green" }]}></View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    List: {
        width: '100%',
        padding: 0,
    },

    Item: {
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#fff'
    },

    ActiveItem: {
        backgroundColor: '#211951',
        borderRadius: 10,
    },

    InactiveItem: {

    },

    ItemDay: {
        fontFamily: Roboto.black,
        fontWeight: '600',
        color: '#211951',
        fontSize: 16,
        lineHeight: 16,
    },

    ItemDate: {
        fontFamily: Roboto.black,
        fontWeight: '900',
        color: '#211951',
        fontSize: 24,
        lineHeight: 24,
    },

    ItemStatus: {
        width: 10,
        height: 10,
        borderRadius: 10,
    },

    ActiveItemText: {
        color: '#fff',
    },

    InactiveItemText: {

    },

});

export default WeekDates;