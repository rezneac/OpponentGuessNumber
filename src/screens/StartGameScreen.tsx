import {useState} from 'react';
import {View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

type iProps = {
  onPickNumber: (number: number) => void;
};

const StartGameScreen = ({onPickNumber}: iProps) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  //dynamically changes width andheight dimension when screen is rotated
  const {width, height} = useWindowDimensions();

  const onChangeInput = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInput = () => {
    setEnteredNumber('');
  };

  const onConfirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
        {text: 'Okay', style: 'destructive', onPress: resetInput},
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={onChangeInput}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonView}>
                <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonView}>
                <PrimaryButton onPress={onConfirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonView: {
    flex: 1,
  },
});

export default StartGameScreen;
