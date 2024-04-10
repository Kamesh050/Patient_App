import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    padding: 5,
  },
  imagee: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  titlee: {
    textAlign: 'center',
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  profilePicture: {
    bottom: 10,
    resizeMode: 'stretch',
    width: '109%',
    right: 20,
  },
  name: {
    zIndex: 1,
    alignContent: 'center',
    right: wp(95),
    color: 'white',
    bottom: hp(7.5),
    fontWeight: 'bold',
  },
  imageee: {
    zIndex: 1,
    alignContent: 'center',
    right: wp(38),
    color: 'white',
    bottom: hp(7),
  },
  alert: {
    zIndex: 1,
    alignContent: 'center',
    right: wp(25),
    color: 'white',
    bottom: hp(10.2),
  },
  alerticon: {
    zIndex: 1,
    right: wp(8),
  },
  Quicktext: {
    color: '#000000',
    fontSize: 12,
    left: 22,
    bottom: 20,
    fontWeight: '600',
  },
  Border: {
    borderWidth: 1,
    zIndex: 1,
    marginHorizontal: 20,
    bottom: hp(15),
    backgroundColor: 'white',
    borderRadius: 8,
    height: hp(18),
    borderColor: 'lightgrey',
  },
  Book: {
    borderWidth: 1,
    zIndex: 1,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    height: hp(20),
    borderColor: 'lightgrey',
    bottom: hp(9),
  },
  Checkupcontainer: {
    resizeMode: 'contain',
    zIndex: 1,
    width: 160,
    height: 125,
    alignSelf: 'flex-end',

    bottom: hp(2),
  },
  Ellipsecontainer: {
    alignSelf: 'flex-end',
    bottom: hp(15),
  },
  Ellipsecontainer1: {
    alignSelf: 'flex-end',
    bottom: hp(30),
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  itemContainerr: {
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#EAF9F9',
    width: 116,
    height: 59,
    left: 24,
    borderRadius: 4,
  },
  bottonflat: {
    bottom: 30,
  },
  image: {
    width: 90,
    height: 148,
    marginBottom: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    color: '#1F2587',
  },
  Plan: {
    zIndex: 1,
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    top: 28,
  },
  Healthtext: {
    zIndex: 1,
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    top: 15,
  },
  Plan1: {
    zIndex: 1,
    marginHorizontal: 18,
    fontSize: 10,
    top: 35,
  },
  spalsh: {
    zIndex: 1,
    width: 60,
    height: 55,
    alignSelf: 'flex-end',
    right: wp(5),
    bottom: hp(2),
  },
  Waves: {
    zIndex: 1,
    width: '100%',
    bottom: 13,
  },
  benefit: {
    zIndex: 1,
    bottom: 45,
    left: 20,
    fontSize: 12,
    color: '#1F2587',
  },
  content: {
    padding: 16,
  },

  FlatList: {
    bottom: hp(11),
    width: '90%',
    alignSelf: 'center',
  },
  customButton: {
    backgroundColor: '#1F2587',
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    bottom: hp(13),
    left: 20,
  },
  customButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  service: {
    bottom: 20,
    color: '#1F2587',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '70%',
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    marginTop: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    top: 24,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: 'skyblue',
    borderRadius: 4,
    marginRight: 8,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
});
