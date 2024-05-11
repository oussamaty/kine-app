import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SetupScreenProp } from '@navigation/types';
import { Roboto } from '@theme/font';
import FixedScreen from '@components/FixedScreen';
import ScreenHeader from '@components/ScreenHeader';
import StepBar from '@screens/onboarding/components/StepBar';
import Button from '@components/Button';
import { persistor } from '@redux/store';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { registerUser } from '@redux/actions/authActions';
import UserInfo from '@screens/onboarding/components/UserInfo';
import WeightGoals from '@screens/onboarding/components/WeightGoals';
import UserStats from '@screens/onboarding/components/UserStats';
import ActivityLevel from '@screens/onboarding/components/ActivityLevel';
import UserTarget from '@screens/onboarding/components/UserTarget';
import SomethingWentWrong from '@screens/onboarding/components/SomethingWentWrong';
import CalculationResult from '@screens/onboarding/components/CalculationResult';
import { calculateTDEE } from '@redux/actions/userActions';
import Loading from '@components/Loading';
import { requestStateFlush, startLoading } from '@redux/actions/requestActions';
import Toast from 'react-native-toast-message';

const SetupScreen: React.FC<SetupScreenProp> = ({ navigation }) => {

  const steps = [1, 2, 3, 4, 5, 6]
  const minStep = steps[0];
  const maxStep = steps[steps.length - 1];

  const [step, setStep] = useState<number>(minStep);
  const [check, setCheck] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const isLoading = useAppSelector(state => state.request.loading);
  const requestSuccess = useAppSelector(state => state.request.success);
  const requestError = useAppSelector(state => state.request.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (valid) {
      nextStep();
    }
  }, [valid]);

  useEffect(() => {
    if (requestSuccess && step == maxStep - 1) {
      setStep(step => Math.min(step + 1, maxStep));
    }
    dispatch(requestStateFlush());
  }, [requestSuccess]);

  useEffect(() => {
    if (requestError) {
      Toast.show({
        type: 'error',
        text1: requestError?? 'Something went wrong'
      })
    }
    dispatch(requestStateFlush());
  }, [requestError]);

  const nextStep = () => {
    setValid(false);
    if (step === maxStep - 1) {
      persistor.persist();
      dispatch(startLoading());
      dispatch(calculateTDEE());
    } else {
      setStep(step => Math.min(step + 1, maxStep));
    }
  }

  const handleNextPress = () => {
    if (isLoading) return;
    if (step >= maxStep) {
      dispatch(registerUser());
    } else {
      setCheck(true);
    }
  }

  const handleBackPress = () => {
    if (step <= minStep) {
      navigation.navigate('Welcome');
    } else {
      setStep(step => Math.max(step - 1, minStep));
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <UserInfo check={check} setCheck={setCheck} setValid={setValid} />;
      case 2:
        return <WeightGoals check={check} setCheck={setCheck} setValid={setValid} />;
      case 3:
        return <UserStats check={check} setCheck={setCheck} setValid={setValid} />;
      case 4:
        return <ActivityLevel check={check} setCheck={setCheck} setValid={setValid} />;
      case 5:
        return <UserTarget check={check} setCheck={setCheck} setValid={setValid} />;
      case 6:
        return <CalculationResult />;
      default:
        return <SomethingWentWrong />;
    }
  }

  return (
    <FixedScreen>
      <View style={styles.Layout}>
        <ScreenHeader title={"Setup"} onPress={handleBackPress} />
        <StepBar steps={steps} active={step} />
        {isLoading && <Loading />}
        {!isLoading && renderStep()}
        {!isLoading &&
          <View style={styles.Bottom}>
            <Text style={styles.Disclaimer}>
              We use this information to calculate and provide you with daily personalized recommendations.
            </Text>
            <Button title={step === maxStep ? "Register" : "Next"} style={styles.Button} onPress={handleNextPress} />
          </View>
        }
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