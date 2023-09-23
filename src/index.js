import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#1E045D",
        color: "#000000"
      },
    }),
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>

  </React.StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`
