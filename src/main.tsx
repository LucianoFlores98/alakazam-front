import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { ThemeProvider } from "@material-tailwind/react";
import { AxiosInterceptor } from './interceptors/axios.interceptor.tsx';

AxiosInterceptor();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
