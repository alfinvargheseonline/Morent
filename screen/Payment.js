import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Payment({ route, navigation }) {
  const { carDetails } = route.params || { name: "Nissan GT-R", price: "80.00" };
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    townCity: '',
    pickupLocation: '',
    pickupTime: '',
    pickupDate: '',
    dropoffLocation: '',
    dropoffTime: '',
    dropoffDate: '',
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvc: ''
  });

  const [selectedPayment, setSelectedPayment] = useState('creditCard');
  const [agreements, setAgreements] = useState({
    marketing: false,
    terms: false
  });

  return (
    <ScrollView style={styles.container}>

          <View style={styles.header}>
                <Text style={styles.logoText}>MORENT</Text>
                <Image
                  source={require("../assets/profile2.png")}
                  style={styles.profileImage}
                />
              </View>
      {/* Rental Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rental Summary</Text>
        <View style={styles.summaryCard}>
          <Image
            source={require('../assets/car.png')}
            style={styles.carImage}
          />
          <View style={styles.carInfo}>
            <Text style={styles.carName}>{carDetails.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>4.8 (2k Reviews)</Text>
            </View>
          </View>
        </View>

        <View style={styles.pricingDetails}>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Subtotal</Text>
            <Text style={styles.priceValue}>${carDetails.price}</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Tax</Text>
            <Text style={styles.priceValue}>$0</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.priceRow}>
            <Text style={styles.totalLabel}>Total Rental Price</Text>
            <Text style={styles.totalPrice}>${carDetails.price}</Text>
          </View>
        </View>
      </View>

      {/* Billing Info */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Billing Info</Text>
          <Text style={styles.stepText}>Step 1 of 4</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={formData.name}
          onChangeText={(text) => setFormData({...formData, name: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={formData.address}
          onChangeText={(text) => setFormData({...formData, address: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={formData.phoneNumber}
          onChangeText={(text) => setFormData({...formData, phoneNumber: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Town / City"
          value={formData.townCity}
          onChangeText={(text) => setFormData({...formData, townCity: text})}
        />
      </View>

      {/* Rental Info */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Rental Info</Text>
          <Text style={styles.stepText}>Step 2 of 4</Text>
        </View>
        
        <Text style={styles.subsectionTitle}>Pick-Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Locations"
          value={formData.pickupLocation}
          onChangeText={(text) => setFormData({...formData, pickupLocation: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Time"
          value={formData.pickupTime}
          onChangeText={(text) => setFormData({...formData, pickupTime: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={formData.pickupDate}
          onChangeText={(text) => setFormData({...formData, pickupDate: text})}
        />

        <Text style={styles.subsectionTitle}>Drop-Off</Text>
        <TextInput
          style={styles.input}
          placeholder="Locations"
          value={formData.dropoffLocation}
          onChangeText={(text) => setFormData({...formData, dropoffLocation: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Time"
          value={formData.dropoffTime}
          onChangeText={(text) => setFormData({...formData, dropoffTime: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={formData.dropoffDate}
          onChangeText={(text) => setFormData({...formData, dropoffDate: text})}
        />
      </View>

      {/* Payment Method */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <Text style={styles.stepText}>Step 3 of 4</Text>
        </View>

        <TouchableOpacity 
          style={[styles.paymentOption, selectedPayment === 'creditCard' && styles.selectedPayment]}
          onPress={() => setSelectedPayment('creditCard')}
        >
          <View style={styles.paymentHeader}>
            <View style={styles.radioButton}>
              {selectedPayment === 'creditCard' && <View style={styles.radioButtonInner} />}
            </View>
            <Text style={styles.paymentText}>Credit Card</Text>
            <View style={styles.cardIcons}>
              <Image source={require('../assets/Mastercard.png')} style={styles.cardIcon} />
              <Image source={require('../assets/visa.png')} style={styles.cardIcon} />
            </View>
          </View>
          
          {selectedPayment === 'creditCard' && (
            <View style={styles.cardInputs}>
              <TextInput
                style={styles.input}
                placeholder="Card Number"
                keyboardType="numeric"
                value={formData.cardNumber}
                onChangeText={(text) => setFormData({...formData, cardNumber: text})}
              />
              <TextInput
                style={styles.input}
                placeholder="Card Holder"
                value={formData.cardHolder}
                onChangeText={(text) => setFormData({...formData, cardHolder: text})}
              />
              <View style={styles.rowInputs}>
                <TextInput
                  style={[styles.input, styles.halfInput]}
                  placeholder="MM/YY"
                  value={formData.expirationDate}
                  onChangeText={(text) => setFormData({...formData, expirationDate: text})}
                />
                <TextInput
                  style={[styles.input, styles.halfInput]}
                  placeholder="CVC"
                  keyboardType="numeric"
                  maxLength={3}
                  value={formData.cvc}
                  onChangeText={(text) => setFormData({...formData, cvc: text})}
                />
              </View>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.paymentOption, selectedPayment === 'paypal' && styles.selectedPayment]}
          onPress={() => setSelectedPayment('paypal')}
        >
          <View style={styles.paymentHeader}>
            <View style={styles.radioButton}>
              {selectedPayment === 'paypal' && <View style={styles.radioButtonInner} />}
            </View>
            <Text style={styles.paymentText}>PayPal</Text>
            <Image source={require('../assets/PayPal.png')} style={styles.paypalIcon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.paymentOption, selectedPayment === 'bitcoin' && styles.selectedPayment]}
          onPress={() => setSelectedPayment('bitcoin')}
        >
          {/* <View style={styles.paymentHeader}>
            <View style={styles.radioButton}>
              {selectedPayment === 'bitcoin' && <View style={styles.radioButtonInner} />}
            </View>
            <Text style={styles.paymentText}>Bitcoin</Text>
            <Image source={require('../assets/car.png')} style={styles.bitcoinIcon} />
          </View> */}
        </TouchableOpacity>
      </View>

      {/* Confirmation */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Confirmation</Text>
          <Text style={styles.stepText}>Step 4 of 4</Text>
        </View>

        <TouchableOpacity 
          style={styles.checkboxRow}
          onPress={() => setAgreements({...agreements, marketing: !agreements.marketing})}
        >
          <View style={[styles.checkbox, agreements.marketing && styles.checkboxChecked]}>
            {agreements.marketing && <Ionicons name="checkmark" size={16} color="#fff" />}
          </View>
          <Text style={styles.agreementText}>
            I agree with sending an Marketing and newsletter emails. No spam, promised!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.checkboxRow}
          onPress={() => setAgreements({...agreements, terms: !agreements.terms})}
        >
          <View style={[styles.checkbox, agreements.terms && styles.checkboxChecked]}>
            {agreements.terms && <Ionicons name="checkmark" size={16} color="#fff" />}
          </View>
          <Text style={styles.agreementText}>
            I agree with our terms and conditions and privacy policy
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.rentalButton, (!agreements.terms || !agreements.marketing) && styles.rentalButtonDisabled]}
        disabled={!agreements.terms || !agreements.marketing}
      >
        <Text style={styles.rentalButtonText} 
         onPress={() => navigation.navigate('Final')}>
          Rental Now</Text>
      </TouchableOpacity>

      <View style={styles.securityNote}>
        <Ionicons name="shield-checkmark" size={24} color="#1E88E5" />
        <View style={styles.securityText}>
          <Text style={styles.securityTitle}>All your data are safe</Text>
          <Text style={styles.securityDescription}>
            We are using the highest level of security to provide you the best experience ever.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stepText: {
    color: '#666',
    fontSize: 14,
  },
  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  carImage: {
    width: '50%',
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  carInfo: {
    flex: 1,
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    color: '#666',
  },
  pricingDetails: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priceLabel: {
    color: '#666',
  },
  priceValue: {
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E88E5',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 8,
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  selectedPayment: {
    borderColor: '#1E88E5',
  },
  paymentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1E88E5',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1E88E5',
  },
  paymentText: {
    fontSize: 16,
    flex: 1,
  },
  cardIcons: {
    flexDirection: 'row',
  },
  cardIcon: {
    width: 40,
    height: 25,
    marginLeft: 8,
  },
  paypalIcon: {
    width: 80,
    height: 20,
  },
  bitcoinIcon: {
    width: 60,
    height: 20,
  },
  cardInputs: {
    marginTop: 16,
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 0.48,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#1E88E5',
    borderColor: '#1E88E5',
  },
  agreementText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  rentalButton: {
    backgroundColor: '#1E88E5',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  rentalButtonDisabled: {
    backgroundColor: '#ddd',
  },
  rentalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  securityText: {
    marginLeft: 12,
  },
  securityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  securityDescription: {
    color: '#666',
    fontSize: 14,
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
});

