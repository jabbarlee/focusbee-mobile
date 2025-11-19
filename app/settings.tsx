import "@/styles/global.css";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Tab() {
  return (
    <ScrollView className="flex-1 bg-black">
      <View className="flex-1 px-4 py-8">
        {/* Header Glass Card */}
        <View className="mb-6 rounded-3xl bg-white/10 border border-white/20 p-6">
          <Text className="text-3xl font-bold text-white mb-2">
            Settings
          </Text>
          <Text className="text-white/70 text-base">
            Configure your preferences
          </Text>
        </View>

        {/* Settings Options */}
        <View className="gap-4">
          <View className="rounded-2xl bg-white/10 border border-white/20 p-5">
            <Text className="text-lg font-semibold text-white mb-2">
              🔔 Notifications
            </Text>
            <Text className="text-white/70 text-sm">
              Manage notification preferences
            </Text>
          </View>

          <View className="rounded-2xl bg-white/10 border border-white/20 p-5">
            <Text className="text-lg font-semibold text-white mb-2">
              🎨 Appearance
            </Text>
            <Text className="text-white/70 text-sm">
              Customize theme and colors
            </Text>
          </View>

          <View className="rounded-2xl bg-white/10 border border-white/20 p-5">
            <Text className="text-lg font-semibold text-white mb-2">
              ⚙️ General
            </Text>
            <Text className="text-white/70 text-sm">
              App settings and preferences
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

