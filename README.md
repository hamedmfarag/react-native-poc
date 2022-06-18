## React Native Project Based on Expo-CLI

- NodeJS Version: 16.14.2

### How this project is created:

1. https://reactnative.dev/docs/environment-setup
2. Expo CLI Quickstart Tab
3. `npm install -g expo-cli` NOTE: this project based on `expo-cli 5.4.9`
4. choose from the terminal -> `tabs (TypeScript) several example screens and tabs using react-navigation and TypeScript`

### Scripts

```
npm run start:web // Run application on web browser
npm run start:android // Run application on android device
npm run start:ios // Run application on ios device

npm run build:dev // Build assets and generate folder (web-build) for hosting (for development environment)
npm run build:test // Build assets and generate folder (web-build) for hosting (for development environment)
npm run build:prod // Build assets and generate folder (web-build) for hosting (for development environment)
npm run serve // RUn and test the generated folder (web-build)
```

### Notes

1. How to customize Webpack (https://docs.expo.dev/guides/customizing-webpack/)
2. **NODE_ENV** represent the build mode (production or development) only.
3. **REACT_ENV** represent the enviornment (development, test or production).
4. Regarding environment keys, you should add your key in .env.\* files and import it useing `@env` module as follow:
   ```
   import { TEST_KEY } from "@env";
   .
   .
   console.log(TEST_KEY);
   ```
