"use client";
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const nombreRegistrado = localStorage.getItem('NombreRegistrado');
    if (nombreRegistrado) {
      setUsuario(nombreRegistrado);
    }
  }, []);

  const login = (nombre) => {
    setUsuario(nombre);
    localStorage.setItem('NombreRegistrado', nombre);
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('NombreRegistrado');
    localStorage.removeItem('EmailRegistrado');
    localStorage.removeItem('ContraseñaRegistrada');
    router.push('/views/login');
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
