import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myapp.yeah',
  appName: 'myApp',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  },
};

export default config;
