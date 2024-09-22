// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { ThemeProvider } from "@material-tailwind/react";
import { AxiosInterceptor } from './interceptors/axios.interceptor.tsx';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfigurator } from './utilities/snackbar-manager.tsx';

AxiosInterceptor();

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <ThemeProvider>
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  /* </StrictMode>, */
)
