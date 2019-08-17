import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import { AppProvider } from './AppProvider';
import AppBar from './AppBar';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard';

function App() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Dashboard />
          </Content>
        </AppProvider>
      </AppLayout>
    );
}

export default App;
