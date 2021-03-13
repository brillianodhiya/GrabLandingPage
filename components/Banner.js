import React from 'react';
import {StyleSheet, View, Dimensions, Image, Text} from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.imgBanner}
          source={{
            uri:
              'https://assets.grab.com/wp-content/uploads/sites/9/2020/05/13153339/GrabInsure-COVID-19_1300x550.jpg',
          }}
        />
      </View>
      <Text style={styles.textTitle}>
        Bagaimana cara kerja Proteksi COVID-19
      </Text>
      <Text style={styles.textSubTitle}>Ditanggung oleh PFI MEGA LIFE</Text>
    </View>
  );
};

const win = Dimensions.get('window');
const ratio = win.width / 900;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'white',
  },
  imgContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    width: win.width - 10,
    overflow: 'hidden',
    borderRadius: 4,
  },
  imgBanner: {
    position: 'relative',
    width: win.width,
    height: 362 * ratio,
    borderRadius: 4,
  },
  textTitle: {
    paddingLeft: 10,
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textSubTitle: {
    paddingLeft: 10,
    paddingTop: 4,
    color: 'gray',
    fontSize: 14,
  },
});

export default Banner;
