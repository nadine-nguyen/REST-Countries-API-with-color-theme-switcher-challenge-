const fontFamily = "'Nunito Sans', sans-serif;";

const darkTheme = {
  name: 'dark',
  background: 'hsl(207, 26%, 17%)',
  element: 'hsl(209, 23%, 22%)',
  elementSecondary: 'hsl(209, 23%, 25%)',
  text: 'hsl(0, 0%, 100%)',
  fontFamily,
};

const lightTheme = {
  name: 'light',
  text: 'hsl(200, 15%, 8%)',
  background: 'hsl(0, 0%, 98%)',
  element: 'hsl(0, 0%, 100%)',
  elementSecondary: 'hsl(0, 0%, 88%)',
  fontFamily,
};

export { darkTheme, lightTheme };
