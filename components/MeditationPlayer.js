import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SoundPlayer from 'react-native-sound-player';

const {width, height} = Dimensions.get('window');

const MeditationPlayer = ({meditation}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getInfo = async () => {
    try {
      const info = await SoundPlayer.getInfo(); // Also, you need to await this because it is async
      console.log('getInfo', info); // {duration: 12.416, currentTime: 7.691}
    } catch (e) {
      console.log('There is no song playing', e);
    }
  };

  useEffect(() => {
    SoundPlayer.loadUrl(meditation.sound);
    getInfo();
  }, []);

  return (
    <View style={style.meditationPlayerContainer}>
      <View style={style.meditationPlayer}>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons name="replay-10" size={40} color="#fff" />
        </TouchableOpacity>

        <View style={style.mainPlayPauseBtnContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsPlaying(!isPlaying);
              if (isPlaying) {
                SoundPlayer.pause();
              } else {
                SoundPlayer.play();
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

        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons name="forward-10" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={style.timerContainer}>
        <Text style={style.timer}>2:25</Text>
      </View>
      <View>
        <Text style={{color: 'white', marginVertical: 20}}>x1.0</Text>
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
  timer: {
    color: 'white',
    fontSize: 18,
  },
});

export default MeditationPlayer;
