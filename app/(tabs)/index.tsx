import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link href="/(todo)" style={styles.link}>
        Open Todo List
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    fontSize: 20,
    color: '#2e78b7',
  },
});
