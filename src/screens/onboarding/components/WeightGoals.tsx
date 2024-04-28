import * as React from 'react';
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import CheckOption from '@screens/onboarding/components/CheckOption';
import { Roboto } from '@theme/font';
import ArrowTrendDown from '@assets/icons/arrow-trend-down.svg';
import ArrowTrendUp from '@assets/icons/arrow-trend-up.svg';
import ArrowsToDotedLine from '@assets/icons/arrows-to-dotted-line.svg';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { updateUserState } from '@redux/actions/userActions';
import { UserWeightGoal, UserWeightGoalKey } from '@redux/types/userTypes';

type WeightGoalsProps = {
  check: boolean;
  setCheck: Dispatch<SetStateAction<boolean>>;
  setValid: Dispatch<SetStateAction<boolean>>;
  style?: ViewStyle;
}

const WeightGoals: React.FC<WeightGoalsProps> = ({ check, setCheck, setValid, style }) => {

    const initalWeightOption = useAppSelector(state => state.user.goal);

    const [currentOption, setCurrentOption] = useState<UserWeightGoalKey | undefined>(initalWeightOption ?? undefined);
    const optionRef = useRef<UserWeightGoalKey | undefined>(currentOption);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (check) {
          const valid = validInputs();
          if (valid) {
            dispatch(updateUserState("goal", currentOption as UserWeightGoal));
          }
          setValid(valid);
          setCheck(false);
        }
    }, [check])

    const validInputs = () => {
        if (!(optionRef.current && optionRef.current in UserWeightGoal)) return false;
        return true;
    };


    const handleOptionClick = (id: UserWeightGoalKey) => {
      setCurrentOption(id);
      optionRef.current = id;
    };

    const options = {
      lose_weight: ArrowTrendDown,
      maintain_weight: ArrowsToDotedLine,
      gain_weight: ArrowTrendUp,
    }

    return (
      <View style={[styles.Content, style]}>
        <Text style={styles.Title}>
          What Goal Do You Have In Mind ?
        </Text>
        <View style={styles.Options}>
          {
            Object.keys(UserWeightGoal).map((key: string) => {

              const weightKey = key as UserWeightGoalKey;

              return (
                <CheckOption
                  key={weightKey}
                  content={UserWeightGoal[weightKey]}
                  icon={options[weightKey]}
                  active={currentOption === weightKey}
                  onPress={() => handleOptionClick(weightKey)} />
              )
            })
          }
        </View>
      </View>

    )
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

export default WeightGoals;