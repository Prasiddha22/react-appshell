import Navbar from './Navbar';
import { Sidebar } from './Sidebar';

import React, { useLayoutEffect, useRef, useState } from 'react';

type NavHandle = React.ElementRef<typeof Navbar>;
type Props = {
  navbarContent?: React.ReactNode;
  navbarFullWidth?: boolean;
  navbarPosition?:
    | 'static'
    | 'relative'
    | 'absolute'
    | 'sticky'
    | 'fixed'
    | undefined;
  sidebarBackgroundColor: string;
  sidebarHeader?: React.ReactNode;
  sidebarContent?: React.ReactNode;
  sidebarFooter?: React.ReactNode;
  sidebarOpenedWidth?: number | string;
  sidebarClosedWidth?: number | string;
  children?: React.ReactNode;
  sidebarTransitionDuration?: number;
  sidebarOpen: boolean;
};

export const AppShell = ({
  navbarContent,
  navbarFullWidth = false,
  navbarPosition = 'sticky',
  sidebarBackgroundColor = '#fff',
  sidebarHeader,
  sidebarContent,
  sidebarFooter,
  sidebarOpenedWidth = '250px',
  sidebarClosedWidth = '0px',
  sidebarTransitionDuration = 0.5,
  children,
  sidebarOpen = true,
}: Props) => {
  const navRef = useRef<NavHandle>(null);
  const [top, setTop] = useState<number>(0);
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(true);

  useLayoutEffect(() => {
    if (mounted) {
      setTop(navRef.current?.getNavHeight() ?? 0);
    } else {
      setMounted(true);
    }
  }, [mounted]);

  const toggleBtn = () => {
    setToggle(!toggle);
  };
  return (
    <div style={{ height: '100vh' }}>
      {navbarFullWidth && (
        <Navbar navContent={navbarContent} ref={navRef} toggle={toggleBtn} />
      )}
      <div style={{ display: 'flex' }}>
        <div
        // style={{
        //   width: sidebarOpen ? sidebarOpenedWidth : sidebarClosedWidth,
        // }}
        >
          <Sidebar
            sidebarBackgroundColor={sidebarBackgroundColor}
            sidebarHeader={sidebarHeader}
            sidebarContent={sidebarContent}
            sidebarFooter={sidebarFooter}
            style={{
              top,
              width: sidebarOpen ? sidebarOpenedWidth : sidebarClosedWidth,
              transition: `all ${sidebarTransitionDuration}s ease-in-out`,
            }}
          />
        </div>
        <div>
          {!navbarFullWidth && (
            <Navbar
              navbarPosition={navbarPosition}
              navContent={navbarContent}
              toggle={toggleBtn}
            />
          )}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
