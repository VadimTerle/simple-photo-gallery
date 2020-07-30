import React from 'react';
import { StyleSheet } from 'react-native';
import Image from 'react-native-fast-image';
import ImageZoom from 'react-native-image-pan-zoom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Picture = ({ image }) => {
  return (
    <ImageZoom
      cropWidth={wp(100)}
      cropHeight={hp(100)}
      imageWidth={wp(95)}
      imageHeight={hp(100)}>
      <Image
        style={styles.image}
        source={{ uri: image }}
        resizeMode="contain"
      />
    </ImageZoom>
  );
};

const styles = StyleSheet.create({
  image: {
    width: wp(95),
    height: hp(100),
  },
});

export default Picture;
