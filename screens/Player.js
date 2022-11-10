import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  FlatList,
  Animated,
} from 'react-native';
import {meditationData} from '../appData';
import MeditationHeader from '../components/MeditationHeader';
import MeditationPlayer from '../components/MeditationPlayer';

const {widht, height} = Dimensions.get('window');

const Player = () => {
  const renderSongs = ({item, index}) => {
    return (
      <View style={style.mainWrapper}>
        <View style={[style.imageWrapper, style.elevation]}>
          <Image source={{uri: item.cover}} style={style.musicImage} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.mainContainerBG}>
      <ImageBackground
        source={{uri: meditationData.background}}
        resizeMode="cover"
        style={style.BGImage}>
        <View style={style.colorFix}>
          <MeditationHeader />
          <MeditationPlayer meditation={meditationData} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainContainerBG: {
    flex: 1,
  },
  BGImage: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  colorFix: {
    backgroundColor: '#00000066',
    width: '100%',
    height: '100%',
  },
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
});

export default Player;
