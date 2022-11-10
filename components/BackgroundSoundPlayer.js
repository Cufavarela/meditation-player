import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const BackgroundSoundPlayer = ({song}) => {
  return (
    <View style={style.mainImageWrapper}>
      <View style={[style.imageWrapper, style.elevation]}>
        <Image source={{uri: song.cover}} style={style.soundImage} />
        <Text style={style.bgSoundName}>{song.name}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  elevation: {
    elevation: 5,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  mainImageWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  soundImage: {
    width: '100%',
    height: '100%',
  },
  bgSoundName: {
    fontSize: 18,
    color: 'white',
  },
});

export default BackgroundSoundPlayer;
