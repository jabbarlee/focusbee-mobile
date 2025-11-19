import "@/styles/global.css";
import { View, Text, ScrollView, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-8 pb-6">
        {/* WelcomeHeader */}
        <View className="mb-6">
          <Text className="text-3xl font-semibold mb-1 text-foreground">
            Welcome back
          </Text>
          <Text className="text-base text-muted-foreground">
            Ready to focus?
          </Text>
        </View>

        {/* QuickStartCard with accent background */}
        <View className="mb-6 p-6 rounded-xl bg-accent border border-border">
          <Text className="text-xl font-semibold mb-1 text-accent-foreground">
            Quick Start
          </Text>
          <Text className="text-sm mb-4 text-muted-foreground">
            Start a focus session instantly
          </Text>
          <Pressable className="py-4 px-6 rounded-md items-center bg-primary">
            <Text className="text-base font-semibold text-primary-foreground">
              Start Ritual
            </Text>
          </Pressable>
        </View>

        {/* TodayStats */}
        <View className="mb-6">
          <Text className="text-2xl font-semibold mb-4 text-foreground">
            Today
          </Text>
          <View className="flex-row gap-4">
            {/* Focus Minutes Card */}
            <View className="flex-1 p-4 rounded-xl bg-secondary border border-border">
              <Text className="text-xs mb-1 text-muted-foreground">
                Focus Minutes
              </Text>
              <Text className="text-2xl font-bold text-foreground">
                24
              </Text>
            </View>

            {/* Sessions Card */}
            <View className="flex-1 p-4 rounded-xl bg-secondary border border-border">
              <Text className="text-xs mb-1 text-muted-foreground">
                Sessions
              </Text>
              <Text className="text-2xl font-bold text-foreground">
                3
              </Text>
            </View>
          </View>
        </View>

        {/* Streak Section with accent background */}
        <View className="mb-6 p-6 rounded-xl bg-accent border border-border">
          <View className="flex-row items-center justify-between mb-1">
            <Text className="text-xl font-semibold text-accent-foreground">
              Current Streak
            </Text>
            <View className="px-3 py-1 rounded-full bg-primary">
              <Text className="text-lg font-bold text-primary-foreground">
                5 days
              </Text>
            </View>
          </View>
          <Text className="text-sm text-muted-foreground">
            Keep it going! 🔥
          </Text>
        </View>

        {/* RecentSessions */}
        <View>
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-2xl font-semibold text-foreground">
              Recent Sessions
            </Text>
            <Pressable>
              <Text className="text-sm font-medium text-primary">
                View All
              </Text>
            </Pressable>
          </View>

          {/* Session Item 1 */}
          <View className="mb-2 p-4 rounded-xl bg-card border border-border">
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-base font-semibold text-card-foreground">
                Morning Focus
              </Text>
              <View className="px-2 py-1 rounded-md bg-chart-1/10">
                <Text className="text-sm font-medium text-chart-1">
                  25 min
                </Text>
              </View>
            </View>
            <Text className="text-xs text-muted-foreground">
              Today at 9:00 AM
            </Text>
          </View>

          {/* Session Item 2 */}
          <View className="mb-2 p-4 rounded-xl bg-card border border-border">
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-base font-semibold text-card-foreground">
                Deep Work
              </Text>
              <View className="px-2 py-1 rounded-md bg-chart-2/10">
                <Text className="text-sm font-medium text-chart-2">
                  45 min
                </Text>
              </View>
            </View>
            <Text className="text-xs text-muted-foreground">
              Yesterday at 2:30 PM
            </Text>
          </View>

          {/* Session Item 3 */}
          <View className="p-4 rounded-xl bg-card border border-border">
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-base font-semibold text-card-foreground">
                Study Session
              </Text>
              <View className="px-2 py-1 rounded-md bg-chart-1/10">
                <Text className="text-sm font-medium text-chart-1">
                  30 min
                </Text>
              </View>
            </View>
            <Text className="text-xs text-muted-foreground">
              Yesterday at 10:15 AM
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
