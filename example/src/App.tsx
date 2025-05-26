import { Text, View, StyleSheet } from 'react-native';
import { multiply } from 'react-native-typst-turbo-module';

console.log('here 2');

const result = multiply(3, 6);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
