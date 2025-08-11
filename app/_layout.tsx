import React from 'react';
import { Text, View } from 'react-native';

// tailwind css ------
import './../global.css';

const RootLayout = () => {
  return (
    <View>
      <Text className="text-3xl text-blue-500">RootLayout</Text>
    </View>
  );
};

export default RootLayout;
