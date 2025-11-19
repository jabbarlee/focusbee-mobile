import "@/styles/global.css";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = 49 + insets.bottom;
  const floatingButtonHeight = 56;
  const totalBottomSpace = tabBarHeight + floatingButtonHeight + 24;

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingTop: insets.top + 20,
          paddingBottom: totalBottomSpace,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6">
          {/* Header Section */}
          <View className="mb-8">
            <Text className="text-5xl font-bold mb-2 text-foreground">
              Focus
            </Text>
            <Text className="text-lg text-muted-foreground">
              Let's build your focus habit today
            </Text>
          </View>

          {/* Quick Stats Grid */}
          <View className="mb-6">
            <View className="flex-row gap-3 mb-3">
              {/* Focus Time Card */}
              <View
                className="flex-1 p-5 rounded-2xl border border-border"
                style={{
                  backgroundColor: "#fffbf0",
                  shadowColor: "#f59e0b",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 12,
                  elevation: 4,
                }}
              >
                <Text className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  Today
                </Text>
                <Text className="text-4xl font-bold text-foreground mb-1">
                  24
                </Text>
                <Text className="text-xs font-medium text-primary">
                  minutes
                </Text>
              </View>

              {/* Streak Card */}
              <View
                className="flex-1 p-5 rounded-2xl border border-border"
                style={{
                  backgroundColor: "#fff8e1",
                  shadowColor: "#f59e0b",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 12,
                  elevation: 4,
                }}
              >
                <Text className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  Streak
                </Text>
                <View className="flex-row items-baseline gap-1 mb-1">
                  <Text className="text-4xl font-bold text-primary">5</Text>
                  <Text className="text-sm font-semibold text-foreground">
                    days
                  </Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Text className="text-lg">🔥</Text>
                  <Text className="text-xs font-medium text-muted-foreground">
                    Keep going!
                  </Text>
                </View>
              </View>
            </View>

            {/* Sessions Card - Full Width */}
            <View
              className="p-5 rounded-2xl border border-border"
              style={{
                backgroundColor: "#f0f9ff",
                shadowColor: "#3b82f6",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
                elevation: 4,
              }}
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Sessions Completed
                  </Text>
                  <Text className="text-3xl font-bold text-foreground">
                    3 sessions
                  </Text>
                  <Text className="text-xs font-medium text-chart-2 mt-1">
                    All completed successfully
                  </Text>
                </View>
                <View className="w-16 h-16 rounded-full bg-chart-2/20 items-center justify-center">
                  <Text className="text-2xl">✓</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Progress Section */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-xl font-bold text-foreground">
                Weekly Progress
              </Text>
              <Text className="text-sm font-medium text-muted-foreground">
                Mon - Sun
              </Text>
            </View>
            <View
              className="p-6 rounded-2xl bg-card border border-border"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              <View className="mb-4">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-sm font-semibold text-foreground">
                    This Week
                  </Text>
                  <Text className="text-sm font-bold text-primary">
                    120 min
                  </Text>
                </View>
                <View className="h-3 bg-muted rounded-full overflow-hidden">
                  <View
                    className="h-full bg-primary rounded-full"
                    style={{ width: "75%" }}
                  />
                </View>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-xs text-muted-foreground">
                  Goal: 160 minutes
                </Text>
                <Text className="text-xs font-semibold text-primary">75%</Text>
              </View>
            </View>
          </View>

          {/* Recent Activity */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-xl font-bold text-foreground">
                Recent Activity
              </Text>
              <Pressable>
                <Text className="text-sm font-semibold text-primary">
                  See all
                </Text>
              </Pressable>
            </View>

            {/* Activity Item 1 */}
            <View
              className="mb-3 p-4 rounded-xl bg-card border border-border"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.03,
                shadowRadius: 4,
                elevation: 1,
              }}
            >
              <View className="flex-row items-center gap-4">
                <View
                  className="w-12 h-12 rounded-xl items-center justify-center"
                  style={{ backgroundColor: "#fffbf0" }}
                >
                  <Text className="text-xl">☀️</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-foreground mb-0.5">
                    Morning Focus
                  </Text>
                  <Text className="text-xs text-muted-foreground">
                    Today • 9:00 AM • 25 minutes
                  </Text>
                </View>
                <View
                  className="px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: "#fffbf0" }}
                >
                  <Text className="text-xs font-bold text-primary">25m</Text>
                </View>
              </View>
            </View>

            {/* Activity Item 2 */}
            <View
              className="mb-3 p-4 rounded-xl bg-card border border-border"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.03,
                shadowRadius: 4,
                elevation: 1,
              }}
            >
              <View className="flex-row items-center gap-4">
                <View
                  className="w-12 h-12 rounded-xl items-center justify-center"
                  style={{ backgroundColor: "#f0f9ff" }}
                >
                  <Text className="text-xl">💼</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-foreground mb-0.5">
                    Deep Work
                  </Text>
                  <Text className="text-xs text-muted-foreground">
                    Yesterday • 2:30 PM • 45 minutes
                  </Text>
                </View>
                <View
                  className="px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: "#f0f9ff" }}
                >
                  <Text className="text-xs font-bold text-chart-2">45m</Text>
                </View>
              </View>
            </View>

            {/* Activity Item 3 */}
            <View
              className="p-4 rounded-xl bg-card border border-border"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.03,
                shadowRadius: 4,
                elevation: 1,
              }}
            >
              <View className="flex-row items-center gap-4">
                <View
                  className="w-12 h-12 rounded-xl items-center justify-center"
                  style={{ backgroundColor: "#f5f3ff" }}
                >
                  <Text className="text-xl">📚</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-foreground mb-0.5">
                    Study Session
                  </Text>
                  <Text className="text-xs text-muted-foreground">
                    Yesterday • 10:15 AM • 30 minutes
                  </Text>
                </View>
                <View
                  className="px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: "#f5f3ff" }}
                >
                  <Text className="text-xs font-bold text-chart-3">30m</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View
        className="absolute left-0 right-0 items-center"
        style={{
          bottom: tabBarHeight + 16,
        }}
      >
        <Pressable
          className="px-10 py-5 rounded-full items-center justify-center"
          style={{
            backgroundColor: "#bb4d00",
            shadowColor: "#bb4d00",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 16,
            elevation: 12,
            minWidth: 220,
          }}
          onPress={() => router.push("/ritual/setup")}
        >
          <Text className="text-lg font-bold text-primary-foreground">
            Start Focusing
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
