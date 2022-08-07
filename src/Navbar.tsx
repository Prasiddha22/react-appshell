import React, {
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

type Props = {
  navContent: React.ReactNode;
  toggle?: () => void;
  navbarPosition?:
    | 'static'
    | 'relative'
    | 'absolute'
    | 'sticky'
    | 'fixed'
    | undefined;
};

type NavHandle = {
  getNavHeight: () => number;
  toggleSidebar: () => void;
};

const Navbar: React.ForwardRefRenderFunction<NavHandle, Props> = (
  { navContent, toggle, navbarPosition = 'sticky' },
  ref
) => {
  const navRef = useRef<HTMLDivElement>(null);

  const [navHeight, setNavHeight] = useState<number>(0);

  useLayoutEffect(() => {
    setNavHeight(navRef.current?.offsetHeight ?? 0);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      getNavHeight: () => {
        return navHeight;
      },
      toggleSidebar: () => {
        if (toggle) {
          toggle();
        }
      },
    };
  });

  return (
    <div
      ref={navRef}
      style={{
        position: navbarPosition,
        top: 0,
        width: '100%',
        background: 'red',
        zIndex: 999,
      }}
    >
      {navContent}
    </div>
  );
};

export default React.forwardRef(Navbar);
