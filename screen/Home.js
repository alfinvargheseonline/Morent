import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Platform,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Header />

      {/* Search Bar Section */}
      <SearchBar />

      {/* Advertisement Card */}
      <AdCard />
    </View>
  );
}

// Header Component
const Header = () => (
  <View style={styles.header}>
    <Text style={styles.logoText}>MORENT</Text>
    <Image
      source={require("../assets/profile2.png")} // Replace with your profile image path
      style={styles.profileImage}
    />
  </View>
);

// Search Bar Component
const SearchBar = () => (
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
);

// Advertisement Card Component
const AdCard = () => (
  <View style={styles.card}>
    <Text style={styles.title}>The Best Platform for Car Rental</Text>
    <Text style={styles.subtitle}>
      Ease of doing a car rental safely and reliably. Of course at a low price.
    </Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Rental Car</Text>
    </TouchableOpacity>
    <Image
      source={require("../assets/car.png")} // Replace with your car image path
      style={styles.carImage}
      resizeMode="contain"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
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
    width: "90%",
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
  card: {
    backgroundColor: "#3B82F6",
    borderRadius: 20,
    padding: 40,
    width: width * 0.9,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#E0E0E0",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 18,
  },
  button: {
    backgroundColor: "#3563E9",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    left: -110,
    },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  carImage: {
    width: 200,
    height: 100,
    position: "absolute",
    bottom: -50,
    marginBottom:30,
    
  },
});
