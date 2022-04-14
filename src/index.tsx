import {StrictMode} from 'react';
import App from './App';
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from 'react-query';
import {  RecoilRoot  } from "recoil"
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';


const root = createRoot(document.getElementById("root") as HTMLElement) ;
const queryClient = new QueryClient()

root.render(
  <StrictMode>
    {/* @ts-ignore */}
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        {/* @ts-ignore */}
        <HelmetProvider >
          {/* @ts-ignore */}
          <QueryClientProvider client={queryClient} >
            <App />
          </QueryClientProvider>
        </HelmetProvider>
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>,
);
