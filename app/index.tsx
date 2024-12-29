import { View, Text, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl font-work-black text-center text-primary">
          Hello, World!
        </Text>

        <Text className="text-xl font-work-medium text-secondary-100 text-center">
          Welcome to your new Expo app.
        </Text>

        <Text className="text-lg font-work-light text-center text-tertiary">
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
