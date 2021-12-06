import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { LightTheme } from 'common/style/theme';

export const TestContainer = ({ children }: { children?: ReactNode }) => (
  <MemoryRouter>
    <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
  </MemoryRouter>
);
