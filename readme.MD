# Updating Expo Router for SDK 52 and New Architecture

This document outlines the steps to update `expo-router` to the version compatible with Expo SDK 52 and enable the New Architecture in your project.

## 1. Update Expo SDK
Run the following command to install the latest version of the `expo` package:

```bash
npx expo install expo@latest
```

This ensures you are using the latest stable version of Expo.

## 2. Update `expo-router`
To avoid conflicts with previous versions of `expo-router`, uninstall existing versions and reinstall the compatible version:

```bash
npm uninstall expo-router @react-navigation/native @react-navigation/drawer
npx expo install expo-router
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

This will install the correct version of `expo-router` along with its required dependencies.

## 3. Update Dependencies
After updating the SDK, update all dependencies to avoid conflicts:

```bash
npx expo install --fix
```

This command will automatically correct the required dependency versions.

## 4. Install `expo-router Drawer (If Necessary)`
Install the compatible version of Expor Router Drawer:

```bash
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

This will install the correct version of `@react-navigation/drawer` along with its required dependencies.

## 5. Configure `app.json` or `app.config.js`
Ensure that your `app.json` or `app.config.js` file has the proper configuration for the entry point:

```json
{
  "expo": {
    "main": "expo-router/entry",
    "experiments": {
      "newArchEnabled": true
    }
  }
}
```

If you are using `app.config.js`, add it as follows:

```js
export default {
  expo: {
    main: "expo-router/entry",
    experiments: {
      newArchEnabled: true
    }
  }
};
```

This enables the New Architecture and sets the correct entry point.

## 6. Verify Watchman Installation
If you see warnings related to Watchman, run the following commands:

```bash
watchman watch-del '/path/to/your/project'
watchman watch-project '/path/to/your/project'
```

To clear the Metro cache and restart Expo, run:

```bash
expo start -c
```

If the issue persists, reinstall Watchman:

```bash
brew uninstall watchman
brew install watchman
```

---

With these steps, your project will be updated and ready to work with the latest version of Expo and `expo-router`. 🚀

