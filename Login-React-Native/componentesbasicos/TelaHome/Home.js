import React from 'react';
import { Text, StyleSheet } from 'react-native';

const WelcomeMessage = () => {
  return (
    <>
      <Text style={styles.titulo}>Bem-vindo à página inicial!</Text>
      <Text style={styles.welcomeText}>Que bom ter você aqui! Explore os recursos abaixo:</Text>
    </>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default WelcomeMessage;
