import React, { useImperativeHandle, useRef } from 'react';

type Props = {
  navContent: React.ReactNode;
};

type NavHandle = {
  getNavHeight: () => number;
};

const Navbar: React.ForwardRefRenderFunction<NavHandle, Props> = (
  { navContent },
  ref
) => {
  const navRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      getNavHeight: () => {
        return navRef.current?.clientHeight || 0;
      },
    };
  });

  return (
    <div
      ref={navRef}
      style={{ padding: '10px 10px', position: 'sticky', top: 0 }}
    >
      {navContent}
    </div>
  );
};

export default React.forwardRef(Navbar);
