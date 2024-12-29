import { View, Text, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl font-work-black text-center color-blue-500">
          Hello, World!
        </Text>

        <Text className="text-lg font-work-medium text-center">
          Welcome to your new Expo app.
        </Text>

        <Text className="text-lg font-work-light text-center">
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
