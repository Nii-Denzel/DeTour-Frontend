import { useRouter } from "expo-router";
import React from "react";

import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen(): React.JSX.Element {
  const router = useRouter();

  const handleGetStarted = (): void => {
    // Replace with your actual destination route (e.g., '/auth/register' or '/home')
    router.push("/home");
  };

  const handleExploreAsGuest = (): void => {
    // Replace with your guest landing page route
    router.push("/explore");
  };

  return (
    <ImageBackground
      source={require("../assets/images/landingScreen.jpg")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaView style={styles.overlayContainer}>
        {/* Top Spacer to push content down beautifully */}
        <View style={styles.topSpacer} />

        {/* Content Section (Buttons and footer) */}
        <View style={styles.contentContainer}>
          {/* Main Call to Action Button */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>

          {/* Secondary Outline Button */}
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleExploreAsGuest}
            activeOpacity={0.7}
          >
            <Text style={styles.secondaryButtonText}>Explore as Guest</Text>
          </TouchableOpacity>

          {/* Footer Attribution */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Built with <Text style={styles.heartText}>❤️</Text> for Ghana
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  overlayContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  topSpacer: {
    flex: 1, // Dynamically pushes the buttons to the bottom third of the screen, just like the original image
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#FFC72C", // Matches the vibrant gold/yellow from 1782375388427.jpeg
    width: "100%",
    height: 50,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },
  primaryButtonText: {
    color: "#03331D", // Deep forest green text for high legibility
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    width: "100%",
    height: 50,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)", // Clean translucent white border
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  secondaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  footerContainer: {
    marginBottom: 40,
  },
  footerText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 13,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  heartText: {
    color: "#E31B23", // Clean red emoji alignment
  },
});
