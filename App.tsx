import { StyleSheet, Text, View } from 'react-native';
import { RiveTest } from './RiveTest';

export default function App() {
  return (
    <View style={styles.container}>
      <RiveTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
