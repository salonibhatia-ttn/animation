/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, Animated, View} from 'react-native';

const Rotate = () => {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const handleAnimation = async () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  return (
    <View style={{width: 400, height: 700, backgroundColor: 'skyblue'}}>
      <TouchableOpacity
        onPress={handleAnimation()}
        style={{
          width: 100,
          height: 600,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Animated.Text
          style={{
            fontSize: 30,
            color: 'red',
            fontWeight: 'bold',
            transform: [
              {
                rotate: rotateAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '1440deg'],
                }),
              },
            ],
          }}>
          Task 1
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default Rotate;
