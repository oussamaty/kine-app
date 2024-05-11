import * as React from 'react';
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import CheckOption from '@screens/onboarding/components/CheckOption';
import { Roboto } from '@theme/font';
import Sedentary from '@assets/icons/person-seat-reclined.svg';
import ModeratelyActive from '@assets/icons/person-swimming.svg';
import VeryActive from '@assets/icons/person-running-fast.svg';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { updateUserState } from '@redux/actions/userActions';
import { UserActivityLevel, UserActivityLevelKey } from '@redux/types/userTypes';

type ActivityLevelProps = {
    check: boolean;
    setCheck: Dispatch<SetStateAction<boolean>>;
    setValid: Dispatch<SetStateAction<boolean>>;
    style?: ViewStyle;
}

const ActivityLevel: React.FC<ActivityLevelProps> = ({ check, setCheck, setValid, style }) => {

  const initalActivityOption = useAppSelector(state => state.user.activity);

  const [currentOption, setCurrentOption] = useState<UserActivityLevelKey | undefined>(initalActivityOption ?? undefined);
  const optionRef = useRef<UserActivityLevelKey | undefined>(currentOption);

  const dispatch = useAppDispatch();

  useEffect(() => {
      if (check) {
        const valid = validInputs();
        if (valid) {
          dispatch(updateUserState("activity", currentOption as UserActivityLevel));
        }
        setValid(valid);
        setCheck(false);
      }
  }, [check])

  const validInputs = () => {
      if (!(optionRef.current && optionRef.current in UserActivityLevel)) return false;
      return true;
  };

  const handleOptionClick = (id: UserActivityLevelKey) => {
    setCurrentOption(id);
    optionRef.current = id;
  }

  const options = {
    SEDENTARY: Sedentary,
    MODERATELY_ACTIVE: ModeratelyActive,
    VERY_ACTIVE: VeryActive
  };

  return (
    <View style={[styles.Content, style]}>
      <Text style={styles.Title}>
        What Is Your Activity Level ?
      </Text>
      <View style={styles.Options}>
        {
          Object.keys(UserActivityLevel).map((key: string) => {
            const activityKey = key as UserActivityLevelKey;

            return (
              <CheckOption
                key={activityKey}
                content={UserActivityLevel[activityKey]}
                icon={options[activityKey]}
                active={currentOption === activityKey}
                onPress={() => handleOptionClick(activityKey)} />
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    paddingTop: 16,
  },

  Title: {
    color: '#000000',
    fontFamily: Roboto.black,
    fontWeight: '800',
    fontSize: 26,
  },

  Options: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: '100%',
      padding: 10,
      paddingTop: 20,
  },

});

export default ActivityLevel;