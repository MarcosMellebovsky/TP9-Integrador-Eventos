"use client";
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null); 
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user'); 

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUsuario(storedUser); 
    }
  }, []);

  const login = (token, userEmail) => {
    setToken(token);
    
    setUsuario(userEmail);
    localStorage.setItem('token', token);
    localStorage.setItem('user', userEmail); 
  };

  const logout = () => {
    setToken(null);
    setUsuario(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user'); 
    router.push('/views/login');
  };

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
