import "@/styles/global.css";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Tab() {
  return (
    <ScrollView className="flex-1 bg-black">
      <View className="flex-1 px-4 py-8">
        {/* Header Glass Card */}
        <View className="mb-6 rounded-3xl bg-white/10 border border-white/20 p-6">
          <Text className="text-3xl font-bold text-white mb-2">
            Liquid Glass
          </Text>
          <Text className="text-white/70 text-base">
            Beautiful glassmorphism components
          </Text>
        </View>

        {/* Stats Cards Row */}
        <View className="flex-row gap-4 mb-6">
          <View className="flex-1 rounded-2xl bg-white/10 border border-white/20 p-4">
            <Text className="text-white/60 text-sm mb-1">Today</Text>
            <Text className="text-2xl font-bold text-white">24</Text>
          </View>
          <View className="flex-1 rounded-2xl bg-white/10 border border-white/20 p-4">
            <Text className="text-white/60 text-sm mb-1">Week</Text>
            <Text className="text-2xl font-bold text-white">168</Text>
          </View>
        </View>

        {/* Main Content Card */}
        <View className="rounded-3xl bg-white/10 border border-white/20 p-6 mb-6">
          <Text className="text-xl font-semibold text-white mb-3">
            Focus Session
          </Text>
          <Text className="text-white/80 text-base mb-4">
            Start your productivity journey with beautiful glass components
          </Text>
          <Pressable className="bg-white/20 border border-white/30 rounded-xl py-3 px-6 active:bg-white/30">
            <Text className="text-white font-semibold text-center">
              Get Started
            </Text>
          </Pressable>
        </View>

        {/* Feature Cards */}
        <View className="gap-4">
          <View className="rounded-2xl bg-white/10 border border-white/20 p-5">
            <Text className="text-lg font-semibold text-white mb-2">
              ✨ Smooth Animations
            </Text>
            <Text className="text-white/70 text-sm">
              Fluid transitions and interactions
            </Text>
          </View>
          <View className="rounded-2xl bg-white/10 border border-white/20 p-5">
            <Text className="text-lg font-semibold text-white mb-2">
              🎨 Modern Design
            </Text>
            <Text className="text-white/70 text-sm">
              Clean and elegant interface
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
