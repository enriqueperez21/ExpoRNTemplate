import { getAllDataUser } from '@/services/DataService';
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [loadingState, setLoadingState] = useState(false)

  const login = async (userEmail, password) => {
    try {
      setLoadingState(true)
      const data = await getAllDataUser(userEmail, password)
      if(data) setUserData(data)
      setIsSignedIn(true)
      setLoadingState(false)
    } catch (error) {
      console.log(error)
      setErrorMessage(error)
      setLoadingState(false)
    }
  }

  const logout = () => {
    setIsSignedIn(false)
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ userData, isSignedIn, errorMessage, loadingState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};