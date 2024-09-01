import MainLayout from "./layouts/MainLayout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CreatePublicationV, HomeV, LoginV, PublicationV, RealStateV, UserProfileV } from "./pages/Index"
import ProtectedRoute from "./components/ProtectedRoute"
import { useState } from "react"
import { Button } from "@material-tailwind/react"

interface User {
  id: number;
  name: string;
  permission: string[];
} 

function App() {

  //Puede contener un usuario o ser nulo, por defecto Nulo hasta que se inice sesión
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    //request done
    setUser({
      id:1,
      name: "John",
      permission: ['']
    })
  }

  const logout = () => setUser(null);

  return (

    <BrowserRouter>
      <MainLayout>
      {
        user ? (
          <Button onClick={logout}>Logout</Button>
        ): (
          <Button onClick={login}>Login</Button>
        )
      } 
        <Routes>
          {/**Rutas publicas */}
          <Route path="/" element={<HomeV />}/>
          <Route path="*" element={<>NOT FOUND</>} />
          <Route path="/publication/:publicationId" element={<PublicationV />} />
          <Route path="/login" element={<LoginV />} />
          {/** Rutas privadas (!!user nos resume a un boolean, si existe devuelve true, sino devuelve un false) */}
          <Route element={<ProtectedRoute isAllowed={!!user && user.permission.includes('verified')} />}>
            <Route path="/create-publication" element={<CreatePublicationV />} />
            <Route path="/profile" element={<UserProfileV />} />
            <Route path="/real-state" element={<RealStateV />} />
          </Route>
        </Routes>

      </MainLayout>

    </BrowserRouter>
  )
}

export default App
