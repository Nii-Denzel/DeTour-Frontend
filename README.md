# DeTour 🇬🇭

> **Discover Ghana. Live the Culture.**

DeTour is a Ghana-focused tourism discovery mobile app that helps locals
and visitors explore attractions, book guided tours, navigate destinations,
and immerse themselves in Ghanaian culture — all from one beautifully
designed mobile experience.

---

## 📱 Screenshots

> _Add your screenshots here_

| Splash | Home | Explore |
|--------|------|---------|
| ![](./assets/screenshots/splash.png) | ![](./assets/screenshots/home.png) | ![](./assets/screenshots/explore.png) |

| Map | Detail | Book |
|-----|--------|------|
| ![](./assets/screenshots/map.png) | ![](./assets/screenshots/detail.png) | ![](./assets/screenshots/book.png) |

---

## ✨ Features

- 🏛️ **Discover Attractions** — Browse Ghana's most iconic destinations
  including Cape Coast Castle, Kakum National Park, Wli Waterfalls,
  Labadi Beach and more
- 🗺️ **Interactive Map** — Explore attractions on a live map centered on
  your real GPS location with category filters and custom markers
- 🔍 **Search & Filter** — Search by name or location and filter by
  category (Heritage, Park, Beach, Attraction)
- 📅 **Tour Booking** — Select dates, group size, and a licensed tour
  guide, then pay instantly with Mobile Money
- 💳 **Mobile Money Payments** — Native support for MTN MoMo and
  Vodafone Cash — the two most widely used payment methods in Ghana
- 🗣️ **Phrasebook** — Learn essential phrases in four Ghanaian languages:
  Twi, Ga, Ewe, and Hausa
- 🆘 **Safety Center** — One-tap SOS emergency button, real-time safety
  alerts, and quick-dial contacts for Police, Fire, Ambulance, and the
  Tourist Helpline
