import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const VolumenSlider = ({sliderValue, setSliderValue}) => {
  const sliderValuesChange = value => setSliderValue(value);

  return (
    <MultiSlider
      markerStyle={{
        ...Platform.select({
          ios: {
            height: 30,
            width: 30,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowRadius: 1,
            shadowOpacity: 0.1,
          },
          android: {
            height: 25,
            width: 25,
            borderRadius: 50,
            borderColor: '#fff',
            borderWidth: 2,
            backgroundColor: '#7969cb',
          },
        }),
      }}
      pressedMarkerStyle={{
        ...Platform.select({
          android: {
            height: 25,
            width: 25,
            borderRadius: 20,
            backgroundColor: '#9c8fdf',
          },
        }),
      }}
      selectedStyle={{
        backgroundColor: '#7969cb',
      }}
      trackStyle={{
        backgroundColor: '#9c8fdf',
        height: 3,
      }}
      values={[sliderValue[0]]}
      sliderLength={220}
      onValuesChange={sliderValuesChange}
      min={0}
      max={100}
    />
  );
};

export default VolumenSlider;
