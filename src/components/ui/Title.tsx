import {StyleSheet, Text} from 'react-native';
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
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});

export default Title;
