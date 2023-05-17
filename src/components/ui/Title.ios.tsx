import {StyleSheet, Text, Platform} from 'react-native';
import Colors from '../../../constants/colors';

type TitleProp = {
  children: string;
};

const Title = ({children}: TitleProp) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

export default Title;
