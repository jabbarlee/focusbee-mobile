import "@/styles/global.css";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = 49 + insets.bottom;
  const totalBottomSpace = tabBarHeight + 24;

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
              Account
            </Text>
            <Text className="text-lg text-muted-foreground">
              Manage your settings and preferences
            </Text>
          </View>

          {/* Profile Card */}
          <View
            className="mb-6 p-6 rounded-2xl border border-border"
            style={{
              backgroundColor: "#fffbf0",
              shadowColor: "#f59e0b",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 12,
              elevation: 4,
            }}
          >
            <View className="flex-row items-center gap-4 mb-4">
              <View className="w-20 h-20 rounded-full bg-primary/20 items-center justify-center">
                <Text className="text-4xl">👤</Text>
              </View>
              <View className="flex-1">
                <Text className="text-xl font-bold text-foreground mb-1">
                  John Doe
                </Text>
                <Text className="text-sm text-muted-foreground">
                  john.doe@example.com
                </Text>
              </View>
            </View>
            <Pressable className="py-3 px-4 rounded-lg bg-primary/10">
              <Text className="text-sm font-semibold text-primary text-center">
                Edit Profile
              </Text>
            </Pressable>
          </View>

          {/* Account Settings */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-foreground mb-4">
              Account Settings
            </Text>
            <View
              className="rounded-2xl border border-border overflow-hidden"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
                backgroundColor: "#ffffff",
              }}
            >
              <Pressable
                className="p-4 border-b border-border flex-row items-center justify-between"
              >
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-lg bg-chart-1/10 items-center justify-center">
                    <Text className="text-lg">📧</Text>
                  </View>
                  <Text className="text-base font-semibold text-foreground">
                    Email & Password
                  </Text>
                </View>
                <Text className="text-lg text-muted-foreground">›</Text>
              </Pressable>
              <Pressable
                className="p-4 border-b border-border flex-row items-center justify-between"
              >
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-lg bg-chart-2/10 items-center justify-center">
                    <Text className="text-lg">🔔</Text>
                  </View>
                  <Text className="text-base font-semibold text-foreground">
                    Notifications
                  </Text>
                </View>
                <Text className="text-lg text-muted-foreground">›</Text>
              </Pressable>
              <Pressable className="p-4 flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-lg bg-chart-3/10 items-center justify-center">
                    <Text className="text-lg">🔒</Text>
                  </View>
                  <Text className="text-base font-semibold text-foreground">
                    Privacy & Security
                  </Text>
                </View>
                <Text className="text-lg text-muted-foreground">›</Text>
              </Pressable>
            </View>
          </View>

          {/* Preferences */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-foreground mb-4">
              Preferences
            </Text>
            <View
              className="rounded-2xl border border-border overflow-hidden"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
                backgroundColor: "#ffffff",
              }}
            >
              <Pressable
                className="p-4 border-b border-border flex-row items-center justify-between"
              >
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-lg bg-chart-4/10 items-center justify-center">
                    <Text className="text-lg">🎨</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-foreground">
                      Appearance
                    </Text>
                    <Text className="text-xs text-muted-foreground">
                      Light mode
                    </Text>
                  </View>
                </View>
                <Text className="text-lg text-muted-foreground">›</Text>
              </Pressable>
              <Pressable
                className="p-4 border-b border-border flex-row items-center justify-between"
              >
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-lg bg-chart-1/10 items-center justify-center">
                    <Text className="text-lg">⏱️</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-foreground">
                      Default Duration
                    </Text>
                    <Text className="text-xs text-muted-foreground">25 minutes</Text>
                  </View>
                </View>
                <Text className="text-lg text-muted-foreground">›</Text>
              </Pressable>
              <Pressable className="p-4 flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-lg bg-chart-2/10 items-center justify-center">
                    <Text className="text-lg">📳</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-foreground">
                      Haptic Feedback
                    </Text>
                    <Text className="text-xs text-muted-foreground">Enabled</Text>
                  </View>
                </View>
                <Text className="text-lg text-muted-foreground">›</Text>
              </Pressable>
            </View>
          </View>

          {/* Permissions */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-foreground mb-4">
              Permissions
            </Text>
            <View
              className="p-6 rounded-2xl border border-border"
              style={{
                backgroundColor: "#f0f9ff",
                shadowColor: "#3b82f6",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              <View className="mb-4">
                <View className="flex-row items-center justify-between mb-2">
                  <View className="flex-row items-center gap-3">
                    <Text className="text-xl">📍</Text>
                    <Text className="text-base font-semibold text-foreground">
                      Location
                    </Text>
                  </View>
                  <View className="px-3 py-1 rounded-full bg-success/20">
                    <Text className="text-xs font-bold text-success">Granted</Text>
                  </View>
                </View>
                <Text className="text-xs text-muted-foreground ml-9">
                  Used for ritual verification
                </Text>
              </View>
              <View className="mb-4">
                <View className="flex-row items-center justify-between mb-2">
                  <View className="flex-row items-center gap-3">
                    <Text className="text-xl">🔔</Text>
                    <Text className="text-base font-semibold text-foreground">
                      Notifications
                    </Text>
                  </View>
                  <View className="px-3 py-1 rounded-full bg-success/20">
                    <Text className="text-xs font-bold text-success">Granted</Text>
                  </View>
                </View>
                <Text className="text-xs text-muted-foreground ml-9">
                  Session reminders and updates
                </Text>
              </View>
              <View>
                <View className="flex-row items-center justify-between mb-2">
                  <View className="flex-row items-center gap-3">
                    <Text className="text-xl">📱</Text>
                    <Text className="text-base font-semibold text-foreground">
                      Motion & Fitness
                    </Text>
                  </View>
                  <View className="px-3 py-1 rounded-full bg-success/20">
                    <Text className="text-xs font-bold text-success">Granted</Text>
                  </View>
                </View>
                <Text className="text-xs text-muted-foreground ml-9">
                  Track walking distance
                </Text>
              </View>
            </View>
          </View>

          {/* Subscription */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-foreground mb-4">
              Subscription
            </Text>
            <View
              className="p-6 rounded-2xl border border-border"
              style={{
                backgroundColor: "#fff8e1",
                shadowColor: "#f59e0b",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
                elevation: 4,
              }}
            >
              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-1">
                  <Text className="text-base font-semibold text-foreground mb-1">
                    Free Plan
                  </Text>
                  <Text className="text-sm text-muted-foreground">
                    Basic features included
                  </Text>
                </View>
                <View className="px-4 py-2 rounded-lg bg-primary">
                  <Text className="text-sm font-bold text-primary-foreground">
                    Upgrade
                  </Text>
                </View>
              </View>
              <View className="pt-4 border-t border-border">
                <Text className="text-xs text-muted-foreground mb-2">
                  Premium includes:
                </Text>
                <View className="gap-2">
                  <View className="flex-row items-center gap-2">
                    <Text className="text-success">✓</Text>
                    <Text className="text-xs text-foreground">
                      Unlimited sessions
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <Text className="text-success">✓</Text>
                    <Text className="text-xs text-foreground">
                      Advanced analytics
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <Text className="text-success">✓</Text>
                    <Text className="text-xs text-foreground">
                      Custom themes
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Support */}
          <View className="mb-6">
            <Text className="text-xl font-bold text-foreground mb-4">
              Support
            </Text>
            <View
              className="rounded-2xl border border-border overflow-hidden"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
                backgroundColor: "#ffffff",
              }}
            >
              <Pressable
                className="p-4 border-b border-border flex-row items-center justify-between"
              >
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-lg bg-chart-2/10 items-center justify-center">
                    <Text className="text-lg">❓</Text>
                  </View>
                  <Text className="text-base font-semibold text-foreground">
                    Help Center
                  </Text>
                </View>
                <Text className="text-lg text-muted-foreground">›</Text>
              </Pressable>
              <Pressable
                className="p-4 border-b border-border flex-row items-center justify-between"
              >
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-lg bg-chart-3/10 items-center justify-center">
                    <Text className="text-lg">📝</Text>
                  </View>
                  <Text className="text-base font-semibold text-foreground">
                    Contact Support
                  </Text>
                </View>
                <Text className="text-lg text-muted-foreground">›</Text>
              </Pressable>
              <Pressable className="p-4 flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-lg bg-chart-1/10 items-center justify-center">
                    <Text className="text-lg">📄</Text>
                  </View>
                  <Text className="text-base font-semibold text-foreground">
                    Terms & Privacy
                  </Text>
                </View>
                <Text className="text-lg text-muted-foreground">›</Text>
              </Pressable>
            </View>
          </View>

          {/* Sign Out */}
          <View className="mb-6">
            <Pressable
              className="p-4 rounded-2xl border border-border items-center"
              style={{
                backgroundColor: "#ffffff",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
                borderColor: "#ef4444",
              }}
            >
              <Text className="text-base font-semibold text-destructive">
                Sign Out
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
