import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const cars = [
  {
    id: "1",
    name: "Nissan GT-R",
    image: require("../assets/car.png"),
    price: 80,
    fuel: "Petrol",
    transmission: "Manual",
    capacity: "2 seats",
    rating: 4.5,
    reviews: [
      { id: "1", name: "Alex Stanton", comment: "Amazing car!", rating: 4.5 },
      {
        id: "2",
        name: "Skylar Dias",
        comment: "Great performance!",
        rating: 4.0,
      },
    ],
  },
  // Add more cars here
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>MORENT</Text>
        <Image
          source={require("../assets/profile2.png")} // Replace with your profile image path
          style={styles.profileImage}
        />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#A9A9A9" />
        <TextInput
          style={styles.input}
          placeholder="Search something here"
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity style={styles.filterButton}>
          <MaterialIcons name="tune" size={24} color="#A9A9A9" />
        </TouchableOpacity>
      </View>

      {/* Featured Car */}
      <View style={styles.featured}>
        <Text style={styles.featuredTitle}>
          Sports Car with the best design
        </Text>
        <Image source={cars[0].image} style={styles.featuredImage} />
      </View>

      {/* Car Details */}
      <View style={styles.carDetails}>
        <Text style={styles.carName}>{cars[0].name}</Text>
        <Text style={styles.carPrice}>${cars[0].price}/day</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
        <Text style={styles.specs}>Fuel: {cars[0].fuel}</Text>
        <Text style={styles.specs}>Transmission: {cars[0].transmission}</Text>
        <Text style={styles.specs}>Capacity: {cars[0].capacity}</Text>
      </View>

      {/* Reviews */}
      <Text style={styles.sectionTitle}>Reviews</Text>
      <FlatList
        data={cars[0].reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.review}>
            <Text style={styles.reviewName}>{item.name}</Text>
            <Text style={styles.reviewComment}>{item.comment}</Text>
            <FontAwesome name="star" size={16} color="#FFD700" />
            <Text>{item.rating}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 50,
    padding: 10,
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
    width: "100%",
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
    marginVertical: 20,
    backgroundColor: "#E3F2FD",
    padding: 20,
    borderRadius: 8,
  },
  featuredTitle: { fontSize: 16, marginBottom: 10 },
  featuredImage: { width: "100%", height: 150, resizeMode: "contain" },
  carDetails: { padding: 20, backgroundColor: "#fff", borderRadius: 8 },
  carName: { fontSize: 18, fontWeight: "bold" },
  carPrice: { fontSize: 16, color: "#00C853" },
  bookButton: {
    marginTop: 10,
    backgroundColor: "#1E88E5",
    padding: 10,
    borderRadius: 8,
  },
  bookButtonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  specs: { marginTop: 5, color: "#757575" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  review: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    alignItems: "center",
  },
  reviewName: { fontWeight: "bold" },
  reviewComment: { flex: 1, marginLeft: 10, color: "#757575" },
});
