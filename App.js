import {View, StyleSheet} from 'react-native';
import React from 'react';
import Player from './screens/Player';

const App = () => {
  return (
    <View style={style.container}>
      <Player />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