- 👤 **User Profile** — Manage saved places, payment methods, language
  preferences, and booking history

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React Native](https://reactnative.dev) | 0.81.5 | Core mobile framework |
| [Expo](https://expo.dev) | SDK 54 | Build tooling & native modules |
| [Expo Router](https://expo.github.io/router) | v6 | File-based navigation |
| [TypeScript](https://www.typescriptlang.org) | ^5.3.3 | Type safety |
| [NativeWind](https://www.nativewind.dev) | v4 | Tailwind CSS for React Native |
| [react-native-maps](https://github.com/react-native-maps/react-native-maps) | ^1.14.0 | Interactive map |
| [expo-location](https://docs.expo.dev/versions/latest/sdk/location) | SDK 54 | Device GPS |
| [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) | SDK 54 | Safe area insets |
| [@expo/vector-icons](https://icons.expo.fyi) | pre-installed | Icon system |

---

## 📁 Project Structure
detour/
│
├── app/                        # All screens (Expo Router file-based)
│   ├── _layout.tsx             # Root layout + SafeAreaProvider
│   ├── index.tsx               # Splash / onboarding
│   ├── (tabs)/                 # Bottom tab screens
│   │   ├── home.tsx            # Home feed
│   │   ├── explore.tsx         # Search & filter
│   │   ├── map.tsx             # Interactive map
│   │   ├── bookings.tsx        # My bookings
│   │   └── profile.tsx         # User profile
│   ├── attraction/[id].tsx     # Attraction detail (dynamic route)
│   ├── book/[id].tsx           # Tour booking flow (dynamic route)
│   ├── payments/               # Wallet & transactions
│   ├── safety/                 # Emergency & alerts
│   └── phrasebook/             # Language phrase switcher
│
├── components/                 # Shared reusable components
│   ├── AttractionCard.tsx      # compact + full card variants
│   └── StarRating.tsx          # Rating display
│
├── constants/                  # App-wide constants
│   ├── colors.ts               # Brand color tokens
│   └── data.ts                 # Mock data
│
├── types/                      # TypeScript type definitions
│   └── index.ts
│
├── assets/                     # Images, fonts, icons
├── global.css                  # Tailwind base styles
├── tailwind.config.js          # Theme configuration
├── babel.config.js             # NativeWind v4 transform
├── metro.config.js             # Metro bundler config
└── app.json                    # Expo project configuration
---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) app on your phone, or an Android/iOS simulator
- A Google Maps API key (for the map screen on Android)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/yourusername/detour.git
cd detour
```

**2. Install dependencies**

```bash
npx expo install expo-router expo-status-bar expo-location -- --legacy-peer-deps
```

```bash
npm install nativewind@^4.1.23 tailwindcss@3.4.0 --legacy-peer-deps
```

```bash
npx expo install react-native-maps react-native-safe-area-context -- --legacy-peer-deps
```

**3. Add your Google Maps API key**

Open `app.json` and replace the placeholder values:

```json
"ios": {
  "config": {
    "googleMapsApiKey": "YOUR_IOS_KEY_HERE"
  }
},
"android": {
  "config": {
    "googleMaps": {
      "apiKey": "YOUR_ANDROID_KEY_HERE"
    }
  }
}
```

**4. Add your splash background image**

Drop your image into `assets/images/` and name it `splash-bg.png`,
or update the path in `app/index.tsx`:

```ts
const BACKGROUND_IMAGE = require('../assets/images/splash-bg.png');
```

**5. Start the development server**

```bash
npx expo start
```

Then press:
- `a` — open on Android emulator
- `i` — open on iOS simulator
- Scan the QR code with Expo Go on your physical device

---

## 🗺️ Navigation Structure
/ (Splash)
└── /(tabs)
├── /home            Home feed
├── /explore         Search & filter attractions
├── /map             Interactive GPS map
├── /bookings        My tour bookings
└── /profile         User profile
├── /payments    Wallet & transaction history
├── /safety      Emergency contacts & alerts
└── /phrasebook  Ghanaian language phrases
/attraction/[id]         Attraction detail screen
/book/[id]               Tour booking & payment flow

---

## 🎨 Design System

### Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `green` | `#0B462A` | Primary brand, headers, buttons |
| `gold` | `#FFC72C` | Accent, stars, badges, CTAs |
| `lightGreen` | `#E6EEE9` | Backgrounds, chips, icon tiles |
| `alertRed` | `#DC2626` | Errors, SOS, cancelled status |
| `alertBg` | `#FEE2E2` | Alert card backgrounds |

### Icon Libraries

All icons come from `@expo/vector-icons` — no additional install needed.
Browse the full catalogue at [icons.expo.fyi](https://icons.expo.fyi).

- **Ionicons** — navigation, location, time, calendar, star, heart, people
- **Feather** — bell, search, share, map, minus, plus
- **MaterialCommunityIcons** — heritage, park, beach, ticket, cellphone
- **FontAwesome5** — location arrow, crosshairs

---

## 🔌 Integrations Needed for Production

This repository ships with a fully functional UI and mock data.
To go live, the following integrations are required:

| Feature | Integration |
|---|---|
| Authentication | Expo SecureStore + JWT or Supabase Auth |
| Real attraction data | Replace `constants/data.ts` with API calls |
| MTN MoMo payments | [MTN MoMo API](https://momodeveloper.mtn.com) or [Campay](https://campay.net) |
| Vodafone Cash payments | [Vodafone Cash API](https://developers.vodafone.com.gh) |
| Map images | Replace Wikipedia Commons URLs with your own CDN |
| Phrasebook audio | `expo-av` or `expo-speech` for pronunciation playback |
| Push notifications | `expo-notifications` for booking confirmations |
| Analytics | Expo Analytics or PostHog |

---

## 📦 Key Dependencies Explained

```json
"main": "expo-router/entry"
```
This line in `package.json` is **required** — it tells Expo to use
file-based routing instead of the default `App.tsx` entry point.

**Why `--legacy-peer-deps`?**
Expo SDK 54 ships with `react-native@0.81.5` but `react-native-screens@4.25.2`
(a dependency of Expo Router v6) requires `react-native >= 0.82.0`.
The `--legacy-peer-deps` flag bypasses this version conflict.
Expo's own modules resolve this correctly at runtime despite the mismatch.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create your feature branch — `git checkout -b feature/your-feature`
3. Commit your changes — `git commit -m 'Add your feature'`
4. Push to the branch — `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.
See the [LICENSE](./LICENSE) file for details.

---

## 👨🏾‍💻 Author

Built with ❤️ for Ghana

> _"DeTour — Discover Ghana. Live the Culture."_
