import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {meditationData} from '../appData';
import VolumenSlider from './VolumenSlider';

const {width, height} = Dimensions.get('window');

var Sound = require('react-native-sound');

var audio = new Sound(meditationData.sound, null, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log(
    'duration in seconds: ' +
      audio.getDuration() +
      'number of channels: ' +
      audio.getNumberOfChannels(),
  );
});

const MeditationPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [sliderValue, setSliderValue] = useState([0, 100]);

  useEffect(() => {
    audio.release();
  }, []);

  useEffect(() => {
    let timer = null;
    if (isCounting) {
      timer = setInterval(() => {
        setTime(time => time + 1000);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isCounting]);

  useEffect(() => {
    audio.setVolume(sliderValue / 100);
  }, [sliderValue]);

  return (
    <View style={style.meditationPlayerContainer}>
      <View style={style.meditationPlayer}>
        <TouchableOpacity
          onPress={() => {
            console.log('Audio example does not contain duration info. 🤷‍♂️');
          }}>
          <MaterialIcons name="replay-10" size={40} color="#fff" />
        </TouchableOpacity>

        <View style={style.mainPlayPauseBtnContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsPlaying(!isPlaying);
              setIsCounting(!isCounting);
              if (isPlaying) {
                audio.pause();
              } else {
                audio.play();
              }
            }}>
            <View style={style.playPauseBtnContainer}>
              {isPlaying ? (
                <MaterialIcons name="pause" size={80} color="#fff" />
              ) : (
                <MaterialIcons name="play-arrow" size={80} color="#fff" />
              )}
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            console.log('Audio example does not contain duration info. 🤷‍♂️');
          }}>
          <MaterialIcons name="forward-10" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={style.timerContainer}>
        <View>
          <Text style={style.digits}>
            {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
          </Text>
        </View>
        <View>
          <Text style={style.digits}>
            {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
          </Text>
        </View>
      </View>
      <View style={style.volumenSliderContainer}>
        <Text style={{color: 'white'}}>0</Text>
        <View
          style={{
            width: '60%',
            marginHorizontal: 5,
          }}>
          <VolumenSlider
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
          />
        </View>
        <Text style={{color: 'white'}}>100</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  meditationPlayerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width,
    marginVertical: 30,
    padding: 15,
  },
  meditationPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 30,
  },
  mainPlayPauseBtnContainer: {
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 360,
    padding: 20,
  },
  playPauseBtnContainer: {
    backgroundColor: '#7969cb',
    borderRadius: 360,
  },
  timerContainer: {
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  digits: {
    color: 'white',
    fontSize: 20,
  },
  volumenSliderContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
});

export default MeditationPlayer;
