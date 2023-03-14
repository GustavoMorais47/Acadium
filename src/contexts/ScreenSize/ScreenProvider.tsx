import React, { useEffect, useState } from "react";
import ScreenContext, { ScreenContextType } from "./ScreenContext"

const ScreeenProvider = ({children}:{children: JSX.Element}) => {
    const [screenSize, setScreenSize] = useState<ScreenContextType>({width: 0, height: 0});

    useEffect(() => {
        const updateScreenSize = () => {
          setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };
    
        // Adiciona um listener ao resize da janela para atualizar o tamanho da tela
        window.addEventListener('resize', updateScreenSize);
    
        // Chama a função para definir o tamanho inicial da tela
        updateScreenSize();
    
        // Remove o listener ao desmontar o componente
        return () => window.removeEventListener('resize', updateScreenSize);
      }, []);

    return <ScreenContext.Provider value={screenSize}>
    {children}
    </ScreenContext.Provider>
}

export default ScreeenProvider;