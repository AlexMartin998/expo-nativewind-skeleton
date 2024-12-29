import { View, Text } from 'react-native';

import { Slot } from 'expo-router';

import './global.css';

const RootLayout = () => {
  return (
    <View>
      {/* --- ROUTER: app/ --- */}
      <Slot />
    </View>
  );
};

export default RootLayout;
