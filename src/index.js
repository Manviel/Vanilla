import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { Store } from './utils/context';

import ScrollToTop from './utils/ScrollToTop';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Store>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Store>
);
