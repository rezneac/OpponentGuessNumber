import {Image, Text, View, StyleSheet, useWindowDimensions, ScrollView} from 'react-native/';
import Title from '../components/ui/Title';
import Colors from '../../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}: any) => {
  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageCointainer, imageStyle]}>
          <Image style={styles.image} source={require('../../assets/images/success.png')} />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  imageCointainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    marginVertical: 26,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontWeight: 'bold',
    color: Colors.primary500,
  },
});
export default GameOverScreen;
