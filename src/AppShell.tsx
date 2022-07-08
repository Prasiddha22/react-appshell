import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import React from 'react';
type Props = {
  navbarFullWidth?: boolean;
};

export const AppShell = ({ navbarFullWidth = false }: Props) => {
  return (
    <div>
      {navbarFullWidth && <Navbar />}
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div>
          {!navbarFullWidth && <Navbar />}
          <div>
            <h1>AppShell</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
