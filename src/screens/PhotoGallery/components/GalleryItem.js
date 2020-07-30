import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Image from 'react-native-fast-image';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const GalleryItem = React.memo(({ source, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: source }} style={styles.image} />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    marginHorizontal: wp(1),
    marginVertical: wp(1),
    height: wp(45),
  },
});

export default GalleryItem;
