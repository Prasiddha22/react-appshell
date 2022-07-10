import React from 'react';

type Props = {
  style?: React.CSSProperties;
  sidebarHeader?: React.ReactNode;
  sidebarContent?: React.ReactNode;
  sidebarFooter?: React.ReactNode;
  sidebarBackgroundColor?: string;
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
  const width = style?.width ?? '25vw';
  return (
    <div
      style={{
        backgroundColor: sidebarBackgroundColor,
        width: width,
        position: 'sticky',
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
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
          }}
        >
          {sidebarHeader}
          {sidebarContent}
        </div>
        <div>{sidebarFooter}</div>
      </div>
    </div>
  );
};
