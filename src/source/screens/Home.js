import React from 'react';
import {FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {HomeStyle} from './HomeStyle';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {username} = route.params || {};
  console.log('username', username);
  const ourServices = [
    {
      title: 'Find a Doctor',
      image: require('../images/FindaDoctor.png'),
    },
    {
      title: 'Book Labtest',
      image: require('../images/Labtest.png'),
    },
    {
      title: 'Health tracker',
      image: require('../images/tracker.png'),
    },
    {
      title: 'Health Checkups',
      image: require('../images/Labtest.png'),
    },
  ];

  const data = [
    {title: 'My Doctor', image: require('../images/doctor.png')},
    {
      title: 'Create Appoinment',
      image: require('../images/calender.png'),
    },
    {
      title: 'My Reports',
      image: require('../images/myreport.png'),
    },
  ];

  const nextPress = () => {
    navigation.navigate('Appointment');
  };
  const renderItem = ({item}) => (
    <TouchableOpacity style={HomeStyle.itemContainerr} onPress={nextPress}>
      <Image source={item.image} style={HomeStyle.imagee} />
      <Text style={HomeStyle.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  const options = ['Diabetes', 'Kidney', 'Thyroid', 'Heart'];

  const renderOptionItem = (option, index) => (
    <View style={HomeStyle.optionItem}>
      <View style={HomeStyle.dot} />
      <Text style={HomeStyle.optionText}>{option}</Text>
    </View>
  );

  const renderOptions = () => (
    <FlatList
      data={options}
      numColumns={2}
      renderItem={({item, index}) => renderOptionItem(item, index)}
      keyExtractor={(item, index) => index.toString()}
    />
  );
  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.header}>
        <Image
          source={require('../images/Vector.png')}
          style={HomeStyle.profilePicture}
        />
        <Text style={HomeStyle.name}>Hi {username}!</Text>
        <View style={HomeStyle.alerticon}>
          <Image
            source={require('../images/Roundicon.png')}
            style={HomeStyle.imageee}
          />
          <Image
            source={require('../images/Alert.png')}
            style={HomeStyle.alert}
          />
        </View>
      </View>
      <View style={HomeStyle.Border}>
        <Text style={HomeStyle.Plan}>Individual Plan</Text>
        <Text style={HomeStyle.Plan1}> Book your health checkup</Text>
        <Image
          source={require('../images/Splash.png')}
          style={HomeStyle.spalsh}
        />
        <Image
          source={require('../images/waves.png')}
          style={HomeStyle.Waves}
        />
        <Text style={HomeStyle.benefit}>Know your Benefits > </Text>
      </View>

      <View style={HomeStyle.FlatList}>
        <Text style={HomeStyle.service}>Our Services</Text>
        <FlatList
          horizontal={true}
          data={ourServices}
          renderItem={({item}) => (
            <View style={HomeStyle.itemContainer}>
              <Image source={item.image} style={HomeStyle.image} />
              <Text style={HomeStyle.title}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={HomeStyle.Book}>
        <Text style={HomeStyle.Healthtext}>Book Annual Health Checkups</Text>
        <View style={HomeStyle.optionContainer}>{renderOptions()}</View>
        <View style={HomeStyle.Checkupcontainer}>
          <Image
            source={require('../images/Checkup.png')}
            style={HomeStyle.Checkupcontainer}
          />
          <Image
            source={require('../images/Ellipse.png')}
            style={HomeStyle.Ellipsecontainer}
          />
          <Image
            source={require('../images/Ellipsee.png')}
            style={HomeStyle.Ellipsecontainer1}
          />
        </View>
        <TouchableOpacity style={HomeStyle.customButton} onPress={() => {}}>
          <Text style={HomeStyle.customButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
      <View style={HomeStyle.bottonflat}>
        <Text style={HomeStyle.Quicktext}>Quick Access</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
        />
      </View>
    </View>
  );
};

export default Home;
