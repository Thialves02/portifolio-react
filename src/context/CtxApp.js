import { useState, createContext } from 'react';

const Context = createContext();

export default function CtxApp({ children }) {
  const [tipoProjeto, setTipoProjeto] = useState('');

  return (
    <Context.Provider
      value={{
        tipoProjeto,
        setTipoProjeto,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, CtxApp };
