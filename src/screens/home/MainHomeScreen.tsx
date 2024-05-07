import * as React from 'react';
import FixedScreen from '@components/FixedScreen';
import ScreenHeader from '@components/ScreenHeader';
import { MainHomecreenProp } from '@navigation/types';

const MainHomeScreen: React.FC<MainHomecreenProp> = ({ navigation }) => {
    return (
        <FixedScreen>
            <ScreenHeader title='Home' />
        </FixedScreen>
    )
}

export default MainHomeScreen;