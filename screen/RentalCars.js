import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const initialCars = [
  {
    id: "1",
    name: "All New Rush",
    type: "SUV",
    image: require("../assets/rolls.png"), // Replace with your car image
    fuel: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$72.00/day",
    oldPrice: "$80.00",
    isFavorite: false,
  },
  {
    id: "2",
    name: "CR-V",
    type: "SUV",
    image: require("../assets/Gtr.png"), // Replace with your car image
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$80.00/day",
    oldPrice: null,
    isFavorite: true,
  },
  {
    id: "3",
    name: "All New Terios",
    type: "SUV",
    image: require("../assets/car.png"), // Replace with your car image
    fuel: "90L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$74.00/day",
    oldPrice: null,
    isFavorite: false,
  },
  {
    id: "4",
    name: "New MG ZS",
    type: "SUV",
    image: require("../assets/Gtr.png"), // Replace with your car image
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$80.00/day",
    oldPrice: null,
    isFavorite: false,
  },
  {
    id: "5",
    name: "MG ZX Exclusive",
    type: "Hatchback",
    image: require("../assets/rolls.png"), // Replace with your car image
    fuel: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: "$76.00/day",
    oldPrice: "$80.00",
    isFavorite: true,
  },
];

const RentalCars = () => {
  const navigation = useNavigation();
  const [cars, setCars] = useState(initialCars);

  const toggleFavorite = (id) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id ? { ...car, isFavorite: !car.isFavorite } : car
      )
    );
  };

  const renderItem = ({ item }) => (
    <CarCard car={item} navigation={navigation} toggleFavorite={toggleFavorite} />
  );

  return (
    <FlatList
      data={cars}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const CarCard = ({ car, navigation, toggleFavorite }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => navigation.navigate("CarView", { car })}
  >
    {/* Header Section */}
    <View style={styles.header}>
      <Text style={styles.carName}>{car.name}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(car.id)}>
        <MaterialIcons
          name={car.isFavorite ? "favorite" : "favorite-border"}
          size={24}
          color={car.isFavorite ? "red" : "gray"}
        />
      </TouchableOpacity>
    </View>
    <Text style={styles.carType}>{car.type}</Text>

    {/* Main Content */}
    <View style={styles.mainContent}>
      {/* Car Image */}
      <Image source={car.image} style={styles.carImage} resizeMode="contain" />

      {/* Details in Column */}
      <View style={styles.detailsColumn}>
        {/* Specifications */}
        <View style={styles.specsContainer}>
          <Text style={styles.specText}>⛽ {car.fuel}</Text>
          <Text style={styles.specText}>⚙️ {car.transmission}</Text>
          <Text style={styles.specText}>👥 {car.capacity}</Text>
        </View>

        {/* Pricing */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{car.price}</Text>
          {car.oldPrice && <Text style={styles.oldPrice}>{car.oldPrice}</Text>}
        </View>

        {/* Rental Button */}
        <TouchableOpacity style={styles.rentalButton}>
          <Text style={styles.rentalText}
          onPress={() => navigation.navigate("CarView", { car })}>Rental Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  carName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  carType: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
  mainContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  carImage: {
    width: "40%",
    height: 120,
  },
  detailsColumn: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  specsContainer: {
    marginBottom: 10,
  },
  specText: {
    fontSize: 12,
    color: "#555",
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginRight: 10,
  },
  oldPrice: {
    fontSize: 12,
    color: "#888",
    textDecorationLine: "line-through",
  },
  rentalButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  rentalText: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default RentalCars;
