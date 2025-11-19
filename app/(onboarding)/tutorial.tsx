import "@/styles/global.css";
import { View, Text } from "react-native";

export default function TutorialScreen() {
  return (
    <View className="flex-1 bg-black items-center justify-center px-4">
      <Text className="text-4xl font-bold text-white mb-4">Tutorial</Text>
      <Text className="text-white/70 text-base text-center">
        Walkthrough of the ritual flow
      </Text>
    </View>
  );
}

