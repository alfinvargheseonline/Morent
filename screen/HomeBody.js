import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

const cars = [
  {
    id: "1",
    name: "Koenigsegg",
    type: "Sport",
    image: require("../assets/car.png"), // Replace with your car image
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$99.00/day",
    oldPrice: null,
  },
  {
    id: "2",
    name: "Nissan GT",
    type: "Sport",
    image: require("../assets/Gtr.png"), // Replace with your car image
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$80.00/day",
    oldPrice: "$100.00",
  },
];

export default function PopularCars() {
  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Popular Car</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Cars List */}
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CarCard car={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const CarCard = ({ car }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('CarView', { car })}
    >
      {/* Car Image */}
      <Text style={styles.carName}>{car.name}</Text>
      <Text style={styles.carType}>{car.type}</Text>
      <Image source={car.image} style={styles.carImage} resizeMode="contain" />

      {/* Car Info */}
      {/* Specifications */}
      <View style={styles.specsContainer}>
        <Text style={styles.specText}>{car.fuel}</Text>
        <Text style={styles.specText}>{car.transmission}</Text>
        <Text style={styles.specText}>{car.capacity}</Text>
      </View>

      {/* Pricing */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{car.price}</Text>
        {car.oldPrice && <Text style={styles.oldPrice}>{car.oldPrice}</Text>}
      </View>

      {/* Rental Button */}
      <TouchableOpacity style={styles.rentalButton}>
        <Text style={styles.rentalText}>Rental Now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  viewAll: {
    fontSize: 14,
    color: "#3B82F6",
    fontWeight: "500",
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: width * 0.6,
    marginRight: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  carImage: {
    width: "100%",
    height: 100,
  },
  carName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  carType: {
    fontSize: 12,
    color: "#A9A9A9",
    marginBottom: 10,
  },
  specsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  specText: {
    fontSize: 12,
    color: "#A9A9A9",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginRight: 5,
  },
  oldPrice: {
    fontSize: 12,
    color: "#A9A9A9",
    textDecorationLine: "line-through",
  },
  rentalButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: "center",
  },
  rentalText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
