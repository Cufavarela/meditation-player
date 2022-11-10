import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {meditationData} from '../appData';

const MeditationHeader = () => {
  return (
    <View style={style.meditationHeader}>
      <Text style={[style.meditationTitle, style.elevation]}>
        {meditationData.name}
      </Text>
      <Text style={[style.meditationSubtitle, style.elevation]}>
        {meditationData.description}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  meditationHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  meditationTitle: {
    color: 'white',
    fontSize: 27,
    fontWeight: '900',
    marginVertical: 10,
  },
  meditationSubtitle: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
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

export default MeditationHeader;
