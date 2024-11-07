import { createContext, useState } from "react";

export const Contexts = createContext();

const Context = ({ children }) => {
    const [showBuyToken, setShowBuyToken] = useState(false)
    return (
        <Contexts.Provider
            value={{
                showBuyToken,
                setShowBuyToken,

            }}
        >
            {children}
        </Contexts.Provider>
    );
};

export default Context