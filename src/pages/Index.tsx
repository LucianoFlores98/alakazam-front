import { Home, Publication, Login, SignUp, Profile, NewPublication, MyProfile} from './index';

//Acceso Público
export const HomeV = () => <Home />
export const PublicationV = () => <Publication />
export const LoginV = () => <Login />
export const SignUpV = () => <SignUp />

//Logeado
export const UserProfileV = () => <Profile />
export const MyProfileV = () => <MyProfile />
export const RealStateV = () => <h2>Inmobiliaria Perfil</h2>
export const NewPublicationV = () => <NewPublication />
