import { StyleSheet, ViewStyle } from "react-native";
import { Path } from "react-native-svg";
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';


type AreaGraphProps = {
    data: number[];
    style?: ViewStyle;
};

const AreaGraph: React.FC<AreaGraphProps> = ({ data, style }) => {

    const Line = ({ line }) => (
        <Path
            key={'line'}
            d={line}
            stroke={'#15F5BA'}
            fill={'none'}
        />
    )

    return (
        <AreaChart
            style={[{ height: 200 }, style]}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: '#15F5BA99' }} >
            <Line />
        </AreaChart>
    );
};

const styles = StyleSheet.create({

});

export default AreaGraph;