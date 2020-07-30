import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Share } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Fab, Icon } from 'native-base';

// Components
import Picture from './components/Picture';
import AuthorInfo from './components/AuthorInfo';

// Actions
import { getImageDetails } from './photoDetailsSlice';

// Constants
import colors from '../../constants/colors';

const PhotoDetails = () => {
  const dispatch = useDispatch();

  const { id, image, authorInfo } = useSelector(({ photoDetails }) => ({
    id: photoDetails.id,
    image: photoDetails.image,
    authorInfo: photoDetails.authorInfo,
  }));

  useEffect(() => {
    if (id) {
      dispatch(getImageDetails(id));
    }
  }, [id, dispatch]);

  const onShare = () => {
    Share.share({ message: image });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Picture image={image} />

      <AuthorInfo name={authorInfo.name} camera={authorInfo.camera} />

      <Fab style={styles.fab} onPress={onShare}>
        <Icon name="share-social" />
      </Fab>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLACK,
  },
  fab: {
    backgroundColor: colors.PASTEL_GREEN,
  },
});

export default PhotoDetails;
