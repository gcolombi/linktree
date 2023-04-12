import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

interface ModalContextType {
    open: boolean;
    setModal: (state: boolean) => void;
}

const ModalContext = createContext<ModalContextType>({
    open: false,
    setModal: () => {}
});

export function ModalContextProvider({
    children
}: {
    children: ReactNode
}) {
    const [open, setIsOpen] = useState(false);

    const setModal = useCallback((state: boolean) => {
        setIsOpen(state);
    }, [setIsOpen]);

    const contextValue: ModalContextType = {
        open,
        setModal
    }

    return (
        <ModalContext.Provider
            value={contextValue}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default function useModalContext(): ModalContextType {
    return useContext(ModalContext);
}