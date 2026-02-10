import { Refine } from "@refinedev/core";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import routerProvider from "@refinedev/react-router-v6";

import { theme } from "../styles/theme";
import type { ReactNode } from "react";

import { MainLayout } from "../layout/MainLayout";
import { store } from "../store/store";

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Refine
              routerProvider={routerProvider}
              resources={[
                { name: "scoreboard", list: "/scoreboard" },
                { name: "teams", list: "/teams" },
              ]}
            >
              <MainLayout>{children}</MainLayout>
            </Refine>
          </ThemeProvider>
        </QueryClientProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
};
