import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Card } from '@/components/Card';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.mainTitle} type="title">Bonne dégustation !</ThemedText>
        <ThemedText style={styles.optionTitle1} type="defaultSemiBold">1. Choisis ton mood</ThemedText>
        <ThemedText style={styles.optionTitle2} type="defaultSemiBold">2. Choisis ton smoothie</ThemedText>
      </ThemedView>
      <ScrollView
        horizontal={true}  // Active le défilement horizontal
        showsHorizontalScrollIndicator={true}  // Affiche la barre de défilement horizontale
        style={styles.cardScrollView}
      >
        <View style={styles.cardContainer}>
          <Card style={styles.cardStyle}
            imageUrl="https://static.posters.cz/image/750/81776.jpg"
            description="Explore the world of React Native"
            buttonText="Protéine"
            onButtonPress={() => console.log('Button pressed')}
            lightColor="red"
            darkColor="#000000"
          />
          <Card style={styles.cardStyle}
            imageUrl="https://mir-s3-cdn-cf.behance.net/project_modules/hd/9de30932365729.567da71267d69.png"
            description="Explore the world of React Native"
            buttonText="P'tit déj"
            onButtonPress={() => console.log('Button pressed')}
            lightColor="yellow"
            darkColor="#000000"
          />
          <Card style={styles.cardStyle}
            imageUrl="https://mir-s3-cdn-cf.behance.net/project_modules/hd/9de30932365729.567da71267d69.png"
            description="Explore the world of React Native"
            buttonText="Sucré"
            onButtonPress={() => console.log('Button pressed')}
            lightColor="green"
            darkColor="#000000"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    marginTop: 100,
    marginLeft: 30,
    marginRight: 30,
  },
  mainTitle: {
    marginBottom: 20,
  },
  optionTitle1: {
    marginBottom: 0,
  },
  optionTitle2: {
    marginTop: 90,
  },
  cardScrollView: {
    // Assure-toi de régler la hauteur si nécessaire pour éviter les problèmes de layout
    height: 600, // Ajuste cette valeur selon la hauteur de tes cartes
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',  // Centre les cartes verticalement si nécessaire
  },
  cardStyle: {
    marginLeft: 30,
    width: 300,  // Largeur des cartes
    height: 450,
  },
});