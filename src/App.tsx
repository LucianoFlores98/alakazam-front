import MainLayout from "./layouts/MainLayout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {  HomeV, LoginV, PublicationV, NewPublicationV , UserProfileV, RealStateV, MyProfileV} from "./pages/Index"
import {ProtectedRoute} from "./components/ProtectedRoute"
import { useAuthStore } from "./store/auth"

function App() {

  const isAuth = useAuthStore(state => state.isAuth)

  return (

    <BrowserRouter>
        <MainLayout>
          <Routes>
            {/**Rutas publicas */}
            <Route path="/" element={<HomeV />}/>
            <Route path="*" element={<>NOT FOUND</>} />
            <Route path="/publication/:publicationId" element={<PublicationV />} />
            <Route path="/login" element={<LoginV />} />

            {/** Rutas privadas (!!user nos resume a un boolean, si existe devuelve true, sino devuelve un false) */}
            <Route element={<ProtectedRoute  isAllowed={isAuth} />}>
            <Route path="/profile" element={<UserProfileV />} />
            <Route path="/my-profile" element={<MyProfileV />} />
            <Route path="/real-state" element={<RealStateV />} />
              <Route path="/new-publication" element={<NewPublicationV />} />
            </Route> 
          </Routes>
        </MainLayout>
    </BrowserRouter>
  )
}

export default App
