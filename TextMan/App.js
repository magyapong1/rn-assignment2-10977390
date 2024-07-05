import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={styles.boldText}>Michael Agyapong</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cab',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 24,
  },

  boldText: {
    fontWeight: 'bold', // Make the name bold
  },
  
});
