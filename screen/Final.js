import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardScreen() {
  const [searchQuery, setSearchQuery] = useState("");

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

      {/* Search Section */}
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search something here"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Rental Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detail Rental</Text>
        <View style={styles.rentalDetailsCard}>
          <View style={styles.mapPlaceholder}>
            <Ionicons name="map-outline" size={48} color="#007BFF" />
          </View>
          <View style={styles.carDetails}>
            <Image
              source={{ uri: "https://via.placeholder.com/80" }}
              style={styles.carImage}
            />
            <View>
              <Text style={styles.carName}>Nissan GT - R</Text>
              <Text style={styles.carType}>Sport Car</Text>
            </View>
          </View>
          <Text style={styles.rentalId}>#9761</Text>
        </View>

        {/* Pick-Up Section */}
        <View style={styles.rentalSubsection}>
          <Text style={styles.subsectionTitle}>Pick-Up</Text>
          <TextInput style={styles.input} placeholder="Kota Semarang" />
          <TextInput style={styles.input} placeholder="07.00" />
          <TextInput style={styles.input} placeholder="20 July 2022" />
        </View>

        {/* Drop-Off Section */}
        <View style={styles.rentalSubsection}>
          <Text style={styles.subsectionTitle}>Drop-Off</Text>
          <TextInput style={styles.input} placeholder="Kota Semarang" />
          <TextInput style={styles.input} placeholder="01.00" />
          <TextInput style={styles.input} placeholder="21 July 2022" />
        </View>

        <View style={styles.priceSummary}>
          <Text style={styles.priceLabel}>Total Rental Price</Text>
          <Text style={styles.priceValue}>$80.00</Text>
        </View>
      </View>

      {/* Top 5 Car Rental */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top 5 Car Rental</Text>
          <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
        </View>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartText}>72,030</Text>
          <Text style={styles.chartSubText}>Rental Car</Text>
        </View>
        <View style={styles.carStats}>
          <Text style={styles.carStat}>Sport Car - 17,439</Text>
          <Text style={styles.carStat}>SUV - 9,478</Text>
          <Text style={styles.carStat}>Coupe - 18,197</Text>
          <Text style={styles.carStat}>Hatchback - 12,510</Text>
          <Text style={styles.carStat}>MPV - 14,406</Text>
        </View>
      </View>

      {/* Recent Transactions */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        {["Nissan GT - R", "Koenigsegg", "Rolls - Royce", "CR - V"].map(
          (car, index) => (
            <View key={index} style={styles.transactionRow}>
              <Image
                source={{ uri: "https://via.placeholder.com/50" }}
                style={styles.transactionCarImage}
              />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionCarName}>{car}</Text>
                <Text style={styles.transactionCarType}>Sport Car</Text>
              </View>
              <Text style={styles.transactionPrice}>$80.00</Text>
            </View>
          )
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
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
  searchSection: {
    flexDirection: "row",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  filterButton: {
    width: 40,
    height: 40,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  rentalDetailsCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  mapPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 16,
  },
  carDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  carImage: {
    width: 80,
    height: 50,
    borderRadius: 4,
    marginRight: 16,
  },
  carName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  carType: {
    fontSize: 14,
    color: "#666",
  },
  rentalId: {
    fontSize: 14,
    color: "#999",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  priceSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  priceValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007BFF",
  },
  chartPlaceholder: {
    alignItems: "center",
    marginVertical: 16,
  },
  chartText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  chartSubText: {
    fontSize: 16,
    color: "#666",
  },
  carStats: {
    marginTop: 8,
  },
  carStat: {
    fontSize: 14,
    marginBottom: 4,
  },
  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  transactionCarImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionCarName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionCarType: {
    fontSize: 14,
    color: "#666",
  },
  transactionPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  viewAllText: {
    color: "#007BFF",
  },
});
