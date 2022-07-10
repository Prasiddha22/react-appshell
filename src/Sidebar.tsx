import React from 'react';

type Props = {
  style: React.CSSProperties;
};

export const Sidebar = ({ style }: Props) => {
  const top = style?.top ?? 0;
  return (
    <div
      style={{
        width: '20vw',
        background: '#00000050',
        position: 'sticky',
        left: 0,
        top,
        height: `calc(100vh-${top}px)`,
      }}
    ></div>
  );
};
