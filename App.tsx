import {useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './src/screens/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds: number) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }
  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} translucent backgroundColor="transparent" />
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.containerScreen}>
        <ImageBackground
          style={styles.imageBackground}
          imageStyle={styles.backgroundImage}
          source={require('./assets/images/background.jpg')}
          resizeMode="cover">
          <SafeAreaView style={styles.containerScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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
