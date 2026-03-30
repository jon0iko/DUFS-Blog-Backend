import type { StrapiApp } from '@strapi/strapi/admin';
import Dufs_Logo from './extensions/Dufs.png';
import './extensions/custom.css';

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  darkGrey: '#333333', // Example for light mode active state
  lightGrey: '#f0f0f0', // Example for dark mode active state
};

export default {
  config: {
    auth: { 
      logo: Dufs_Logo,
    },
    menu: { 
      logo: Dufs_Logo,
    },
    favicon: Dufs_Logo,
    theme: {
      light: {
        colors: {
          primary100: '#D1D1D1', // Lighter version for hover/focus
          primary200: '#B0B0B0',
          primary500: '#231F20', // black
          primary600: '#231F20',
          primary700: '#231F20',
          primary800: '#231F20',
    
          buttonPrimary500: '#231F20',
          buttonPrimary600: '#1A1A1A',
    
          neutral0: '#FFFFFF',
          neutral100: '#F4F4F4',
          neutral200: '#E0E0E0',
          neutral500: '#9E9E9E',
          neutral800: '#3A3A3A',
          neutral900: '#231F20',
    
          alternative100: '#F0F0F0',  // Hover background
          alternative200: '#E0E0E0',  // Selected background
    
          success500: '#4CAF50',
          danger500: '#F44336',
          warning500: '#FFC107',
        },
        fonts: {
          someFontVariable: "'RobotoLightCustom', Arial, sans-serif",
        },
      },
      dark: {
        colors: {
          // Primary colors matched to DUFS brand
          primary100: '#595657', // Accent shade
          primary200: '#4A4649', // Secondary shade
          primary500: '#FFFFFF', // White for primary text/buttons
          primary600: '#F5F5F5', // Slight gray for hover
          primary700: '#FFFFFF',
          primary800: '#FFFFFF',
    
          // Button styles - DUFS white buttons on dark background
          buttonPrimary500: '#FFFFFF',
          buttonPrimary600: '#E5E5E5',
          secondary500: '#4A4649', // Dark secondary
          secondary600: '#595657', // Slightly lighter secondary
          
          // Button text colors - black text on white buttons
          buttonNeutral0: '#231F20', // DUFS black text on white buttons
    
          // Base background - DUFS dark mode palette
          neutral0: '#231F20',       // Base background (DUFS Black)
          neutral25: '#282426',      // Slightly lighter black
          neutral50: '#302C2E',      // Panel/box backgrounds
          neutral75: '#3A3A3A',      // Tertiary level
          neutral100: '#2B2729',     // Card/sidebar backgrounds
          neutral150: '#353233',     // Additional level
          neutral200: '#3A3A3A',     // Input backgrounds
          neutral500: '#D9D9D9',     // Secondary text (lighter for readability)
          neutral800: '#FFFFFF',     // Main text (white)
          neutral900: '#FFFFFF',     // Strong emphasis text (white)
    
          alternative100: '#3A3A3A',  // Hover background
          alternative200: '#4A4649',  // Selected background - matches secondary
          alternative500: '#595657',  // Alternative secondary
          alternative600: '#6B6869',  // Alternative tertiary
          alternative700: '#7D7A7C',  // Alternative quaternary
          alternative900: '#FFFFFF',  // Alternative text
    
          // Form and input colors to override default blue
          formInputBackground: '#3A3A3A',
          formInputBorder: '#595657',
          formInputText: '#FFFFFF',
          formInputPlaceholder: '#B9B9B9',
          formInputDisabled: '#2B2729',
          
          // Additional background overrides to prevent blue tint
          boxShadow: '#000000',
          textNeutral: '#FFFFFF',
          inputBorder: '#595657',
    
          // Status indicators (unchanged for visibility)
          success500: '#4CAF50',
          danger500: '#F44336',
          warning500: '#FFC107',
          
          // Button status colors
          success100: '#0C3F23',
          success200: '#0F4C2A',
          danger100: '#4F1C18',
          danger200: '#5F2320',
          warning100: '#513D00',
          warning200: '#624A00',
        },
        fonts: {
          someFontVariable: "'RobotoLightCustom', Arial, sans-serif",
        },
      }
    },
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'DUFS',
        'app.components.LeftMenu.navbrand.workplace': 'DUFS',
        'app.components.LeftMenu.navbrand.workplace.description': 'DUFS',
        'app.components.LeftMenu.navbrand.workplace.subtitle': 'DUFS',
        "HomePage.header.title": "You logged in as: {name}",
        "HomePage.header.subtitle": "DUFS Blog Admin Panel",
        "Auth.form.welcome.subtitle": "Better Film, Better Viewers",
        "Auth.form.welcome.title": "DUFS Blog Admin Panel",
        "Auth.form.email.placeholder": "e.g. dhakauniversityfilmsociety@gmail.com",
        "Auth.form.button.login.strapi": "Login to DUFS Blog",
        "Auth.form.register.subtitle": "Credentials are only used to authenticate here. All saved data will be stored in your database.",
        "Settings.permissions.users.listview.header.subtitle": "All the users who have access to the DUFS Blog admin panel",
        "Auth.link.forgot-password": "The FIRST RULE of \"DUFS Blog\": You do not lose your PASSWORD!"
      },
    }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
