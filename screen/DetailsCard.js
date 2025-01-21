import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const DetailsCard = () => {
    const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Top Section with Car and Description */}
        
        {/* Gallery */}
        <View style={styles.gallery}>
          <Image
            source={require('../assets/car.png')} // Replace with images
            style={styles.thumbnail}
          />
          <Image
            source={require('../assets/rolls.png')}
            style={styles.thumbnail}
          />
          <Image
            source={require('../assets/Gtr.png')}
            style={styles.thumbnail}
          />
        </View>

        {/* Car Details */}
        <View style={styles.details}>
          <Text style={styles.carName}>Nissan GT - R</Text>
          <Text style={styles.reviewerText}>★ 440+ Reviewer</Text>
          <Text style={styles.description}>
            NISMO has become the embodiment of Nissan’s outstanding performance,
            inspired by the most unforgiving proving ground, the “race track.”
          </Text>
          <View style={styles.specifications}>
            <Text style={styles.specText}>Type: Sport</Text>
            <Text style={styles.specText}>Capacity: 2 Person</Text>
            <Text style={styles.specText}>Steering: Manual</Text>
            <Text style={styles.specText}>Gasoline: 70L</Text>
          </View>
        </View>

        {/* Pricing and Button */}
        <View style={styles.footer}>
  <Text style={styles.priceText}>
    <Text style={styles.discountedPrice}>$80.00</Text> / days
  </Text>
  <Text style={styles.originalPrice}>$100.00</Text>
  <TouchableOpacity 
    style={styles.rentButton} 
    onPress={() => navigation.navigate('Payment')} // Navigation logic
  >
    <Text style={styles.rentButtonText}>Rent Now</Text>
  </TouchableOpacity>
</View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  card: {
    borderRadius: 10,

  },
  topSection: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  subText: {
    fontSize: 12,
    textAlign: "center",
    color: "#666",
    marginVertical: 10,
  },
  mainImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
    marginVertical: 10,
  },
  gallery: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  thumbnail: {
    width: 90,
    height: 30,
    resizeMode: "object fit",
    borderRadius: 5,
  },
  details: {
    marginVertical: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  reviewerText: {
    fontSize: 12,
    color: "#888",
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginVertical: 10,
  },
  specifications: {
    marginVertical: 10,
  },
  specText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  discountedPrice: {
    color: "#4CAF50",
  },
  originalPrice: {
    fontSize: 12,
    color: "#888",
    textDecorationLine: "line-through",
  },
  rentButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  rentButtonText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default DetailsCard;
