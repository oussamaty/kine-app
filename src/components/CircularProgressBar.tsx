import * as React from 'react';
import { ColorValue, StyleSheet, View, ViewStyle } from 'react-native';
import { Circle, Path, Svg } from 'react-native-svg';


type CircularProgressBarProps = {
    progress: number;
    size: number;
    strokeWidth: number;
    color?: ColorValue;
    backgroundColor?: ColorValue;
    startAngle?: number;
    endAngle?: number;
    insideRing?: {
      gap: number;
      strokeWidth: number;
      color?: ColorValue;
    };
    style?: ViewStyle;
};
  
const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
        progress,
        size,
        strokeWidth,
        color,
        backgroundColor,
        startAngle,
        endAngle,
        insideRing,
        style
    }) => {
        const radius = (size - strokeWidth) / 2;
        const centerX = size / 2;
        const centerY = size / 2;
        const arcStartAngle = startAngle ?? -90;
        const arcEndAngle = endAngle ?? 90;
        const progressAngle = arcStartAngle + (progress / 100) * (arcEndAngle - arcStartAngle);
    
        const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number): string => {
          const start = polarToCartesian(x, y, radius, endAngle);
          const end = polarToCartesian(x, y, radius, startAngle);
          const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
          return [
            "M", start.x, start.y, 
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
          ].join(" ");
        };
      
        const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
          const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
          return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
          };
        };
      
      
        return (
            <View style={[styles.Container, style]}>
                <Svg height={size} width={size}>
                { 
                  insideRing && 
                  <Path
                      d={describeArc(centerX, centerY, radius - (insideRing.strokeWidth + insideRing.gap), arcStartAngle, arcEndAngle)}
                      strokeWidth={insideRing.strokeWidth}
                      stroke={insideRing.color ?? "#eee"}
                      fill="none"
                      strokeLinecap="round"
                  /> 
                }
                <Path
                    d={describeArc(centerX, centerY, radius, arcStartAngle, arcEndAngle)}
                    strokeWidth={strokeWidth}
                    stroke={backgroundColor ?? "#eee"}
                    fill="none"
                    strokeLinecap="round"
                />
                <Path
                    d={describeArc(centerX, centerY, radius, arcStartAngle, progressAngle)}
                    strokeWidth={strokeWidth}
                    stroke={color ?? "#15F5BA"}
                    fill="none"
                    strokeLinecap="round"
                />
                </Svg>
            </View>
        );
};

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CircularProgressBar;