import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Card } from '@/components/Card';
import { TouchableOpacity, Text } from 'react-native';

type FilterType = 'All' | 'Protéine' | 'P\'tit déj' | 'Sucré';

export default function HomeScreen() {
  const [filter, setFilter] = useState<FilterType>('All'); // Utilise FilterType pour le type de state

  const filterCards = (type: 'All' | 'Protéine' | 'P\'tit déj' | 'Sucré'): void => {
    setFilter(type);
  };

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.mainTitle} type="title">Bonne dégustation !</ThemedText>
        <ThemedText style={styles.optionTitle1} type="defaultSemiBold">1. Choisis ton mood</ThemedText>
        
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.filterContainer}>
        <TouchableOpacity onPress={() => filterCards('All')}
        style={[styles.filterButton, { backgroundColor: filter === 'All' ? 'blue' : '#ccc' }]}>
        <Text style={styles.filterText}>Tout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => filterCards('Protéine')}
        style={[styles.filterButton, { backgroundColor: filter === 'Protéine' ? 'blue' : '#ccc' }]}>
        <Text style={styles.filterText}>Protéine</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => filterCards('P\'tit déj')}
        style={[styles.filterButton, { backgroundColor: filter === 'P\'tit déj' ? 'blue' : '#ccc' }]}>
        <Text style={styles.filterText}>P'tit déj</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => filterCards('Sucré')}
        style={[styles.filterButton, { backgroundColor: filter === 'Sucré' ? 'blue' : '#ccc' }]}>
        <Text style={styles.filterText}>Sucré</Text>
        </TouchableOpacity>
        </ScrollView>
        
        <ThemedText style={styles.optionTitle2} type="defaultSemiBold">2. Choisis ton smoothie</ThemedText>
        
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          style={styles.cardScrollView}
        >
          {filter === 'All' || filter === 'Protéine' ? (
            <Card style={styles.cardStyle}
              imageUrl="https://static.posters.cz/image/750/81776.jpg"
              description="Explore the world of React Native"
              buttonText="Protéine"
              onButtonPress={() => console.log('Button pressed')}
              lightColor="red"
              darkColor="#000000"
            />
          ) : null}
          {filter === 'All' || filter === 'P\'tit déj' ? (
            <Card style={styles.cardStyle}
              imageUrl="https://mir-s3-cdn-cf.behance.net/project_modules/hd/9de30932365729.567da71267d69.png"
              description="Explore the world of React Native"
              buttonText="P'tit déj"
              onButtonPress={() => console.log('Button pressed')}
              lightColor="yellow"
              darkColor="#000000"
            />
          ) : null}
          {filter === 'All' || filter === 'Sucré' ? (
            <Card style={styles.cardStyle}
              imageUrl="https://mir-s3-cdn-cf.behance.net/project_modules/hd/9de30932365729.567da71267d69.png"
              description="Explore the world of React Native"
              buttonText="Sucré"
              onButtonPress={() => console.log('Button pressed')}
              lightColor="yellow"
              darkColor="#000000"
            />
          ) : null}
        </ScrollView>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },

  mainTitle: {
    marginTop: 100,
    marginLeft: 30,
  },

  optionTitle1: {
    marginTop: 20,
    marginLeft: 30,
  },

  optionTitle2: {
    marginTop: 50,
    marginLeft: 30,
  },

  filterContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 30,
    height: 10,  // Définis une hauteur fixe appropriée
    backgroundColor: 'transparent',
  },

  cardScrollView: {
    height: 430,  // Hauteur fixe pour le ScrollView des cartes
  },

  cardStyle: {
    marginLeft: 30,
    marginTop: 20,
    width: 300,  // Largeur fixe pour chaque carte
  },

  filterButton: {
    paddingVertical: 5,  // Réduis le padding vertical
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 20,
  },

  filterText: {
    color: 'white',
    fontWeight: 'bold',
  },

});