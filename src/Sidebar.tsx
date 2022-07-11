import React from 'react';
import { useWindowSize } from './useWindowResize';

type Props = {
  style?: React.CSSProperties;
  sidebarHeader?: React.ReactNode;
  sidebarContent?: React.ReactNode;
  sidebarFooter?: React.ReactNode;
  sidebarBackgroundColor?: string;
  sidebarOpenedWidth?: number | string;
};

export const Sidebar = ({
  style,
  sidebarHeader,
  sidebarContent,
  sidebarFooter,
  sidebarBackgroundColor,
}: Props) => {
  // const top = style?.top ?? 0
  const top = style?.top ?? 0;
  const width = style?.width ?? '250px';
  const { width: windowWidth } = useWindowSize();
  return (
    <div
      style={{
        backgroundColor: sidebarBackgroundColor,
        width: width,
        position: windowWidth < 520 ? 'fixed' : 'sticky',
        left: 0,
        top: top,
        height: `calc(100vh - ${top}px)`,
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
          // width: sidebarOpenedWidth,
          overflowX: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            whiteSpace: 'pre',
          }}
        >
          {sidebarHeader}
          {sidebarContent}
        </div>
        <div
          style={{
            whiteSpace: 'pre',
          }}
        >
          {sidebarFooter}
        </div>
      </div>
    </div>
  );
};
