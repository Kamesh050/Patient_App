import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

const BookAppointment = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const generateSlotsForCurrentMonth = () => {
    const currentMonth = moment().format('YYYY-MM');
    const daysInMonth = moment().daysInMonth();
    const slots = {};

    for (let i = 1; i <= daysInMonth; i++) {
      const date = moment(`${currentMonth}-${i}`, 'YYYY-MM-D').format(
        'YYYY-MM-DD',
      );

      const availableSlots = [
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '11:30 AM',
        '4:00 PM',
        '4:30 PM',
        '5:30 PM',
        '6:30 PM',
      ];
      slots[date] = availableSlots;
    }

    return slots;
  };

  const availableSlots = generateSlotsForCurrentMonth();

  const handleDayPress = day => {
    setSelectedDate(day.dateString);
    setSelectedSlot(null);
  };

  const handleSlotPress = slot => {
    setSelectedSlot(slot);
  };
  const Continuepress = () => {
    navigation.navigate('Booking');
  };
  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar onDayPress={handleDayPress} />
      </View>
      {selectedDate && availableSlots[selectedDate] ? (
        <View style={styles.available1}>
          <Text style={styles.available}>Available Slots</Text>
          <View style={styles.slotContainer}>
            {availableSlots[selectedDate].map((slot, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.slot,
                  selectedSlot === slot && styles.selectedSlot,
                ]}
                onPress={() => handleSlotPress(slot)}>
                <Text
                  style={[
                    styles.slotText,
                    selectedSlot === slot && styles.selectedSlotText,
                  ]}>
                  {slot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.Loginbutton} onPress={Continuepress}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F9',
  },
  calendarContainer: {
    width: '90%',
    left: 20,
    marginTop: 10,
    paddingTop: 20,
  },
  slotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    right: 12,
  },
  slot: {
    width: '25%',
    margin: '3%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    left: 10,
    backgroundColor: 'white',
  },
  selectedSlot: {
    backgroundColor: '#1F2587',
  },
  available: {
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 10,
    marginTop: 15,
  },
  available1: {
    marginLeft: 12,
    width: '102%',
    marginTop: 15,
  },
  selectedSlotText: {
    color: 'white',
  },
  Loginbutton: {
    paddingTop: hp(2),
    borderRadius: 22,
    backgroundColor: '#1F2587',
    marginTop: hp(8),
    padding: 10,
    width: '80%',
    left: wp(6),
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    bottom: 5,
  },
});

export default BookAppointment;
