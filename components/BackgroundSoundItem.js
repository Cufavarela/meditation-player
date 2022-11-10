import {View, Text, StyleSheet, Animated, Image} from 'react-native';
import React from 'react';

const BackgroundSoundItem = ({sound}) => {
  return (
    <Animated.View style={style.mainImageWrapper}>
      <View style={[style.imageWrapper, style.elevation]}>
        <Image source={{uri: sound.cover}} style={style.soundImage} />
        <Text style={style.bgSoundName}>{sound.name}</Text>
      </View>
    </Animated.View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: 10,
  },
  soundImage: {
    width: '100%',
    height: '100%',
  },
  bgSoundName: {
    fontSize: 18,
    color: 'white',
    position: 'absolute',
    top: 40,
  },
});

export default BackgroundSoundItem;
