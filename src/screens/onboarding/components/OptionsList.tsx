import * as React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import CheckOption from '@screens/onboarding/components/CheckOption';
import { UserActionTypes } from 'src/redux/types/userTypes';
import { useAppDispatch } from 'src/hooks';

type OptionsListProps = {
    options: Array<{
        id: string,
        content: string,
        icon: React.FC<SvgProps>,
    }>;
    action: (id: string) => UserActionTypes;
    style?: ViewStyle;
}

const OptionsList: React.FC<OptionsListProps> = ({ options, action, style }) => {

    const [currentOption, setCurrentOption] = React.useState<string>();

    const dispatch = useAppDispatch();

    const handleOptionClick = (id: string) => {
        setCurrentOption(id);
        dispatch(action(id));
    }

    return (
        <View style={[styles.Options, style]}>
          {
            options.map(({ id, content, icon }) => (
              <CheckOption
                id={id}
                key={id}
                content={content}
                icon={icon}
                active={currentOption === id}
                onPress={() => handleOptionClick(id)} />
            ))
          }
        </View>
    )
}

const styles = StyleSheet.create({
    Options: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: '100%',
        padding: 10,
      },
})

export default OptionsList;