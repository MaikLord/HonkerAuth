import React from 'react';
import GlobalStyle from '../src/styles/globalStyles';
import AppRoutes from './AppRoutes'

export default function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
};
