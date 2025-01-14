import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => setInput(input + value);

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const clearInput = () => setInput('');

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{input || '0'}</Text>

      <View style={styles.row}>
        {['7', '8', '9', '/'].map((val) => (
          <TouchableOpacity key={val} onPress={() => handlePress(val)} style={styles.button}>
            <Text style={styles.buttonText}>{val}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.row}>
        {['4', '5', '6', '*'].map((val) => (
          <TouchableOpacity key={val} onPress={() => handlePress(val)} style={styles.button}>
            <Text style={styles.buttonText}>{val}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.row}>
        {['1', '2', '3', '-'].map((val) => (
          <TouchableOpacity key={val} onPress={() => handlePress(val)} style={styles.button}>
            <Text style={styles.buttonText}>{val}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={clearInput} style={styles.button}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('0')} style={styles.button}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={calculateResult} style={[styles.button, styles.equalButton]}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('+')} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Calc by Vasudha</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-end', padding: 20 },
  result: { fontSize: 40, textAlign: 'right', marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    width: '22%',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: { fontSize: 25 },
  equalButton: { backgroundColor: 'green' },
  footer: { textAlign: 'center', marginTop: 20, fontSize: 16 },
});

export default App;
