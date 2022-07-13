import React from 'react';

// Theme switch context should be 'grommet' theme by default
export const ThemeSwitchContext = React.createContext({
  themeName: 'grommet',
  setThemeName: () => {},
});
