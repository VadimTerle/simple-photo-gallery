import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Constants
import colors from '../../../constants/colors';

const AuthorInfo = ({ name, camera }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.name]}>{name}</Text>
      <Text style={styles.text}>{camera}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: wp(5),
    bottom: hp(5),
  },
  text: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: wp(4.5),
  },
  name: {
    fontSize: wp(6),
  },
});

export default AuthorInfo;
