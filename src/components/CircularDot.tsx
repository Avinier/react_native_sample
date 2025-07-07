
import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface CircularDotProps {
  color: string;
  size: number;
  margin?: ViewStyle['margin'];
}

const CircularDot: React.FC<CircularDotProps> = ({
  color,
  size,
  margin = {marginHorizontal: 4},
}) => {
  const dotStyle = {
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: size / 2,
    margin: margin,
  };

  return <View style={[styles.dot, dotStyle]} />;
};

const styles = StyleSheet.create({
  dot: {
    // You can add any default styles here if needed
  },
});

export default CircularDot;
