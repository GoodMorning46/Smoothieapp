import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.mainTitle} type="title">Bonne dégustation !</ThemedText>
        <ThemedText style={styles.optionTitle2} type="defaultSemiBold">1. Choisis ton mood</ThemedText>
        <ThemedText style={styles.optionTitle2} type="defaultSemiBold">2. Choisis ton smoothie</ThemedText>
      </ThemedView>
      </ScrollView>
);}

const styles = StyleSheet.create({
  titleContainer: {
    height: 800,
  },

  mainTitle: {
    marginTop: 100,
    marginLeft: 30,
  },

  optionTitle2: {
    marginTop: 20,
    marginLeft: 30,
  },

  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

});
