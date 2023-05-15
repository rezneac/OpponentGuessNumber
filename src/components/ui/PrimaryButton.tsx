import {Text, View, Pressable, StyleSheet} from 'react-native';

import Colors from '../../../constants/colors';

const PrimaryButton = ({children, onPress}: any) => {
  const onPressedHandler = () => {
    console.log('Pressed');
    onPress();
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.pressed, styles.buttonContainer]
            : styles.buttonContainer
        }
        onPress={onPressedHandler}
        android_ripple={{color: Colors.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonContainer: {
    backgroundColor: Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
