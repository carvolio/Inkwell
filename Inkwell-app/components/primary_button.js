import {
  StyleSheet,
  Text, 
  Pressable
} from 'react-native';
import colors from '../constants';

export default function PrimaryButton({ text, onPress }) {
  return (
    <>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,

    width: '75%',

    backgroundColor: colors.coral,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.coral,
  },
  buttonText: {
    color: colors.white, 
    fontSize: 20, 
    textAlign: 'center', 
    fontWeight: 'bold'
  }
});
