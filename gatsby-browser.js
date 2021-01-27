/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import * as React from 'react';
import { ThemeProvider } from './src/components/themeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
