import React, { createContext, useState } from 'react';

interface DimensionContextType {
    selectedDimension: string;
    setSelectedDimension: (dimension: string) => void;
}

export const DimensionContext = createContext<DimensionContextType>({
    selectedDimension: '',
    setSelectedDimension: () => {},
});

export const DimensionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedDimension, setSelectedDimension] = useState('');

    return (
        <DimensionContext.Provider value={{ selectedDimension, setSelectedDimension }}>
            {children}
        </DimensionContext.Provider>
    );
};