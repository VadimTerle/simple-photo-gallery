import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Components
import GalleryItem from './components/GalleryItem';

// Actions
import { getImages, setPage } from './photoGallerySlice';
import { setId } from '../PhotoDetails/photoDetailsSlice';

// Constants
import colors from '../../constants/colors';
import screensNames from '../../constants/screensNames';

const PhotoGallery = ({ navigation }) => {
  const dispatch = useDispatch();

  const { page, images, hasMore } = useSelector(({ photoGallery }) => ({
    page: photoGallery.page,
    images: photoGallery.images,
    hasMore: photoGallery.hasMore,
  }));

  useEffect(() => {
    dispatch(getImages(page));
  }, [page, dispatch]);

  const selectPicture = (id) => {
    dispatch(setId(id));
    navigation.navigate(screensNames.PHOTO_DETAILS);
  };

  const onEndReached = () => {
    if (hasMore) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        extraData={page}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, cropped_picture } }) => (
          <GalleryItem
            source={cropped_picture}
            onPress={() => selectPicture(id)}
          />
        )}
        numColumns={2}
        onEndReached={onEndReached}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLACK,
    flex: 1,
  },
});

export default PhotoGallery;
