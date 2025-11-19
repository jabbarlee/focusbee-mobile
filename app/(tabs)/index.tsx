import "@/styles/global.css";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  // Tab bar height is typically ~49px on iOS, plus safe area bottom
  const tabBarHeight = 49 + insets.bottom;
  const floatingButtonHeight = 56; // Button height + padding
  const totalBottomSpace = tabBarHeight + floatingButtonHeight + 24; // 24px gap

  return (
    <View className="flex-1 bg-secondary">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingTop: insets.top + 8,
          paddingBottom: totalBottomSpace,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5 pt-6 pb-6">
          {/* WelcomeHeader */}
          <View className="mb-8">
            <Text className="text-4xl font-bold mb-2 text-foreground">
              Welcome back 👋
            </Text>
            <Text className="text-base text-muted-foreground">
              Ready to focus?
            </Text>
          </View>

          {/* TodayStats */}
          <View className="mb-6">
            <Text className="text-xl font-semibold mb-4 text-foreground">
              Today
            </Text>
            <View className="flex-row gap-3">
              {/* Focus Minutes Card */}
              <View
                className="flex-1 p-5 rounded-2xl bg-card border border-border"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  elevation: 2,
                  backgroundColor: "#fffbf0",
                }}
              >
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Focus Minutes
                  </Text>
                  <View className="w-8 h-8 rounded-full bg-chart-4/20 items-center justify-center">
                    <Text className="text-sm">⏱️</Text>
                  </View>
                </View>
                <Text className="text-3xl font-bold text-foreground">24</Text>
                <Text className="text-xs text-success font-medium mt-1">
                  +12% from yesterday
                </Text>
              </View>

              {/* Sessions Card */}
              <View
                className="flex-1 p-5 rounded-2xl bg-card border border-border"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  elevation: 2,
                  backgroundColor: "#f0f9ff",
                }}
              >
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Sessions
                  </Text>
                  <View className="w-8 h-8 rounded-full bg-chart-2/20 items-center justify-center">
                    <Text className="text-sm">✓</Text>
                  </View>
                </View>
                <Text className="text-3xl font-bold text-foreground">3</Text>
                <Text className="text-xs text-chart-2 font-medium mt-1">
                  Perfect focus
                </Text>
              </View>
            </View>
          </View>

          {/* Streak Section */}
          <View
            className="mb-6 p-6 rounded-2xl border border-border"
            style={{
              shadowColor: "#f59e0b",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 12,
              elevation: 4,
              backgroundColor: "#fff8e1",
            }}
          >
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-1">
                <Text className="text-sm font-medium mb-1 text-muted-foreground uppercase tracking-wide">
                  Current Streak
                </Text>
                <View className="flex-row items-center gap-2">
                  <Text className="text-3xl font-bold text-primary">5</Text>
                  <Text className="text-lg font-semibold text-foreground">
                    days
                  </Text>
                </View>
              </View>
              <View className="w-16 h-16 rounded-full bg-primary/10 items-center justify-center">
                <Text className="text-3xl">🔥</Text>
              </View>
            </View>
            <View className="flex-row items-center gap-2">
              <View className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                <View
                  className="h-full bg-primary rounded-full"
                  style={{ width: "50%" }}
                />
              </View>
              <Text className="text-xs font-semibold text-primary">5/10</Text>
            </View>
          </View>

          {/* RecentSessions */}
          <View>
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-xl font-semibold text-foreground">
                Recent Sessions
              </Text>
              <Pressable className="px-3 py-1.5 rounded-lg bg-primary/10">
                <Text className="text-sm font-semibold text-primary">
                  View All
                </Text>
              </Pressable>
            </View>

            {/* Session Item 1 */}
            <View
              className="mb-3 p-4 rounded-2xl bg-card border-l-4"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.04,
                shadowRadius: 6,
                elevation: 2,
                borderLeftColor: "#f59e0b",
              }}
            >
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-chart-1/10 items-center justify-center">
                  <Text className="text-lg">☀️</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-card-foreground mb-0.5">
                    Morning Focus
                  </Text>
                  <Text className="text-xs text-muted-foreground">
                    Today at 9:00 AM
                  </Text>
                </View>
                <View className="px-3 py-2 rounded-xl bg-chart-1/10">
                  <Text className="text-sm font-bold text-chart-1">25 min</Text>
                </View>
              </View>
            </View>

            {/* Session Item 2 */}
            <View
              className="mb-3 p-4 rounded-2xl bg-card border-l-4"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.04,
                shadowRadius: 6,
                elevation: 2,
                borderLeftColor: "#3b82f6",
              }}
            >
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-chart-2/10 items-center justify-center">
                  <Text className="text-lg">💼</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-card-foreground mb-0.5">
                    Deep Work
                  </Text>
                  <Text className="text-xs text-muted-foreground">
                    Yesterday at 2:30 PM
                  </Text>
                </View>
                <View className="px-3 py-2 rounded-xl bg-chart-2/10">
                  <Text className="text-sm font-bold text-chart-2">45 min</Text>
                </View>
              </View>
            </View>

            {/* Session Item 3 */}
            <View
              className="mb-3 p-4 rounded-2xl bg-card border-l-4"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.04,
                shadowRadius: 6,
                elevation: 2,
                borderLeftColor: "#6366f1",
              }}
            >
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-chart-3/10 items-center justify-center">
                  <Text className="text-lg">📚</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-card-foreground mb-0.5">
                    Study Session
                  </Text>
                  <Text className="text-xs text-muted-foreground">
                    Yesterday at 10:15 AM
                  </Text>
                </View>
                <View className="px-3 py-2 rounded-xl bg-chart-3/10">
                  <Text className="text-sm font-bold text-chart-3">30 min</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button - Positioned above tab bar */}
      <View
        className="absolute left-0 right-0 items-center"
        style={{
          bottom: tabBarHeight + 16,
        }}
      >
        <Pressable
          className="px-8 py-4 rounded-full bg-primary items-center justify-center"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 12,
            elevation: 8,
            minWidth: 200,
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
