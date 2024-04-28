import * as React from 'react';
import FixedScreen from '@components/FixedScreen';
import ScreenHeader from '@components/ScreenHeader';
import { MainActivityScreenProp } from '@navigation/types';

const MainActivityScreen: React.FC<MainActivityScreenProp> = ({ navigation }) => {
    return (
        <FixedScreen>
            <ScreenHeader title='Activity'/>
        </FixedScreen>
    )
}

export default MainActivityScreen;