import * as React from 'react';
import FixedScreen from '@components/FixedScreen';
import ScreenHeader from '@components/ScreenHeader';
import { MainMealScreenProp } from '@navigation/types';

const MainMealScreen: React.FC<MainMealScreenProp> = ({ navigation }) => {
    return (
        <FixedScreen>
            <ScreenHeader title='Meal'/>
        </FixedScreen>
    )
}

export default MainMealScreen;