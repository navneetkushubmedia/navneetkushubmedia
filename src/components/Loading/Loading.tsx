import React from 'react';
import AnimatedLoader from 'react-native-animated-loader';
import ImagePath from '../../constants/ImagePath';

function Loading() {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(0,0,0, 0.2)"
      source={ImagePath.apiLoaderAnimation}
      animationStyle={{
        width: 100,
        height: 100,
      }}
      speed={1}
    >
      {/* <Text style={{ marginTop: -10 }}>Please wait...</Text> */}
    </AnimatedLoader>
  );
}

export default Loading;
