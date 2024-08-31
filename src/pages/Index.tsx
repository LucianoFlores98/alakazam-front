import { Home, Publication, Login, SignUp, Profile } from './index';

//Acceso Público
export const LandingV = () => <Home />
export const PublicationV = () => <Publication />
export const LoginV = () => <Login />
export const SignUpV = () => <SignUp />

//Logeado
export const HomeV = () => <Home />
export const UserProfileV = () => <Profile />
export const RealStateV = () => <h2>Inmobiliaria Perfil</h2>
export const CreatePublicationV = () => <h2>Crear Publicacion</h2>
