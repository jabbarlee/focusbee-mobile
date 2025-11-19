import "@/styles/global.css";
import { View, Text, ScrollView, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-4 pt-8 pb-6">
        {/* WelcomeHeader */}
        <View className="mb-6">
          <Text className="text-3xl font-semibold mb-1 text-[#252525]">
            Welcome back
          </Text>
          <Text className="text-base text-[#252525]/70">
            Ready to focus?
          </Text>
        </View>

        {/* QuickStartCard */}
        <View className="mb-6 p-6 rounded-xl bg-white border border-[#ebebeb]">
          <Text className="text-xl font-semibold mb-1 text-[#252525]">
            Quick Start
          </Text>
          <Text className="text-sm mb-4 text-[#252525]/70">
            Start a focus session instantly
          </Text>
          <Pressable className="py-4 px-6 rounded-md items-center bg-[#f59e0b]">
            <Text className="text-base font-semibold text-[#fef3c7]">
              Start Ritual
            </Text>
          </Pressable>
        </View>

        {/* TodayStats */}
        <View className="mb-6">
          <Text className="text-2xl font-semibold mb-4 text-[#252525]">
            Today
          </Text>
          <View className="flex-row gap-4">
            {/* Focus Minutes Card */}
            <View className="flex-1 p-4 rounded-xl bg-white border border-[#ebebeb]">
              <Text className="text-xs mb-1 text-[#252525]/60">
                Focus Minutes
              </Text>
              <Text className="text-2xl font-bold text-[#252525]">
                24
              </Text>
            </View>

            {/* Sessions Card */}
            <View className="flex-1 p-4 rounded-xl bg-white border border-[#ebebeb]">
              <Text className="text-xs mb-1 text-[#252525]/60">
                Sessions
              </Text>
              <Text className="text-2xl font-bold text-[#252525]">
                3
              </Text>
            </View>
          </View>
        </View>

        {/* Streak Section */}
        <View className="mb-6 p-6 rounded-xl bg-white border border-[#ebebeb]">
          <View className="flex-row items-center justify-between mb-1">
            <Text className="text-xl font-semibold text-[#252525]">
              Current Streak
            </Text>
            <Text className="text-lg font-bold text-[#f59e0b]">
              5 days
            </Text>
          </View>
          <Text className="text-sm text-[#252525]/70">
            Keep it going! 🔥
          </Text>
        </View>

        {/* RecentSessions */}
        <View>
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-2xl font-semibold text-[#252525]">
              Recent Sessions
            </Text>
            <Pressable>
              <Text className="text-sm font-medium text-[#f59e0b]">
                View All
              </Text>
            </Pressable>
          </View>

          {/* Session Item 1 */}
          <View className="mb-2 p-4 rounded-xl bg-white border border-[#ebebeb]">
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-base font-semibold text-[#252525]">
                Morning Focus
              </Text>
              <Text className="text-sm text-[#252525]/60">
                25 min
              </Text>
            </View>
            <Text className="text-xs text-[#252525]/70">
              Today at 9:00 AM
            </Text>
          </View>

          {/* Session Item 2 */}
          <View className="mb-2 p-4 rounded-xl bg-white border border-[#ebebeb]">
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-base font-semibold text-[#252525]">
                Deep Work
              </Text>
              <Text className="text-sm text-[#252525]/60">
                45 min
              </Text>
            </View>
            <Text className="text-xs text-[#252525]/70">
              Yesterday at 2:30 PM
            </Text>
          </View>

          {/* Session Item 3 */}
          <View className="p-4 rounded-xl bg-white border border-[#ebebeb]">
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-base font-semibold text-[#252525]">
                Study Session
              </Text>
              <Text className="text-sm text-[#252525]/60">
                30 min
              </Text>
            </View>
            <Text className="text-xs text-[#252525]/70">
              Yesterday at 10:15 AM
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
