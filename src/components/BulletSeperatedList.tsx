
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface BulletSeparatedListWidgetProps {
  widgetsList: React.ReactNode[];
  isBullets?: boolean;
}

const BulletSeparatedListWidget: React.FC<BulletSeparatedListWidgetProps> = ({
  widgetsList,
  isBullets = true,
}) => {
  return (
    <View style={styles.container}>
      {widgetsList.map((widget, index) => (
        <View key={index} style={styles.itemContainer}>
          {isBullets && <Text style={styles.bullet}>•</Text>}
          {widget}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  bullet: {
    marginRight: 4,
  },
});

export default BulletSeparatedListWidget;
