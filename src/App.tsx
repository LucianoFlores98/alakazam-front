import MainLayout from "./layouts/MainLayout"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { CreatePublicationV, HomeV, LandingV, PublicationV, RealStateV, UserProfileV } from "./pages/Index"
import { useState } from "react"
import { Button } from "@material-tailwind/react";

function App() {

  const [user, setUser] = useState(null);

  //Funcion para realizar la peticion al backend para validar el usuario, por el momento mockeado
  const login = () => {
    // Request done
    setUser({
      id: 1,
      name:"John"
    })
  }

  const logout = () => setUser(null)


  return (

    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingV />}/>
          <Route path="*" element={<>NOT FOUND</>} />

          <Route path="/home" element={<HomeV />}/>
          <Route path="/publication/:publicationId" element={<PublicationV />} />
          <Route path="/create-publication" element={<CreatePublicationV />} />
          <Route path="/profile" element={<UserProfileV />} />
          <Route path="/real-state" element={<RealStateV />} />
        </Routes>
        {
          user ? (
            <Button onClick={logout}>Logout</Button>
          ): (
            <Button onClick={login}>Login</Button>
          )
        }
      </MainLayout>

    </BrowserRouter>
  )
}

export default App
