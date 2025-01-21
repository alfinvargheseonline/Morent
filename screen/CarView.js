import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const cars = [
  {
    id: "1",
    name: "Nissan GT-R",
    price: "80.00",
    fuel: "Petrol",
    transmission: "Automatic",
    capacity: "4",
    image: require("../assets/car.png"),
    reviews: [
      { id: "1", name: "Alex Stanton", comment: "Amazing car!", rating: 4.5 },
      { id: "2", name: "Skyler Dias", comment: "Very comfortable ride.", rating: 4.0 },
    ],
  },
  {
    id: "2",
    name: "Koenigsegg",
    price: "99.00",
    fuel: "Petrol",
    transmission: "Manual",
    capacity: "2",
    image: require("../assets/car.png"),
  },
  {
    id: "3",
    name: "CR-V",
    price: "50.00",
    fuel: "Hybrid",
    transmission: "Automatic",
    capacity: "5",
    image: require("../assets/car.png"),
  },
];

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState(cars[0]);

  const handleFilter = () => {
    alert("Filter functionality is not yet implemented!");
  };

  const handleBookNow = () => {
    navigation.navigate('Payment', {
      carDetails: selectedCar
    });
  };

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>MORENT</Text>
        <Image
          source={require("../assets/profile2.png")}
          style={styles.profileImage}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#A9A9A9" />
        <TextInput
          style={styles.input}
          placeholder="Search something here"
          placeholderTextColor="#A9A9A9"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
          <MaterialIcons name="tune" size={24} color="#A9A9A9" />
        </TouchableOpacity>
      </View>

      {/* Featured Car */}
      <View style={styles.featured}>
        <Text style={styles.featuredTitle}>Sports Car with the best design</Text>
        <Image source={selectedCar.image} style={styles.featuredImage} />
      </View>

      {/* Car Details */}
      <View style={styles.carDetails}>
        <Text style={styles.carName}>{selectedCar.name}</Text>
        <Text style={styles.carPrice}>${selectedCar.price}/day</Text>
        <TouchableOpacity style={styles.bookButton} onPress={handleBookNow}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
        <Text style={styles.specs}>Fuel: {selectedCar.fuel}</Text>
        <Text style={styles.specs}>Transmission: {selectedCar.transmission}</Text>
        <Text style={styles.specs}>Capacity: {selectedCar.capacity}</Text>
      </View>

      {/* Reviews */}
      <Text style={styles.sectionTitle}>Reviews</Text>
      <FlatList
        data={selectedCar.reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.review}>
            <Image
              source={require("../assets/profile2.png")}
              style={styles.reviewProfile}
            />
            <View style={styles.reviewContent}>
              <Text style={styles.reviewName}>{item.name}</Text>
              <Text style={styles.reviewComment}>{item.comment}</Text>
            </View>
            <View style={styles.starRating}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
          </View>
        )}
      />

      {/* Popular Cars */}
      <Text style={styles.sectionTitle}>Popular Cars</Text>
      <FlatList
        data={filteredCars}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.popularCar}
            onPress={() => setSelectedCar(item)}
          >
            <Image source={item.image} style={styles.popularCarImage} />
            <Text style={styles.popularCarName}>{item.name}</Text>
            <Text style={styles.popularCarPrice}>${item.price}/day</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A73E8",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    padding: 10,
    marginVertical: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#000",
  },
  filterButton: {
    marginLeft: 10,
  },
  featured: {
    backgroundColor: "#3563E9",
    padding: 20,
    borderRadius: 10,
  },
  featuredTitle: { fontSize: 20, marginBottom: 10, fontWeight: "bold", color: "#fff" },
  featuredImage: { width: "60%", height: 150, objectFit: "contain", borderRadius: 10, marginLeft: "auto", marginRight: "auto" },
  carDetails: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  carName: { fontSize: 18, fontWeight: "bold" },
  carPrice: { fontSize: 16, color: "#00C853", marginVertical: 10 },
  bookButton: {
    backgroundColor: "#1E88E5",
    padding: 10,
    borderRadius: 8,
  },
  bookButtonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  specs: { marginTop: 5, color: "#757575" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 20 },
  review: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  reviewProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewContent: { flex: 1 },
  reviewName: { fontWeight: "bold" },
  reviewComment: { color: "#757575" },
  starRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: { marginLeft: 5, color: "#757575" },
  popularCar: {
    backgroundColor: "#fff",
    padding: 50,
    borderRadius: 10,
    marginRight: 20,
    alignItems: "center",
    width: 180,
  },
  popularCarImage: { width: 100, height: 60, objectFit: "contain", borderRadius: 8 },
  popularCarName: { marginTop: 10, fontWeight: "bold", textAlign: "center" },
  popularCarPrice: { marginTop: 5, color: "#757575", fontSize: 14 },
});