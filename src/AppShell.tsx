import Navbar from './Navbar';
import { Sidebar } from './Sidebar';

import React, { useLayoutEffect, useRef, useState } from 'react';

type ToogleProp = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const toggleContext = React.createContext<ToogleProp>({
  open: false,
  setOpen: () => {},
});

export default toggleContext;

type Props = {
  navbarFullWidth?: boolean;
};

export const AppShell = ({ navbarFullWidth = true }: Props) => {
  type NavHandle = React.ElementRef<typeof Navbar>;
  const navRef = useRef<NavHandle>(null);
  const [top, setTop] = useState<number>(0);
  useLayoutEffect(() => {
    setTop(navRef.current?.getNavHeight() ?? 0);
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      {navbarFullWidth && <Navbar navContent={<></>} ref={navRef} />}
      <div style={{ display: 'flex' }}>
        <Sidebar style={{ top }} />
        <div>
          {!navbarFullWidth && <Navbar navContent={<></>} ref={navRef} />}
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              possimus asperiores sequi autem ab nobis voluptatum ex placeat
              nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
              facilis repellat quos dolorem.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              possimus asperiores sequi autem ab nobis voluptatum ex placeat
              nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
              facilis repellat quos dolorem.
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                possimus asperiores sequi autem ab nobis voluptatum ex placeat
                nam, blanditiis rerum eveniet adipisci pariatur accusamus libero
                facilis repellat quos dolorem.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
