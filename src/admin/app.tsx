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
          // Primary colors
          primary100: '#464646', // Lighter version for hover/focus
          primary200: '#666666',
          primary500: '#FFFFFF', // white for dark mode
          primary600: '#FFFFFF',
          primary700: '#FFFFFF',
          primary800: '#FFFFFF',
    
          // Button styles
          buttonPrimary500: '#FFFFFF',
          buttonPrimary600: '#DDDDDD',
          secondary500: '#666666',
          secondary600: '#777777',
          
          // Button text colors
          buttonNeutral0: '#121212', // Text on primary buttons
    
          neutral0: '#121212',       // Base background
          neutral100: '#1E1E1E',     // Card/sidebar backgrounds
          neutral200: '#2C2C2C',     // Input backgrounds
          neutral500: '#BBBBBB',     // Secondary text
          neutral800: '#E0E0E0',     // Main text
          neutral900: '#FFFFFF',     // Strong emphasis text
    
          alternative100: '#333333',  // Hover background
          alternative200: '#444444',  // Selected background - more visible
    
          // Status indicators
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
        "Auth.form.welcome.subtitle": "Log in to your Admin account",
        "Auth.form.welcome.title": "Welcome to DUFS Blog!",
      },
    }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
