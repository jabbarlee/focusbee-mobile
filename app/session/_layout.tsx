import { Stack } from "expo-router";

export default function SessionLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="active" />
      <Stack.Screen name="summary" />
      <Stack.Screen name="history" />
    </Stack>
  );
}

