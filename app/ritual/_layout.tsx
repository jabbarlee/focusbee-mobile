import { Stack } from "expo-router";

export default function RitualLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="setup" />
      <Stack.Screen name="walk" />
      <Stack.Screen name="confirm" />
    </Stack>
  );
}

