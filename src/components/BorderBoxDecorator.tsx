
import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface BorderBoxDecoratorProps {
  children: React.ReactNode;
  verticalPadding?: number;
  horizontalPadding?: number;
  borderRadius?: number;
  bgColor?: string;
  borderColor?: string;
  borderWidth?: number;
  style?: ViewStyle;
}

const BorderBoxDecorator: React.FC<BorderBoxDecoratorProps> = ({
  children,
  verticalPadding = 4,
  horizontalPadding = 6,
  borderRadius = 6,
  bgColor = '#FFF',
  borderColor = '#000',
  borderWidth = 1,
  style,
}) => {
  const containerStyle = {
    paddingVertical: verticalPadding,
    paddingHorizontal: horizontalPadding,
    backgroundColor: bgColor,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
  };

  return <View style={[styles.container, containerStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    // You can add any default styles here if needed
  },
});

export default BorderBoxDecorator;
