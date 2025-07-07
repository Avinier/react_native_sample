import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {NumberUtils} from '../utils/number_utils';

const UtilsTestPage = () => {
  const [outputText, setOutputText] = useState(
    'Click buttons to test utility functions.',
  );
  const [numberInput, setNumberInput] = useState('1234567');
  const [stringInput, setStringInput] = useState('123.4500');

  const testAbbreviateNumber = () => {
    try {
      const number = parseFloat(numberInput) || 0;
      const result = NumberUtils.abbreviateNumber(number);
      const resultWithDigits = NumberUtils.abbreviateNumber(number, {
        significantDigits: 3,
      });
      const resultNotAbbreviated = NumberUtils.abbreviateNumber(number, {
        isAbbreviated: false,
      });

      setOutputText(
        `abbreviateNumber Test Results:\n\n` +
          `Input: ${number}\n` +
          `Default: ${result}\n` +
          `With 3 significant digits: ${resultWithDigits}\n` +
          `Not abbreviated: ${resultNotAbbreviated}\n\n` +
          `Test Cases:\n` +
          `1000 
 ${NumberUtils.abbreviateNumber(1000)}\n` +
          `1500000 
 ${NumberUtils.abbreviateNumber(1500000)}\n` +
          `2500000000 
 ${NumberUtils.abbreviateNumber(2500000000)}\n` +
          `1234567890123 
 ${NumberUtils.abbreviateNumber(1234567890123)}\n` +
          `-500000 
 ${NumberUtils.abbreviateNumber(-500000)}`,
      );
    } catch (e: any) {
      setOutputText(`Error testing abbreviateNumber: ${e.message}`);
    }
  };

  const testTrimDecimal = () => {
    try {
      const result = NumberUtils.trimDecimal(stringInput);

      setOutputText(
        `trimDecimal Test Results:\n\n` +
          `Input: "${stringInput}"\n` +
          `Output: "${result}"\n\n` +
          `Test Cases:\n` +
          `"123.4500" 
 "${NumberUtils.trimDecimal('123.4500')}"\n` +
          `"1000.0000" 
 "${NumberUtils.trimDecimal('1000.0000')}"\n` +
          `"0.5000" 
 "${NumberUtils.trimDecimal('0.5000')}"\n` +
          `"1.0000" 
 "${NumberUtils.trimDecimal('1.0000')}"\n` +
          `"123" 
 "${NumberUtils.trimDecimal('123')}"\n` +
          `"123.0" 
 "${NumberUtils.trimDecimal('123.0')}"`,
      );
    } catch (e: any) {
      setOutputText(`Error testing trimDecimal: ${e.message}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Test Inputs</Text>
        <TextInput
          style={styles.input}
          value={numberInput}
          onChangeText={setNumberInput}
          placeholder="Number Input"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={stringInput}
          onChangeText={setStringInput}
          placeholder="String Input"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Number Utilities</Text>
        <Button title="Test abbreviateNumber" onPress={testAbbreviateNumber} />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>String Utilities</Text>
        <Button title="Test trimDecimal" onPress={testTrimDecimal} />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Test Output</Text>
        <Text>{outputText}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});

export default UtilsTestPage;
