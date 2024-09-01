import { useState, createContext, useContext } from "react"

const AuthContext = createContext();

interface Props {
  children: React.ReactNode;
}

export const useAuth = () => {
  const auth = useContext(AuthContext)

  return{
    auth
  }
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}