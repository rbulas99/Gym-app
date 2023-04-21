import React, { createContext, useState } from 'react';

type UserContextProviderProps = {
  children: React.ReactNode
}
type UserContextType = {
  userId: number | null,
  setUserId: React.Dispatch<React.SetStateAction<number | null>>
  
};
const UserContext = createContext<UserContextType | null>(null);
const defaultValue = Number(localStorage.getItem('userId'))

const UserContextProvider = ( {children} : UserContextProviderProps): JSX.Element => {
  const [userId, setUserId] = useState<number | null>(defaultValue)
  return (
    <UserContext.Provider value={{userId, setUserId}} >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };