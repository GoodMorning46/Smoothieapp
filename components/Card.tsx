import React from 'react';
import { View, Image, StyleSheet, Button, StyleProp, ViewStyle } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from './ThemedText';

export type CardProps = {
  imageUrl: string;
  description: string;
  buttonText: string;
  onButtonPress: () => void;
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<ViewStyle>;
};

export function Card({
  style,
  imageUrl,
  description,
  buttonText,
  onButtonPress,
  lightColor,
  darkColor,
}: CardProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <ThemedText style={styles.description} type="subtitle">
        {description}
      </ThemedText>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title={buttonText} onPress={onButtonPress} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: 400,
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200, // Définis une hauteur pour le conteneur de l'image
  },
  image: {
    width: 150, // Définis une largeur pour l'image
    height: 150, // Définis une hauteur pour l'image
  },
  description: {
    padding: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 100,
    marginBottom: 10,
    flexDirection: 'row', // Ensures the button is centered
    justifyContent: 'center', // Center horizontally
  },
  button: {
    width: '40%', // Set width of the button to 40%
    backgroundColor: 'white',
    borderRadius: 10,
  },
});