import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const CarRentalStats = () => {
  const carData = [
    { name: 'Sport Car', count: 17439, color: '#1a365d' },
    { name: 'SUV', count: 9478, color: '#2563eb' },
    { name: 'Coupe', count: 18197, color: '#3b82f6' },
    { name: 'Hatchback', count: 12510, color: '#93c5fd' },
    { name: 'MPV', count: 14406, color: '#dbeafe' }
  ];

  const chartData = carData.map(item => ({
    name: item.name,
    population: item.count,
    color: item.color,
    legendFontColor: '#7F7F7F',
    legendFontSize: 12
  }));

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Top 5 Car Rental</Text>
        <Text style={styles.totalNumber}>72,030</Text>
        <Text style={styles.subtitle}>Rental Car</Text>
      </View>

      <PieChart
        data={chartData}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />

      <View style={styles.legendContainer}>
        {carData.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: item.color }]} />
            <View style={styles.legendTextContainer}>
              <Text style={styles.legendText}>{item.name}</Text>
              <Text style={styles.legendNumber}>
                {item.count.toLocaleString()}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  totalNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  legendContainer: {
    marginTop: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  colorBox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    marginRight: 12,
  },
  legendTextContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  legendText: {
    fontSize: 14,
    color: '#666',
  },
  legendNumber: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});

export default CarRentalStats;