import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {sounds} from '../appData';
import BackgroundSoundItem from './BackgroundSoundItem';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

var Sound = require('react-native-sound');

const BackgroundSoundPlayerContainer = () => {
  const [soundIndex, setSoundIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [isPlaying, setIsPlaying] = useState(false);

  let BGaudio = null;

  useEffect(() => {
    console.log('INDEX', soundIndex, sounds[soundIndex]);
    BGaudio = new Sound(sounds[soundIndex].sound, null, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      console.log('duration in seconds: ' + BGaudio.getDuration());
    });
    BGaudio.release();
    BGaudio.setNumberOfLoops(-1);
    console.log(BGaudio);
  }, [soundIndex]);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      const index = Math.round(value / 120);
      setSoundIndex(index);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const renderSongView = ({item}) => {
    return <BackgroundSoundItem sound={item} />;
  };

  return (
    <View style={style.sliderMainContainer}>
      <View style={style.sliderContainer}>
        <Animated.FlatList
          data={sounds}
          renderItem={renderSongView}
          keyExtractor={item => item.id}
          // ref={songSlider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />
        <View style={style.bgSoundCtrlContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsPlaying(true);
              BGaudio.play();
            }}>
            <MaterialIcons name="play-arrow" size={40} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsPlaying(false);
              BGaudio.pause();
            }}>
            <MaterialIcons name="pause" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
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
  sliderMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  sliderContainer: {
    backgroundColor: '#00000066',
    width: 120,
    borderRadius: 16,
  },
  bgSoundCtrlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default BackgroundSoundPlayerContainer;
