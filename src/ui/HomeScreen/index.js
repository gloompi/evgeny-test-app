import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Input, Button } from 'react-native-ui-kitten';
import { useStore } from '../../stores/RootStore';

const HomeScreen = ({ navigation }) => {
  const defaultLabel = 'Enter a number';
  const { events } = useStore();
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('primary');
  const [label, setLabel] = useState(defaultLabel);

  const handleChange = value => {
    if (isNaN(value) || value > 100 || value < 0) {
      setLabel('Input value should be number, between 0 and 100');
      setStatus('warning')
      return null;
    }

    if (status === 'warning') {
      setStatus('primary');
      setLabel(defaultLabel);
    }

    setInput(value);
  }

  const handleNumbersBtnClick = () => {
    if (!input.length) {
      setLabel('Input can not be blank');
      setStatus('warning')
      return null;
    }

    if (status === 'warning') {
      setStatus('primary');
      setLabel(defaultLabel);
    }

    events.setEvents(input);
    navigation.navigate('Events');
  };

  return (
    <Layout style={styles.container}>
      <Input
        type="input"
        style={styles.input}
        status={status}
        label={label}
        value={input}
        onChangeText={handleChange}
        placeholder='(from 1-1000)'
      />

      <Button
        style={styles.button}
        onPress={handleNumbersBtnClick}
      >
        Numbers Only
      </Button>

      <Button style={styles.button}>
        Add names
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  input: {
    marginBottom: 30,
  },
  button: {
    width: '100%',
    marginBottom: 30,
  },
});

export default HomeScreen;
