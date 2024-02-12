import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {increment} from '../redux/counter/slice';
import {useAppDispatch, useAppSelector} from '../redux/store.ts';
import {selectCounter} from '../redux/counter/selector.ts';

function CounterScreen() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCounter);
  const onIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ECare App</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={onIncrement}>
          <Text style={styles.text}>Increment</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{counter}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Go to details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 24,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'blue',
  },
  button: {
    padding: 16,
    marginTop: 24,
    alignItems: 'center',
  },
});

export default CounterScreen;
