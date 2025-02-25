import React, { createContext, useState, useContext } from 'react';

interface OrientationContextType {
  orientation: string;
  setOrientation: (orientation: string) => void;
}

export const OrientationContext = createContext<OrientationContextType>({
  orientation: 'vertical',
  setOrientation: () => {},
});

export const OrientationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orientation, setOrientation] = useState<string>('vertical');

  return (
    <OrientationContext.Provider value={{ orientation, setOrientation }}>
      {children}
    </OrientationContext.Provider>
  );
};

export const useOrientation = () => useContext(OrientationContext);