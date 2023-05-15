import {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../../constants/colors';

const StartGameScreen = ({onPickNumber}: any) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const onChangeInput = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInput = () => {
    setEnteredNumber('');
  };

  const onConfirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInput}],
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
