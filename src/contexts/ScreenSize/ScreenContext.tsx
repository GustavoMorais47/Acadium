import { createContext } from 'react';

export type ScreenContextType = {
    width: number,
    height: number
}

const ScreenContext = createContext<ScreenContextType>({
    width: null!,
    height: null!
});

export default ScreenContext;