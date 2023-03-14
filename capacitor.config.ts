import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'nl.vattenfall.liveupdatesexample',
  appName: 'live-updates-example',
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  webDir: 'www'
};

export default config;
