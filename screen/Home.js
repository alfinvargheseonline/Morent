import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import HomeBody from "./HomeBody";
import RentalCars from "./RentalCars";
import CarView from "./CarView";

const { width } = Dimensions.get("window");

export default function App() {
  const [pickUp, setPickUp] = useState("Semarang");
  const [dropOff, setDropOff] = useState("20 July 2022");

  const handleSwitch = () => {
    setPickUp(dropOff);
    setDropOff(pickUp);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header Section */}
        <Header />

        {/* Search Bar Section */}
        <SearchBar />

        {/* Advertisement Card */}
        <AdCard />

        {/* Pickup Card */}
        <PickupCard title="Pick – Up" location={pickUp} />

        {/* Switch Button */}
        <SwitchButton onSwitch={handleSwitch} />

        {/* Drop-off Card */}
        <PickupCard title="Drop – Off" location={dropOff} />

        {/* Home Body Section */}
        <View style={styles.homeBodyContainer}>
          <HomeBody />
          
          
        </View>
        
      </View><View><RentalCars /></View>
      
    </ScrollView>
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

// Pickup/Drop-off Card Component
const PickupCard = ({ title, location }) => (
  <View style={pickupStyles.card}>
    {/* Header Section */}
    <View style={pickupStyles.header}>
      <View style={pickupStyles.radioContainer}>
        <View style={pickupStyles.radioCircle} />
      </View>
      <Text style={pickupStyles.headerText}>{title}</Text>
    </View>

    {/* Options: Location, Date, Time */}
    <View style={pickupStyles.optionsContainer}>
      <Option label="Location" value={location} />
      <Option label="Date" value="20 July 2022" />
      <Option label="Time" value="07.00" />
    </View>
  </View>
);

// Option Component
const Option = ({ label, value }) => (
  <TouchableOpacity style={pickupStyles.option}>
    <Text style={pickupStyles.label}>{label}</Text>
    <View style={pickupStyles.valueContainer}>
      <Text style={pickupStyles.valueText}>{value}</Text>
      <MaterialIcons name="arrow-drop-down" size={20} color="#A9A9A9" />
    </View>
  </TouchableOpacity>
);

// Switch Component
const SwitchButton = ({ onSwitch }) => (
  <View style={switchStyles.container}>
    <TouchableOpacity style={switchStyles.button} onPress={onSwitch}>
      <MaterialIcons name="swap-vert" size={24} color="#FFFFFF" />
    </TouchableOpacity>
  </View>
);

// Styles for the Switch
const switchStyles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: "center",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#3563E9",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

// Styles for Pickup/Drop-off Card
const pickupStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    width: width * 0.9,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  option: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#A9A9A9",
    marginBottom: 5,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  valueText: {
    fontSize: 14,
    color: "#1A1A1A",
    marginRight: 5,
  },
});

// General Styles
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    alignItems: "center",
    paddingBottom: 20,
  },
  homeBodyContainer: {
    flex: 1,
    width: "90%",
    marginTop: 20,
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
    width: 400,
    height: 230,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    marginTop: 20,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 14,
    color: "#E0E0E0",
    textAlign: "left",
    marginBottom: 20,
    lineHeight: 18,
  },
  button: {
    backgroundColor: "#3563E9",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    left: -100,
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
    marginBottom: 30,
  },
});
