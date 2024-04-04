import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SetupScreenProp } from '@navigation/types';
import { Roboto } from '@theme/font';
import FixedScreen from '@components/FixedScreen';
import ScreenHeader from '@components/ScreenHeader';
import StepBar from '@screens/onboarding/components/StepBar';
import ArrowTrendDown from '@assets/icons/arrow-trend-down.svg';
import ArrowTrendUp from '@assets/icons/arrow-trend-up.svg';
import ArrowsToDotedLine from '@assets/icons/arrows-to-dotted-line.svg';
import Button from '@components/Button';
import OptionsList from '@screens/onboarding/components/OptionsList';
import { updateWeightGoal } from '@redux/actions/userActions';
import { useAppDispatch } from '@hooks';
import { registerUser } from '@redux/actions/authActions';
import Ghost from '@assets/icons/ghost.svg';
import Icon from '@components/Icon';

const SetupScreen = ({ navigation }:  SetupScreenProp) => {

  const steps = [1, 2, 3, 4, 5]
  const minStep = steps[0];
  const maxStep = steps[steps.length - 1];

  const [step, setStep] = useState<number>(minStep);

  const dispatch = useAppDispatch();

  const options = [
    {
      id: 'lose_weight',
      content: 'Lose Weight',
      icon: ArrowTrendDown,
    },
    {
      id: 'maintain_weight',
      content: 'Maintain Weight',
      icon: ArrowsToDotedLine,
    },
    {
      id: 'gain_weight',
      content: 'Gain Weight',
      icon: ArrowTrendUp,
    },
  ];

  const handleNext = () => {
    if (step === maxStep) {
      dispatch(registerUser());
    } else {
      setStep(step => Math.min(step + 1, maxStep));
    }
  }

  const handleBackPress = () => {
    if (step === minStep) {
      navigation.navigate('Welcome');
    } else {
      setStep(step => Math.max(step - 1, minStep));
    }
  }

  const UserInfo = () => (
    <View style={styles.Content}>
      <Text style={styles.Title}>
        Tell Us About Yourself ?
      </Text>
      <OptionsList options={options} action={updateWeightGoal} style={styles.Options} />
    </View>
  )

  const UserStats = () => (
    <View style={styles.Content}>
      <Text style={styles.Title}>
        What About The Current You ?
      </Text>
      <OptionsList options={options} action={updateWeightGoal} style={styles.Options} />
    </View>
  )

  const WeightGoals = () => (
    <View style={styles.Content}>
      <Text style={styles.Title}>
        What Goal Do You Have In Mind ?
      </Text>
      <OptionsList options={options} action={updateWeightGoal} style={styles.Options} />
    </View>
  )

  const ActivityLevel = () => (
    <View style={styles.Content}>
      <Text style={styles.Title}>
        What Is Your Activity Level ?
      </Text>
      <OptionsList options={options} action={updateWeightGoal} style={styles.Options} />
    </View>
  )

  const UserTarget = () => (
    <View style={styles.Content}>
      <Text style={styles.Title}>
        What Is Your Target Weight ?
      </Text>
      <OptionsList options={options} action={updateWeightGoal} style={styles.Options} />
    </View>
  )

  const SomethingWentWrong = () => (
    <View style={styles.Content}>
      <Icon Source={Ghost} style={styles.Ghost}/>
      <Text style={styles.Title}>
        Something Went wrong
      </Text>
    </View>
  )

  const renderStep = () => {
    switch (step) {
      case 1:
        return <WeightGoals />;
      case 2:
        return <WeightGoals />;
      case 3:
        return <WeightGoals />;
      case 4:
        return <WeightGoals />;
      case 5:
        return <WeightGoals />;
      default:
        return <SomethingWentWrong />;
    }
  }

  return (
    <FixedScreen>
      <View style={styles.Layout}>
        <ScreenHeader title={"Setup"} onPress={handleBackPress}/>
        <StepBar steps={steps} active={step} />
        { renderStep() }
        <View style={styles.Bottom}>
          <Text style={styles.Disclaimer}>
            We use this information to calculate and provide you with daily personalized recommendations.
          </Text>
          <Button title={step === maxStep ? "Register": "Next"} style={styles.Button} onPress={handleNext}/>
        </View>
      </View>
    </FixedScreen>
  )
}

const styles = StyleSheet.create({
  Layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    padding: 0,
    gap: 30,
  },

  Title: {
    color: '#000000',
    fontFamily: Roboto.black,
    fontWeight: '800',
    fontSize: 26,
  },

  Content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    paddingTop: 16,
  },

  Ghost: {
    width: 100,
    height: 100,
    color: '#000000',
    marginVertical: 50,
  },

  Options: {

  },

  Bottom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    padding: 5,
    paddingTop: 30,
  },

  Disclaimer: {
    textAlign: 'center',
    fontFamily: Roboto.regular,
    fontSize: 14,
  },

  Button: {
    height: 50,
  }
})

export default SetupScreen;