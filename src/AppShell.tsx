import Navbar from './Navbar';
import { Sidebar } from './Sidebar';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { useWindowSize } from './useWindowResize';

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
  sidebarContent: React.ReactNode;
  sidebarFooter?: React.ReactNode;
  sidebarOpenedWidth?: number | string;
  sidebarClosedWidth?: number | string;
  children: React.ReactNode;
  sidebarTransitionDuration?: number;
  sidebarOpen: boolean;
  sidebarBreakpoint?: 'sm' | 'md' | 'lg' | 'xl';
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
  sidebarBreakpoint = 'sm',
}: Props) => {
  const navRef = useRef<NavHandle>(null);
  const [top, setTop] = useState<number>(0);
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(true);
  const { width: windowWidth } = useWindowSize();

  useLayoutEffect(() => {
    if (mounted) {
      setTop(navRef.current?.getNavHeight() ?? 0);
    } else {
      setMounted(true);
    }
  }, [mounted, navbarFullWidth, windowWidth]);

  const toggleBtn = () => {
    setToggle(!toggle);
  };

  const getBreakpointWidth = () => {
    switch (sidebarBreakpoint) {
      case 'sm':
        return 576;
      case 'md':
        return 768;
      case 'lg':
        return 992;
      case 'xl':
        return 1200;
      default:
        return 576;
    }
  };

  return (
    <div style={{ height: '100vh' }}>
      {(navbarFullWidth || windowWidth < getBreakpointWidth()) && (
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
            getBreakpointWidth={getBreakpointWidth()}
            style={{
              top,
              width: sidebarOpen ? sidebarOpenedWidth : sidebarClosedWidth,
              transition: `width ${sidebarTransitionDuration}s ease-in-out`,
            }}
          />
        </div>
        <div>
          {!navbarFullWidth && windowWidth >= 520 && (
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
