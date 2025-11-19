# FocusBee Mobile - Technical Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Mission & Vision](#mission--vision)
3. [Architecture & Tech Stack](#architecture--tech-stack)
4. [Project Structure](#project-structure)
5. [Design System](#design-system)
6. [Data Models](#data-models)
7. [Screens & Navigation](#screens--navigation)
8. [Components](#components)
9. [Services & APIs](#services--apis)
10. [Ritual Flow](#ritual-flow)
11. [Permissions & Privacy](#permissions--privacy)
12. [Background Behavior](#background-behavior)
13. [Rewards & Gamification](#rewards--gamification)
14. [Analytics & Error Tracking](#analytics--error-tracking)
15. [Testing Strategy](#testing-strategy)
16. [CI/CD & Deployment](#cicd--deployment)
17. [Release Checklist](#release-checklist)
18. [Developer Notes](#developer-notes)

---

## Project Overview

**FocusBee Mobile** is a ritual-first focus application built with React Native (Expo Managed). Unlike traditional productivity apps that run timers on the same device that causes distraction, FocusBee uses a unique location-based ritual to physically separate users from their phones before starting a focus session.

### Key Information

- **Project Name**: FocusBee Mobile
- **Platform**: React Native (Expo Managed)
- **Language**: TypeScript
- **Target OS**: iOS (primary), Android (future)
- **Version**: 1.0.0
- **Owner**: Solo Developer

### Core Concept

The app implements a **location-based ritual flow** where users:

1. Select a focus duration
2. Capture their current location
3. Walk away (10-15 steps minimum)
4. Place their phone down
5. Begin a focus session with background monitoring

This physical separation creates a behavioral habit that reinforces deep focus.

---

## Mission & Vision

### Mission Statement

> To help people rediscover deep focus by creating a physical ritual that makes distractions harder and work easier by intentionally separating work space and distractions.

### Vision Statement

> To become the go-to productivity app, and to help people use this application for doing meaningful work without getting distracted.

### Core Values

- **Simplicity**: Keep the focus ritual easy to use without over-engineering
- **Intentionality**: Focus is about intentional separation from distractions, not just a timer
- **Empathy**: Built for real people with real focus challenges
- **Honesty**: Designed for genuine, intentional focus, not just screen time tracking

---

## Architecture & Tech Stack

### Framework & Core

- **Framework**: Expo SDK 54+ (Managed workflow)
- **Language**: TypeScript
- **Navigation**: Expo Router (file-based routing)
- **State Management**: Zustand
- **Styling**: NativeWind v4 (Tailwind CSS for React Native)

### UI & Design

- **Icons**: `lucide-react-native`
- **Animations**: 
  - CSS animations via NativeWind (defined in `global.css`)
  - React Native `Animated` API (built-in)
- **Component Library**: Nativecn (shadcn/ui-inspired for React Native)

### Backend Services

- **Authentication**: Firebase Authentication
- **Database**: Supabase (PostgreSQL) - primary analytics & long-term storage
- **Realtime**: Firestore (for quick session realtime) or Supabase Realtime
- **Storage**: Supabase Storage (user assets)
- **Cloud Functions**: Firebase Cloud Functions or Supabase Edge Functions

### Native Features

- **Location**: `expo-location` (foreground + background tasks)
- **Notifications**: `expo-notifications` (APNs via EAS)
- **Haptics**: `expo-haptics`
- **Secure Storage**: `expo-secure-store` (tokens)
- **Local Storage**: `@react-native-async-storage/async-storage`

### Development & Operations

- **Analytics**: Firebase Analytics
- **Error Tracking**: Sentry (React Native SDK)
- **Build Tools**: EAS Build, EAS Submit
- **CI/CD**: GitHub Actions

---

## Project Structure

```
focusbee-mobile/
├── app/                          # Expo Router file-based routing
│   ├── (auth)/                  # Authentication screens
│   │   ├── login.tsx
│   │   ├── signup.tsx
│   │   └── forgot-password.tsx
│   ├── (onboarding)/            # Onboarding flow
│   │   ├── welcome.tsx
│   │   ├── permissions.tsx
│   │   └── tutorial.tsx
│   ├── (tabs)/                  # Main tab navigation
│   │   ├── index.tsx            # Home screen
│   │   ├── stats.tsx            # Statistics screen
│   │   ├── profile.tsx          # Profile screen
│   │   └── _layout.tsx          # Tab layout
│   ├── ritual/                  # Ritual flow screens
│   │   ├── setup.tsx            # Duration selection
│   │   ├── walk.tsx             # Walking phase
│   │   └── confirm.tsx          # Placement confirmation
│   ├── session/                 # Session screens
│   │   ├── active.tsx           # Active session timer
│   │   ├── summary.tsx          # Session completion
│   │   └── history.tsx          # Session history
│   ├── _layout.tsx              # Root layout with providers
│   └── +not-found.tsx           # 404 fallback
│
├── src/
│   ├── components/
│   │   ├── ui/                  # Base UI components (shadcn-like)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── progress.tsx
│   │   │   └── avatar.tsx
│   │   ├── session/             # Session-specific components
│   │   │   ├── timer-display.tsx
│   │   │   ├── circular-progress.tsx
│   │   │   ├── session-controls.tsx
│   │   │   └── distance-indicator.tsx
│   │   ├── ritual/              # Ritual-specific components
│   │   │   ├── ritual-step.tsx
│   │   │   ├── walking-animation.tsx
│   │   │   ├── location-prompt.tsx
│   │   │   └── distance-tracker.tsx
│   │   └── stats/               # Statistics components
│   │       ├── stats-card.tsx
│   │       ├── streak-counter.tsx
│   │       ├── weekly-chart.tsx
│   │       └── achievement-badge.tsx
│   │
│   ├── stores/                  # Zustand state management
│   │   ├── session-store.ts
│   │   ├── user-store.ts
│   │   ├── stats-store.ts
│   │   ├── ritual-store.ts
│   │   └── theme-store.ts
│   │
│   ├── services/                # Service layer
│   │   ├── firebase/
│   │   │   ├── config.ts
│   │   │   ├── auth.ts
│   │   │   └── analytics.ts
│   │   ├── supabase/
│   │   │   ├── config.ts
│   │   │   ├── sessions.ts
│   │   │   ├── users.ts
│   │   │   └── stats.ts
│   │   ├── location/
│   │   │   ├── location-service.ts
│   │   │   ├── distance-calculator.ts
│   │   │   └── background-location.ts
│   │   ├── notifications/
│   │   │   ├── notification-service.ts
│   │   │   ├── scheduler.ts
│   │   │   └── handlers.ts
│   │   └── haptics/
│   │       └── haptic-service.ts
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── use-session.ts
│   │   ├── use-location.ts
│   │   ├── use-timer.ts
│   │   ├── use-stats.ts
│   │   ├── use-auth.ts
│   │   ├── use-theme.ts
│   │   └── use-haptic.ts
│   │
│   ├── utils/                   # Utility functions
│   │   ├── timer.ts
│   │   ├── reward-system.ts
│   │   ├── date-helpers.ts
│   │   ├── validation.ts
│   │   ├── constants.ts
│   │   └── storage.ts
│   │
│   ├── types/                   # TypeScript type definitions
│   │   ├── session.ts
│   │   ├── user.ts
│   │   ├── stats.ts
│   │   ├── ritual.ts
│   │   └── location.ts
│   │
│   ├── assets/                  # Static assets
│   │   ├── animations/
│   │   │   ├── walking-bee.json
│   │   │   └── celebration.json
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   └── icon.png
│   │   └── sounds/
│   │       ├── start.mp3
│   │       └── complete.mp3
│   │
│   └── config/                  # Configuration files
│       ├── tailwind.config.js
│       └── theme.ts
│
├── constants/
│   └── theme.ts                 # Theme constants
│
├── global.css                   # Global styles & design tokens
├── tailwind.config.js           # Tailwind configuration
├── app.json                     # Expo configuration
├── package.json                 # Dependencies
└── tsconfig.json                # TypeScript configuration
```

---

## Design System

### Color Palette

All colors use the OKLCH color space for better perceptual uniformity and accessibility.

#### Light Mode

- **Background**: `oklch(1 0 0)` - Pure white
- **Foreground**: `oklch(0.145 0 0)` - Near black
- **Primary**: `oklch(55.5% 0.163 48.998)` - Honey gold
- **Primary Foreground**: `oklch(0.98 0.02 70)` - Light cream
- **Secondary**: `oklch(0.97 0 0)` - Light gray
- **Muted**: `oklch(0.97 0 0)` - Subtle gray
- **Card**: `oklch(1 0 0)` - White
- **Border**: `oklch(0.922 0 0)` - Light border

#### Dark Mode

- **Background**: `oklch(0.145 0 0)` - Dark background
- **Foreground**: `oklch(0.985 0 0)` - Light text
- **Primary**: `oklch(0.922 0 0)` - Light primary
- **Card**: `oklch(0.205 0 0)` - Dark card

#### Special Gradients

- **Honey Gradient**: `linear-gradient(135deg, #fef3c7 0%, #fcd34d 50%, #f59e0b 100%)`
- **Bee Soft**: `linear-gradient(135deg, #ffffff 0%, #fffef9 30%, #fffcf5 70%, #fefaf0 100%)`

#### Chart Colors

- **Chart 1**: `oklch(0.646 0.222 41.116)` - Warm orange
- **Chart 2**: `oklch(0.6 0.118 184.704)` - Cool blue

### Typography

#### Font Families

- **Sans**: SF Pro Rounded, system-ui
- **Mono**: SF Mono, monospace

#### Font Sizes

- `xs`: 12px (captions, labels)
- `sm`: 14px (secondary text)
- `base`: 16px (body text, default)
- `lg`: 18px (subheadings)
- `xl`: 20px (headings)
- `2xl`: 24px (section headings)
- `3xl`: 30px (page titles)
- `4xl`: 36px (hero titles)
- `5xl`: 48px (display)

#### Font Weights

- `regular`: 400 (body text)
- `medium`: 500 (emphasis, labels)
- `semibold`: 600 (headings)
- `bold`: 700 (strong emphasis)

### Spacing Scale

Based on 4px base unit:

- `xs`: 4px
- `sm`: 8px
- `md`: 16px (base unit, most common)
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px

### Border Radius

- `sm`: 8px (subtle rounding)
- `md`: 12px (default, most common)
- `lg`: 20px (cards, modals)
- `xl`: 28px (large cards, hero sections)
- `full`: 9999px (pills, avatars, circular buttons)

### Animations

Predefined animations from `global.css`:

- **Float**: `animate-float` - Gentle floating motion (3s infinite)
- **Fade In Scale**: `animate-fade-in-scale` - Fade in with scale (0.5s)
- **Pulse Glow**: `animate-pulse-glow` - Pulsing glow effect (2s infinite)
- **Honeycomb Pulse**: `animate-honeycomb-pulse` - Honeycomb pulse (8s infinite)
- **Honey Fill**: `animate-honeycomb-honey-fill` - Honey fill animation (12s infinite)
- **Golden Pulse**: `animate-honeycomb-golden-pulse` - Golden pulse (10s infinite)
- **Amber Glow**: `animate-honeycomb-amber-glow` - Amber glow (14s infinite)

---

## Data Models

### User

```typescript
interface User {
  id: string; // UUID
  email: string;
  displayName: string;
  avatarUrl: string | null;
  createdAt: timestamp;
  updatedAt: timestamp;
  preferences: {
    defaultSessionDuration: number; // minutes
    notificationsEnabled: boolean;
    hapticFeedbackEnabled: boolean;
    distanceThreshold: number; // meters
    theme: "light" | "dark" | "auto";
    streakReminders: boolean;
    reminderTime: string; // HH:mm format
  };
  stats: {
    totalFocusMinutes: number;
    currentStreak: number;
    longestStreak: number;
    totalSessions: number;
    completedSessions: number;
    focusCredits: number;
    lastSessionDate: date;
  };
}
```

### Session

```typescript
interface Session {
  id: string; // UUID
  userId: string; // UUID
  status:
    | "preparing"
    | "walking"
    | "placing"
    | "active"
    | "paused"
    | "completed"
    | "cancelled";
  plannedDuration: number; // minutes
  actualDuration: number | null; // minutes
  startLocation: {
    latitude: number;
    longitude: number;
    accuracy: number;
    timestamp: timestamp;
  };
  focusLocation: {
    latitude: number;
    longitude: number;
    accuracy: number;
    timestamp: timestamp;
  };
  distanceTraveled: number; // meters
  createdAt: timestamp;
  startedAt: timestamp | null;
  completedAt: timestamp | null;
  creditsEarned: number;
  interruptions: number;
  locationChecks: number;
  perfectSession: boolean;
  notes: string | null;
  platform: "ios" | "android" | "web";
  initSource: "mobile" | "qr-laptop" | "web";
}
```

### Achievement

```typescript
interface Achievement {
  id: string;
  userId: string;
  type: string;
  unlockedAt: timestamp;
  title: string;
  description: string;
  icon: string;
  creditsReward: number;
}
```

### DailyStats

```typescript
interface DailyStats {
  id: string; // UUID
  userId: string; // UUID
  date: date;
  totalMinutes: number;
  sessionCount: number;
  completedSessions: number;
  averageSessionLength: number;
  creditsEarned: number;
  streakMaintained: boolean;
  perfectDay: boolean;
}
```

---

## Screens & Navigation

### Onboarding Flow

#### Welcome Screen (`(onboarding)/welcome.tsx`)

- **Purpose**: Introduce FocusBee and the ritual concept
- **Components**: HeroAnimation, FeatureSlides, StartButton
- **Acceptance Criteria**: User understands the app concept and proceeds

#### Permissions Screen (`(onboarding)/permissions.tsx`)

- **Purpose**: Request necessary permissions with clear explanations
- **Components**: PermissionCards (Location, Motion, Notifications)
- **Acceptance Criteria**: Permissions requested and user preferences saved

#### Tutorial Screen (`(onboarding)/tutorial.tsx`)

- **Purpose**: Walkthrough of the ritual flow
- **Components**: TutorialSteps, InteractiveDemo
- **Acceptance Criteria**: User completes tutorial

### Authentication

#### Login Screen (`(auth)/login.tsx`)

- **Purpose**: Sign in with Firebase
- **Components**: EmailInput, PasswordInput, SocialButtons, ForgotPasswordLink
- **Acceptance Criteria**: User can sign in and secure token stored

#### Signup Screen (`(auth)/signup.tsx`)

- **Purpose**: Create new account
- **Components**: EmailInput, PasswordInput, ConfirmPasswordInput, TermsCheckbox
- **Acceptance Criteria**: Account created and user authenticated

### Main Tabs

#### Home Screen (`(tabs)/index.tsx`)

- **Purpose**: Dashboard with quick start, streaks, recent sessions
- **Components**:
  - WelcomeHeader
  - QuickStartCard
  - TodayStats
  - RecentSessions
  - StartRitualButton
- **Acceptance Criteria**: User can start ritual from home

#### Stats Screen (`(tabs)/stats.tsx`)

- **Purpose**: View focus statistics and trends
- **Components**:
  - WeeklyChart
  - StreakCounter
  - AchievementBadges
  - FocusCredits
- **Acceptance Criteria**: Stats displayed accurately

#### Profile Screen (`(tabs)/profile.tsx`)

- **Purpose**: User settings, preferences, account management
- **Components**:
  - AccountSettings
  - Preferences
  - Permissions
  - Subscription
  - Support
- **Acceptance Criteria**: User can update preferences

### Ritual Flow

#### Ritual Setup (`ritual/setup.tsx`)

- **Purpose**: Select session duration and begin ritual
- **Components**: DurationSelector, BeeAnimation, StartButton
- **Acceptance Criteria**: Session object created with status 'preparing'

#### Ritual Walk (`ritual/walk.tsx`)

- **Purpose**: User walks away; app tracks distance
- **Components**:
  - DistanceIndicator
  - WalkingAnimation
  - ContinueButton (enabled when threshold reached)
- **Acceptance Criteria**: `currentDistance >= distanceThreshold` and `thresholdReached` flag true

#### Ritual Confirm (`ritual/confirm.tsx`)

- **Purpose**: Place phone, final confirmation & lock session
- **Components**:
  - CheckmarkAnimation
  - PlacementInstructions
  - LockSessionButton
- **Acceptance Criteria**: Session status set to 'active' and timer started

### Session Screens

#### Active Session (`session/active.tsx`)

- **Purpose**: Display countdown, stats, and distance monitoring
- **Components**:
  - CircularTimer
  - MotivationalQuote
  - SessionStats
  - EmergencyPause
- **Acceptance Criteria**: Timer continues in background; notifications at end; interruptions recorded

#### Session Summary (`session/summary.tsx`)

- **Purpose**: Show session results, credits, share CTA
- **Components**:
  - SummaryCards
  - ShareButtons
  - RedeemCTA
- **Acceptance Criteria**: Session persisted and stats updated

#### Session History (`session/history.tsx`)

- **Purpose**: View past sessions
- **Components**: SessionList, Filters, SearchBar
- **Acceptance Criteria**: Past sessions displayed with filters

---

## Components

### UI Components (Base)

#### Button

- **Props**: `variant`, `size`, `disabled`, `onPress`, `children`
- **Variants**: `default`, `secondary`, `ghost`, `destructive`, `link`
- **Usage**: Primary actions, CTAs

#### Card

- **Props**: `variant`, `className`, `children`
- **Variants**: `default`, `outlined`, `elevated`
- **Usage**: Content containers, stats cards

#### Input

- **Props**: `value`, `onChangeText`, `placeholder`, `error`, `disabled`
- **States**: `default`, `focus`, `error`, `disabled`
- **Usage**: Forms, search

### Session Components

#### TimerDisplay

- **Props**: `duration`, `remaining`, `onComplete`, `onPause`
- **UI**: Large numeric time, big typography, animated progress ring
- **Behavior**: Ticks every second; sync to server periodically

#### CircularProgress

- **Props**: `percent`, `size`, `strokeWidth`, `color`
- **UI**: SVG circular progress with animation
- **Usage**: Timer visualization, distance progress

#### DistanceIndicator

- **Props**: `startLocation`, `currentLocation`, `threshold`
- **UI**: Circular progress + numeric meters
- **Behavior**: Uses Haversine distance; smooths jitter via 3-sample moving average

#### LocationStatusIndicator

- **Props**: `permission`, `accuracy`, `distanceDelta`
- **UI**: Small pill showing location health
- **Usage**: Status indicator during ritual

### Ritual Components

#### RitualStepIndicator

- **Props**: `currentStep`, `steps`
- **UI**: Stepper with icons and short microcopy
- **Usage**: Progress indicator during ritual

#### WalkingAnimation

- **Props**: `isWalking`, `distance`
- **UI**: Lottie animation of walking bee
- **Usage**: Visual feedback during walk phase

### Stats Components

#### StatsCard

- **Props**: `title`, `value`, `subtitle`, `icon`, `trend`
- **UI**: Card with icon, value, and optional trend indicator
- **Usage**: Display statistics

#### StreakCounter

- **Props**: `currentStreak`, `longestStreak`
- **UI**: Animated counter with fire icon
- **Usage**: Display user streak

#### WeeklyChart

- **Props**: `data`, `period`
- **UI**: Line or bar chart showing focus time
- **Usage**: Visualize weekly/monthly trends

#### AchievementBadge

- **Props**: `achievement`, `unlocked`, `onPress`
- **UI**: Badge with icon, title, description
- **Usage**: Display achievements

---

## Services & APIs

### Authentication Service

**Provider**: Firebase Authentication

```typescript
// src/services/firebase/auth.ts
interface AuthService {
  signIn(email: string, password: string): Promise<UserCredential>;
  signUp(email: string, password: string): Promise<UserCredential>;
  signOut(): Promise<void>;
  getCurrentUser(): User | null;
  refreshToken(): Promise<string>;
}
```

### Location Service

**Provider**: `expo-location`

```typescript
// src/services/location/location-service.ts
interface LocationService {
  getCurrentLocation(): Promise<Location>;
  watchPosition(callback: (location: Location) => void): Promise<Subscription>;
  calculateDistance(loc1: Location, loc2: Location): number; // meters
  startBackgroundTask(): Promise<void>;
  stopBackgroundTask(): Promise<void>;
  requestPermissions(): Promise<PermissionStatus>;
}
```

**Key Functions**:

- `getCurrentLocation()`: Get precise current location
- `watchPosition()`: Continuously track location updates
- `calculateDistance()`: Haversine formula for distance calculation
- `startBackgroundTask()`: Enable background location tracking
- `stopBackgroundTask()`: Disable background tracking

### Notification Service

**Provider**: `expo-notifications` with EAS push credentials

```typescript
// src/services/notifications/notification-service.ts
interface NotificationService {
  scheduleNotification(
    title: string,
    body: string,
    trigger: Date
  ): Promise<string>;
  cancelNotification(notificationId: string): Promise<void>;
  handleNotificationTap(handler: (notification: Notification) => void): void;
  requestPermissions(): Promise<boolean>;
}
```

### Haptic Service

**Provider**: `expo-haptics`

```typescript
// src/services/haptics/haptic-service.ts
interface HapticService {
  impactLight(): void;
  impactMedium(): void;
  impactHeavy(): void;
  notificationSuccess(): void;
  notificationWarning(): void;
  selection(): void;
}
```

### API Service

**Base URL**: `https://api.focusbee.example` (to be configured)

#### Endpoints

**Authentication**

- `POST /auth/login` - Sign in
- `POST /auth/refresh` - Refresh token
- `POST /auth/signup` - Create account

**Sessions**

- `POST /sessions` - Create new session
- `POST /sessions/{id}/join` - Join session (QR flow, optional)
- `GET /sessions/{id}/status` - Get session state
- `POST /sessions/{id}/complete` - Mark session complete
- `POST /sessions/{id}/heartbeat` - Send heartbeat during session

**Users**

- `GET /users/me` - Get current user profile
- `PATCH /users/me` - Update user profile
- `GET /users/{id}/stats` - Get user statistics

**Realtime**

- **Mechanism**: Firestore `onSnapshot` listeners on `sessions/{id}`
- **Events**: `mobile_joined`, `ritual_confirmed`, `session_started`, `session_completed`

### Storage Service

**Secure Storage**: `expo-secure-store` for tokens
**Local Storage**: `@react-native-async-storage/async-storage` for preferences

```typescript
// src/utils/storage.ts
interface StorageService {
  // Secure storage
  setSecureItem(key: string, value: string): Promise<void>;
  getSecureItem(key: string): Promise<string | null>;
  deleteSecureItem(key: string): Promise<void>;

  // Local storage
  setItem(key: string, value: string): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
}
```

---

## Ritual Flow

### Overview

The ritual flow is a guided, verifiable process to ensure the phone is placed away before starting a focus session. The mobile app uses a **location-based approach** where the phone itself tracks movement and distance.

### Flow Parameters

```typescript
const RITUAL_CONFIG = {
  DISTANCE_THRESHOLD: 10, // meters - minimum distance to travel
  WALK_MIN_SECONDS: 8, // minimum time walking
  WALK_MAX_SECONDS: 60, // maximum time for walk phase
  FOCUS_ZONE_RADIUS: 5, // meters - radius for focus zone monitoring
  LOCATION_UPDATE_INTERVAL_MS: 3000, // location update frequency
  LOCATION_DISTANCE_INTERVAL_M: 2, // minimum distance change to trigger update
  GEO_ACCURACY_FALLBACK_METERS: 30, // fallback accuracy if GPS poor
};
```

### Mobile-Only Flow

#### Step 1: Setup (`ritual/setup.tsx`)

- **Description**: User selects duration and taps Begin
- **Actions**:
  - Request permissions (location, motion) with clear explanations
  - Capture baseline location & accelerometer snapshot
  - Create session object with status: `'preparing'`
  - Initialize distance tracking

#### Step 2: Walk (`ritual/walk.tsx`)

- **Description**: User walks away; app watches location and/or accelerometer
- **Actions**:
  - Start `watchPositionAsync` (expo-location)
  - Calculate distance from start location using Haversine formula
  - Update distance indicator in real-time
  - Apply 3-sample moving average to smooth GPS jitter
  - When `distance >= DISTANCE_THRESHOLD` and stable for 2+ readings:
    - Set `thresholdReached = true`
    - Enable "Continue" button
    - Provide haptic feedback

#### Step 3: Place (`ritual/confirm.tsx`)

- **Description**: User places phone, confirms placement
- **Actions**:
  - Capture `focusLocation` (where phone is placed)
  - Setup geofence/monitor for focus zone
  - Set session status to `'active'`
  - Schedule session-end notification
  - Start timer
  - Navigate to active session screen

#### Step 4: Active (`session/active.tsx`)

- **Description**: Session runs with background monitoring
- **Actions**:
  - Display countdown timer (persistent across app state)
  - Periodic location checks (every 3-5 minutes)
  - Detect interruptions (phone moved back to distraction zone)
  - Persist session state locally and to server
  - Send heartbeat events to server
  - Emit analytics events

#### Step 5: Complete (`session/summary.tsx`)

- **Description**: Timer reaches 0 or user completes early
- **Actions**:
  - Calculate `actualDuration` and `creditsEarned`
  - Mark session complete on server
  - Update user stats and achievements
  - Check for streak maintenance
  - Show celebratory animation
  - Display share options

### Verification Strategy

1. **Primary**: Motion-based verification (accelerometer/step count) to avoid forcing location permission
2. **Secondary**: Coarse location delta (if user permits) using Haversine; use coarse accuracy only
3. **Fallback**: Time-based confirmation (N seconds wait + user confirm) when sensors unavailable or permissions denied
4. **Security**: Session join tokens short-lived; server-side idempotency on session events

### Privacy Notes

- Location is **optional** and used in coarse mode
- Explain in permission prompt why location is needed
- Keep telemetry minimal
- Allow users to skip location and use time-based ritual

---

## Permissions & Privacy

### Required Permissions

#### Location Permission

- **Usage**: Verify user has moved away and maintain focus zone; used in coarse mode if user allows
- **iOS**: `NSLocationWhenInUseUsageDescription` and optionally `NSLocationAlwaysAndWhenInUse` if background
- **Consideration**: Offer time-based mode to avoid asking for Always permission
- **Permission String**:
  > "Used to verify you walked away and to monitor if your phone returns to the distraction zone. Location is optional and can be declined."

#### Motion Permission

- **Usage**: Detect stand-up/walk using accelerometer/steps
- **iOS**: `NSMotionUsageDescription`
- **Permission String**:
  > "Used to detect walking motion as part of the Focus ritual."

#### Notifications Permission

- **Usage**: Notify when session ends or when phone returns to distraction zone
- **iOS**: `UNUserNotificationCenter` permissions
- **Permission String**:
  > "Used to notify you when your focus session ends or if your phone returns to the distraction zone."

#### Photo Library Permission (Optional)

- **Usage**: Only if user uploads an avatar
- **iOS**: `NSPhotoLibraryUsageDescription`
- **Permission String**:
  > "Used only if you upload an avatar."

### Privacy Policy Requirements

- Provide explicit privacy policy covering:
  - Optional location usage
  - Data retention periods
  - Opt-out mechanisms
  - Data deletion options
- Explain why location is requested
- Provide time-based fallback to avoid rejection for background location
- Allow users to delete account & data

---

## Background Behavior

### Goals

1. Keep session timer reliable in background
2. Monitor location minimally for interruptions
3. Minimize battery drain

### Approach

#### Expo Managed Limits

- Use `BackgroundFetch`/`TaskManager` for periodic checks
- Rely on geofencing where possible but provide robust fallback
- Background location on iOS may require EAS and capability configuration

#### Timers

- **Do NOT** rely on JS timers when app suspended
- Persist expected end timestamp and compute remaining on resume
- Schedule local notification for end time
- Recalculate remaining time when app returns to foreground

#### Location

- Use coarse location updates
- Reduce frequency after initial verification to save battery
- Update every 3-5 minutes during active session (not continuously)

#### Edge Cases

**App Killed by OS**:

- Rely on scheduled notification
- Server reconciliation using heartbeat events
- On app restart, check for incomplete sessions and reconcile

**No Permissions**:

- Fall back to time-based ritual
- Explain benefits but allow skip

**Network Offline**:

- Persist session state locally
- Sync to server when connection restored
- Handle conflicts gracefully

### Server Reconciliation

Server should:

- Accept final 'complete' events
- Reconcile if device couldn't deliver (use heartbeat events during session)
- Handle duplicate completion events idempotently
- Maintain session state on server as source of truth

---

## Rewards & Gamification

### Credit System

**Rule**: 1 minute focused = 1 credit (configurable)

Credits are earned for:

- Completed focus sessions
- Perfect sessions (no interruptions)
- Streak maintenance
- Achievement unlocks

### Redemption Options

```typescript
const REDEMPTIONS = {
  scrollBreak: {
    cost: 25, // credits
    rewardMinutes: 10, // minutes of allowed distraction time
  },
  // Future: More redemption options
};
```

### Achievements

```typescript
const ACHIEVEMENTS = [
  {
    id: "first_session",
    title: "First Flight",
    description: "Complete your first session",
    credits: 5,
  },
  {
    id: "streak_3",
    title: "3-Day Streak",
    description: "Focus 3 days in a row",
    credits: 10,
  },
  {
    id: "streak_7",
    title: "Week Warrior",
    description: "Focus 7 days in a row",
    credits: 25,
  },
  {
    id: "perfect_session",
    title: "Perfect Focus",
    description: "Complete a session with no interruptions",
    credits: 15,
  },
  // More achievements...
];
```

### Persistence

- Store credits and achievements locally in AsyncStorage
- Periodic server sync (on session complete, app foreground)
- Handle offline accumulation and sync conflicts

---

## Analytics & Error Tracking

### Analytics Provider

**Firebase Analytics**

### Tracked Events

```typescript
const ANALYTICS_EVENTS = {
  // Session events
  session_start: { sessionId, duration, source },
  session_complete: { sessionId, actualDuration, creditsEarned },
  session_cancel: { sessionId, reason },
  session_pause: { sessionId, reason },

  // Ritual events
  ritual_start: { sessionId },
  ritual_walk_complete: { sessionId, distance, time },
  ritual_confirm: { sessionId },

  // User events
  achievement_unlock: { achievementId, credits },
  streak_milestone: { streakDays },

  // Permission events
  permission_denied: { permission, reason },
  permission_granted: { permission },

  // Error events
  location_error: { error, context },
  sync_error: { error, context },
};
```

### Error Tracking Provider

**Sentry (React Native SDK)**

### Error Categories

- **Location Errors**: GPS failures, permission denied, accuracy issues
- **Sync Errors**: Network failures, API errors, data conflicts
- **Session Errors**: Timer failures, state inconsistencies
- **Background Errors**: Task failures, notification errors

### Privacy Considerations

- **PII Minimized**: Do not log raw coordinates to analytics
- Log coarse bucketed location or hashed zone IDs if needed
- No email addresses or personal data in error reports
- User consent for analytics (opt-in/opt-out)

---

## Testing Strategy

### Unit Testing

**Framework**: Jest + React Native Testing Library

**Coverage**:

- Components (UI rendering, interactions)
- Hooks (state management, side effects)
- Utilities (calculations, validations, transformations)
- Services (API calls, storage, location calculations)

### Integration Testing

**Framework**: Detox or Playwright Mobile (optional)

**Test Scenarios**:

- Complete ritual flow (setup → walk → confirm → active → complete)
- Permission flows (grant, deny, skip)
- Background timer persistence
- Location tracking accuracy
- Session state synchronization
- Offline/online transitions

### Manual Testing

**Device Suite**:

- iPhone SE (small screen)
- iPhone 12+ (standard)
- iPhone 14 Pro Max (large screen)

**Test Cases**:

- Permission flows (all combinations)
- Background timer persistence
- Geofence/interruption detection
- Network variations (WiFi, cellular, offline)
- Background/lock behavior
- App killed by OS recovery
- Session reconciliation

### QA Checklist

- [ ] Permission flows (grant, deny, skip)
- [ ] Background timer persistence
- [ ] Geofence/interruption detection
- [ ] Location accuracy and jitter handling
- [ ] Session state synchronization
- [ ] Offline/online behavior
- [ ] App killed recovery
- [ ] Notification delivery
- [ ] Haptic feedback
- [ ] Dark mode support
- [ ] Accessibility (VoiceOver, Dynamic Type)

---

## CI/CD & Deployment

### Repository

**GitHub**

### Workflows

#### CI (Continuous Integration)

- **Trigger**: On pull request
- **Actions**:
  - Run TypeScript type checking
  - Run ESLint
  - Run Prettier check
  - Run unit tests
  - Build check (no actual build)

#### Build

- **Trigger**: On release branch push
- **Actions**:
  - EAS Build for iOS
  - Upload artifacts

#### Deploy

- **Trigger**: On release tag
- **Actions**:
  - EAS Submit to TestFlight
  - Create GitHub release

### Secrets Management

Store in GitHub Secrets:

- `EAS_PROJECT_ID`
- `EAS_ACCESS_TOKEN`
- `APPLE_APP_SPECIFIC_PASSWORD`
- `FIREBASE_SERVICE_ACCOUNT_KEY`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SENTRY_DSN`

### Build Configuration

**EAS Build**:

- iOS: Managed workflow with Expo SDK 54+
- Build profiles: `development`, `preview`, `production`
- Automatic code signing via EAS

---

## Release Checklist

### Pre-Beta

- [ ] Instrument analytics & Sentry
- [ ] Prepare privacy policy & permission strings
- [ ] Create EAS credentials & configure EAS Build
- [ ] Create screenshots & App Store metadata
- [ ] Test on physical devices (iPhone SE, iPhone 12+)
- [ ] Verify all permissions work correctly
- [ ] Test background behavior thoroughly
- [ ] Set up error tracking and monitoring

### Beta (TestFlight)

- [ ] Upload to TestFlight
- [ ] Collect feedback from 20+ testers
- [ ] Fix major bugs:
  - [ ] Background timer issues
  - [ ] Permission edge cases
  - [ ] Location accuracy problems
  - [ ] Session state inconsistencies
- [ ] Polish onboarding prompts
- [ ] Optimize battery usage
- [ ] Improve error messages

### Public Release

- [ ] Finalize subscription/pricing (if any)
- [ ] Implement in-app purchase (if premium)
- [ ] Submit to App Store with clear permission justification
- [ ] Prepare App Store listing:
  - [ ] Screenshots (all required sizes)
  - [ ] App description
  - [ ] Keywords
  - [ ] Privacy policy URL
- [ ] Monitor first-week analytics & crashes
- [ ] Prepare support documentation
- [ ] Set up user feedback channels

---

## Developer Notes

### Expo Managed Considerations

- Expo Managed allows `expo-location` and background tasks
- Background location on iOS may require EAS and capability configuration
- Provide time-based fallback to avoid making Always permission necessary
- Use `expo-task-manager` for background tasks
- Test background behavior on physical devices (simulator limitations)

### Cursor Pairing Tips

- Use small tickets (~1–2 hours) when pairing with Cursor
- Let Cursor scaffold components and tests while you implement core logic
- Break down features into atomic, testable units
- Use TypeScript strictly for better AI assistance

### Performance Optimization

- Minimize location sampling frequency
- Debounce UI updates (especially distance indicator)
- Avoid heavy work on main thread during animations
- Use `React.memo` for expensive components
- Optimize re-renders with Zustand selectors
- Lazy load screens and heavy components

### Code Style Guidelines

- Follow React Native best practices
- Use functional components with hooks
- Prefer NativeWind classes over StyleSheet when possible
- Use TypeScript strictly (no `any` types)
- Follow existing folder structure
- Write self-documenting code with clear variable names
- Add JSDoc comments for complex functions

### Common Patterns

#### State Management

```typescript
// Use Zustand stores for global state
import { create } from "zustand";

interface SessionStore {
  currentSession: Session | null;
  startSession: (session: Session) => void;
  completeSession: () => void;
}

export const useSessionStore = create<SessionStore>((set) => ({
  currentSession: null,
  startSession: (session) => set({ currentSession: session }),
  completeSession: () => set({ currentSession: null }),
}));
```

#### Custom Hooks

```typescript
// Encapsulate complex logic in custom hooks
export function useLocationTracking() {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Location tracking logic
  }, []);

  return { location, error };
}
```

#### Error Handling

```typescript
// Always handle errors gracefully
try {
  await locationService.getCurrentLocation();
} catch (error) {
  Sentry.captureException(error);
  // Fallback to time-based ritual
  showTimeBasedRitual();
}
```

---

## Additional Resources

### Documentation Links

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)

### Design Resources

- [Lucide Icons](https://lucide.dev/)
- [Nativecn Components](https://nativecn.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### Tools

- [EAS Build](https://docs.expo.dev/build/introduction/)
- [EAS Submit](https://docs.expo.dev/submit/introduction/)
- [Sentry React Native](https://docs.sentry.io/platforms/react-native/)

---

## Changelog

### Version 1.0.0 (Planned)

- Initial release
- Location-based ritual flow
- Session tracking and statistics
- Rewards and achievements system
- Basic analytics and error tracking

---

## Support & Contact

For questions, issues, or contributions, please refer to the project repository or contact the development team.

---

**Last Updated**: 2024
**Document Version**: 1.0.0
