import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Logo Text */}
        <Text style={styles.logoText}>MORENT</Text>
        {/* Profile Image */}
        <Image
          source={require('../assets/profile2.png')} // Replace with your profile image path
          style={styles.profileImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A73E8', // Adjust color to match your logo style
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
