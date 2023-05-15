import {useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import Colors from './constants/colors';

const App = () => {
  const [userNumber, setUserNumber] = useState<number>();

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.containerScreen}>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={styles.backgroundImage}
        source={require('./assets/images/background.jpg')}
        resizeMode="cover">
        <SafeAreaView style={styles.containerScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
