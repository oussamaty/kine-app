import * as React from 'react';
import { memo, useState, useEffect, useRef, useCallback } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { weekDay } from '@utils/index';
import { Roboto } from '@theme/font';

type WeekDatesProps = {

};

const WeekDates: React.FC<WeekDatesProps> = ({  }) => {

    const windowWidth = Dimensions.get('window').width;
    const currentDate = new Date();
    const loadingRef = useRef(false);
    const [active, setActive] = useState<string>(currentDate.toDateString());
    const [dates, setDates] = useState<Array<{ key: string, day: number, date: number, fullDate: string, status: number }>>([]);

    useEffect(() => {
        loadInitialData();
    }, []);
    
    const loadInitialData = () => {
        loadingRef.current = true;
        const maxDate = new Date();
        maxDate.setDate(currentDate.getDate() + 3)
        const initialDates = generateDates(maxDate, 14);
        setDates(initialDates);
        loadingRef.current = false;
    };

    const loadMoreDates = () => {
        if (loadingRef.current) return;
        loadingRef.current = true;
        const lastDate = new Date(dates[dates.length - 1].key);
        lastDate.setDate(lastDate.getDate() - 1);
        const moreDates = generateDates(lastDate, 14);
        setDates(dates.concat(moreDates));
        loadingRef.current = false;
    };

    const generateDates = (startDate: Date, numDays: number) => {
        const dates = [];
        const date = new Date(startDate);
        for (let i = 0; i < numDays; i++) {
            dates.push({
                key: date.toISOString(),
                fullDate: date.toDateString(),
                day: date.getDay(),
                date: date.getDate(),
                status: Math.floor(Math.random() * 3) - 1
            });
          
            date.setDate(date.getDate() - 1);
        }
        return dates;
    };

    const handleItemPress = (id: string) => {
        setActive((new Date(id)).toDateString());
    }

    const renderItem = useCallback(({ item }: { item: { key: string, day: number, date: number, fullDate: string, status: number }}) => {
        return (
            <ListItem id={item.key} width={windowWidth} active={active === item.fullDate} day={item.day} date={item.date} status={item.status} onPress={handleItemPress} />
        )
    }, [active]);

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
            style={styles.List}
            />
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

const ListItem = memo(
  ({ id, width, active, day, date, status, onPress }: ListItemProps) => (
    <TouchableOpacity style={[styles.Item, active ? styles.ActiveItem: styles.InactiveItem, { width: width / 8 }]} onPress={() => onPress(id)}>
        <Text style={[styles.ItemDay, active ? styles.ActiveItemText: styles.InactiveItemText]}>{ `${weekDay(day)}` }</Text>
        <Text style={[styles.ItemDate, active ? styles.ActiveItemText: styles.InactiveItemText]}>{ `${date}` }</Text>
        <View style={[styles.ItemStatus, { backgroundColor: status === 1? "green": status === 0? "yellow": "red" }]}></View>
    </TouchableOpacity>
  ),
  (prevProps, nextProps) => {
    return prevProps.active === nextProps.active;
  },
);

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