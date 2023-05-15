import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

type iProp = {
  userNumber: number;
};

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number,
): number => {
  const randomNum = Math.floor(Math.random() * (max - min) + min);

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = ({userNumber}: iProp) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
