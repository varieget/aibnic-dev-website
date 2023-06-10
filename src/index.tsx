import 'global/base.scss';
import 'antd/dist/reset.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { ConfigProvider } from 'antd';
import Router from 'global/router';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00B4FF',
        },
      }}>
      <Router />
    </ConfigProvider>
  </React.StrictMode>
);
