
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

interface AddressProps {
  address: string;
  onTapAddress?: () => void;
  showCopyIcon?: boolean;
  copyHint?: string;
}

const Address: React.FC<AddressProps> = ({
  address,
  onTapAddress,
  showCopyIcon = true,
  copyHint = 'Copied to clipboard',
}) => {
  const handlePress = () => {
    if (onTapAddress) {
      onTapAddress();
    } else if (showCopyIcon) {
      Clipboard.setString(address);
      // You can show a toast or some other feedback here
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.addressText} numberOfLines={1}>
          {address}
        </Text>
      </TouchableOpacity>
      {showCopyIcon && <Text style={styles.copyIcon}>✂️</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    color: '#000',
  },
  copyIcon: {
    marginLeft: 4,
    fontSize: 14,
    color: '#000',
  },
});

export default Address;
