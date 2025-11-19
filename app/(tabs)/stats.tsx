import "@/styles/global.css";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function StatsScreen() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = 49 + insets.bottom;
  const totalBottomSpace = tabBarHeight + 24;

  // Sample data - in real app this would come from state/store
  const weeklyData = [
    { day: "Mon", minutes: 45 },
    { day: "Tue", minutes: 30 },
    { day: "Wed", minutes: 60 },
    { day: "Thu", minutes: 25 },
    { day: "Fri", minutes: 50 },
    { day: "Sat", minutes: 40 },
    { day: "Sun", minutes: 35 },
  ];
  const maxMinutes = Math.max(...weeklyData.map((d) => d.minutes));

  const achievements = [
    { id: 1, title: "First Flight", icon: "🎯", unlocked: true },
    { id: 2, title: "3-Day Streak", icon: "🔥", unlocked: true },
    { id: 3, title: "Week Warrior", icon: "⭐", unlocked: false },
    { id: 4, title: "Perfect Focus", icon: "✨", unlocked: true },
  ];

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
              Statistics
            </Text>
            <Text className="text-lg text-muted-foreground">
              Track your focus journey
            </Text>
          </View>

          {/* Overall Stats Grid */}
          <View className="mb-6">
            <View className="flex-row gap-3 mb-3">
              {/* Total Focus Time */}
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
                  Total Time
                </Text>
                <Text className="text-4xl font-bold text-foreground mb-1">
                  285
                </Text>
                <Text className="text-xs font-medium text-primary">minutes</Text>
              </View>

              {/* Total Sessions */}
              <View
                className="flex-1 p-5 rounded-2xl border border-border"
                style={{
                  backgroundColor: "#f0f9ff",
                  shadowColor: "#3b82f6",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 12,
                  elevation: 4,
                }}
              >
                <Text className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  Sessions
                </Text>
                <Text className="text-4xl font-bold text-foreground mb-1">
                  42
                </Text>
                <Text className="text-xs font-medium text-chart-2">completed</Text>
              </View>
            </View>

            {/* Streak & Credits Row */}
            <View className="flex-row gap-3">
              {/* Current Streak */}
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
                    Best: 7 days
                  </Text>
                </View>
              </View>

              {/* Focus Credits */}
              <View
                className="flex-1 p-5 rounded-2xl border border-border"
                style={{
                  backgroundColor: "#f5f3ff",
                  shadowColor: "#6366f1",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 12,
                  elevation: 4,
                }}
              >
                <Text className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  Credits
                </Text>
                <Text className="text-4xl font-bold text-foreground mb-1">
                  285
                </Text>
                <Text className="text-xs font-medium text-chart-3">earned</Text>
              </View>
            </View>
          </View>

          {/* Weekly Chart */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-xl font-bold text-foreground">
                Weekly Overview
              </Text>
              <Text className="text-sm font-medium text-muted-foreground">
                This Week
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
              {/* Chart Bars */}
              <View className="flex-row items-end justify-between gap-2 mb-4">
                {weeklyData.map((item, index) => (
                  <View key={index} className="flex-1 items-center">
                    <View className="w-full items-center">
                      <View
                        className="w-full rounded-t-lg mb-2"
                        style={{
                          height: (item.minutes / maxMinutes) * 120,
                          backgroundColor:
                            item.minutes === maxMinutes
                              ? "#bb4d00"
                              : "#bb4d00" + "80",
                          minHeight: 8,
                        }}
                      />
                      <Text className="text-xs font-semibold text-foreground">
                        {item.minutes}
                      </Text>
                    </View>
                    <Text className="text-xs text-muted-foreground mt-2">
                      {item.day}
                    </Text>
                  </View>
                ))}
              </View>
              <View className="flex-row items-center justify-between pt-4 border-t border-border">
                <Text className="text-sm font-semibold text-foreground">
                  Total: 285 min
                </Text>
                <Text className="text-sm font-semibold text-primary">
                  Avg: 41 min/day
                </Text>
              </View>
            </View>
          </View>

          {/* Achievements Section */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-xl font-bold text-foreground">
                Achievements
              </Text>
              <Text className="text-sm font-medium text-muted-foreground">
                3 of 4 unlocked
              </Text>
            </View>
            <View className="flex-row flex-wrap gap-3">
              {achievements.map((achievement) => (
                <View
                  key={achievement.id}
                  className="flex-1 min-w-[45%] p-4 rounded-xl border border-border"
                  style={{
                    backgroundColor: achievement.unlocked
                      ? "#fffbf0"
                      : "#f7f7f7",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: achievement.unlocked ? 0.05 : 0.02,
                    shadowRadius: 4,
                    elevation: achievement.unlocked ? 2 : 1,
                    opacity: achievement.unlocked ? 1 : 0.6,
                  }}
                >
                  <View className="items-center">
                    <Text className="text-3xl mb-2">{achievement.icon}</Text>
                    <Text
                      className={`text-sm font-semibold text-center ${
                        achievement.unlocked
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {achievement.title}
                    </Text>
                    {achievement.unlocked && (
                      <View className="mt-2 px-2 py-0.5 rounded-full bg-primary/10">
                        <Text className="text-xs font-bold text-primary">
                          Unlocked
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Monthly Summary */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-foreground mb-4">
              This Month
            </Text>
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
              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-1">
                  <Text className="text-sm font-semibold text-foreground mb-1">
                    Focus Minutes
                  </Text>
                  <Text className="text-2xl font-bold text-foreground">
                    1,240
                  </Text>
                </View>
                <View className="flex-1 items-end">
                  <Text className="text-sm font-semibold text-foreground mb-1">
                    Sessions
                  </Text>
                  <Text className="text-2xl font-bold text-foreground">28</Text>
                </View>
              </View>
              <View className="h-3 bg-muted rounded-full overflow-hidden">
                <View
                  className="h-full bg-primary rounded-full"
                  style={{ width: "78%" }}
                />
              </View>
              <View className="flex-row items-center justify-between mt-2">
                <Text className="text-xs text-muted-foreground">
                  Goal: 1,600 minutes
                </Text>
                <Text className="text-xs font-semibold text-primary">78%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
