import {StyleSheet, Text, View} from 'react-native/';
import Colors from '../../../constants/colors';

type iProps = {
  children: number;
};

const NumberContainer = ({children}: iProps) => {
  return (
    <View style={style.container}>
      <Text style={style.numberText}>{children}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default NumberContainer;
